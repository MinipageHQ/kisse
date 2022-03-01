import { resolver } from "blitz"
import db, { Membership } from "db"
import { CreateOrganizationWithInviteCodeSchema } from "app/organizations/validations"
import { organizationCreatedQueue } from "bull/queues"

async function resolveDomain(domainId: string) {
  const domain = await db.domain.findFirst({ where: { id: domainId }, select: { domain: true } })
  return domain?.domain
}

async function isDomainAvailable(requestedDomain: string) {
  const domain = await db.domain.findFirst({
    where: { domain: requestedDomain },
    select: { domain: true },
  })
  return domain?.domain ? false : true
}
export default resolver.pipe(
  resolver.zod(CreateOrganizationWithInviteCodeSchema),
  async ({ inviteCode, name, slug, defaultDomainId }, ctx) => {
    const isValidInviteCode = await db.inviteCode.findFirst({
      where: { code: inviteCode, userId: null },
    })

    if (!isValidInviteCode) {
      throw new Error("INVALID_CODE")
    }

    const domain = await resolveDomain(defaultDomainId)
    const domainAvailable = await isDomainAvailable(`${slug}.${domain}`)

    if (!domainAvailable) {
      throw new Error("DOMAIN_NOT_AVAILABLE")
    }

    const user = await db.user.update({
      where: {
        id: ctx.session.userId as string,
      },
      data: {
        roles: ["CREATOR", "USER"],
        memberships: {
          create: {
            role: "OWNER",
            organization: {
              create: {
                name: name || slug || "a new creator",
                slug,
                domains: {
                  create: {
                    domain: `${slug}.${domain}`,
                  },
                },
              },
            },
          },
        },
      },
      select: {
        id: true,
        roles: true,
        memberships: {
          select: {
            id: true,
            organizationId: true,
            role: true,
            organization: {
              select: {
                id: true,
                domains: {
                  select: {
                    domain: true,
                  },
                },
              },
            },
          },
        },
      },
    })
    // user.memberships
    const createdMembership = user.memberships[0] as unknown as Membership

    await Promise.all([
      db.inviteCode.update({
        where: { id: isValidInviteCode.id },
        data: { userId: user.id, usedAt: new Date() },
      }),
      ctx.session.$setPublicData({
        roles: [...user.roles, createdMembership.role],
        defaultOrgId: createdMembership.organizationId,
      }),
      organizationCreatedQueue.add(`organization-created-${createdMembership.organizationId}`, {
        organizationId: createdMembership.organizationId,
      }),
    ])
    return user
  }
)
