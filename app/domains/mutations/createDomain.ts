import { setDefaultOrganizationId, enforceSuperAdminIfNotCurrentOrganization } from "app/core/utils"
import { resolver } from "blitz"
import db from "db"
import { z } from "zod"
import { CreateDomain } from "../validations"

export default resolver.pipe(
  resolver.zod(CreateDomain),
  resolver.authorize(),
  setDefaultOrganizationId,
  enforceSuperAdminIfNotCurrentOrganization,
  async (input, { session: { defaultOrgId } }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const domain = await db.domain.create({
      data: { ...input, vercelId: "000", organizationId: defaultOrgId },
    })

    console.log(domain)
    return domain
  }
)
