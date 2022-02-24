import { resolver } from "blitz"
import db, { Membership } from "db"
import { CreateOrganizationWithInviteCodeSchema } from "app/organizations/validations"
import organizationCreated from "app/api/_/jobs/organization-created"

export default resolver.pipe(
  resolver.zod(CreateOrganizationWithInviteCodeSchema),
  async ({ inviteCode, name, slug, defaultDomainId }, ctx) => {
    const isValidInviteCode = await db.inviteCode.findFirst({
      where: { code: inviteCode, userId: null },
    })

    if (!isValidInviteCode) {
      throw new Error("INVALID_CODE")
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
                name: name || "a new creator",
                slug,
                defaultDomainId,
              },
            },
          },
        },
      },
      include: {
        memberships: true,
      },
    })
    const createdMembership = user.memberships[0] as Membership

    await Promise.all([
      db.inviteCode.update({
        where: { id: isValidInviteCode.id },
        data: { userId: user.id, usedAt: new Date() },
      }),
      ctx.session.$setPublicData({
        roles: [...user.roles, createdMembership.role],
        defaultOrgId: createdMembership.organizationId,
      }),
      organizationCreated.enqueue({
        organizationId: createdMembership.organizationId,
      }),
    ])
    return user
  }
)