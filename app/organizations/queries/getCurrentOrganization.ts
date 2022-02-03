import { enforceSuperAdminIfNotCurrentOrganization, setDefaultOrganizationId } from "app/core/utils"
import { resolver, NotFoundError } from "blitz"
import db from "db"
import { z } from "zod"

const GetOrganization = z.object({
  // This accepts type of undefined, but is required at runtime
  id: z.string().cuid().optional(),
})

export default resolver.pipe(
  resolver.zod(GetOrganization),
  resolver.authorize(),
  setDefaultOrganizationId,
  enforceSuperAdminIfNotCurrentOrganization,
  async ({ id }, { session: { orgId } }) => {
    console.log({ orgId, id })

    const [organization, domains] = await Promise.all([
      db.organization.findFirst({
        where: { id: id || orgId },

        include: {
          defaultDomain: true,
          domains: true,
          externalProfiles: true,
        },
      }),
      db.domain.findMany({
        where: { organizationId: { equals: null }, provider: { equals: "NATIVE" } },
        select: { id: true, domain: true, provider: true },
      }),
    ])

    if (!organization) throw new NotFoundError()

    const org = { ...organization, domains: [...organization.domains, ...domains] }
    console.log(org)
    return org
  }
)
