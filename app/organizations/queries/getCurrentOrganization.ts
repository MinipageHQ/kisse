import { enforceSuperAdminIfNotCurrentOrganization, setDefaultOrganizationId } from "app/core/utils"
import { resolver, NotFoundError } from "blitz"
import db from "db"
import { z } from "zod"

const GetOrganization = z.object({
  // This accepts type of undefined, but is required at runtime
  id: z.number().optional(),
})

export default resolver.pipe(
  resolver.zod(GetOrganization),
  resolver.authorize(),
  setDefaultOrganizationId,
  enforceSuperAdminIfNotCurrentOrganization,

  async ({ id }, { session: { orgId } }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const organization = await db.organization.findFirst({ where: { id: id || orgId } })

    if (!organization) throw new NotFoundError()

    return organization
  }
)
