import { resolver } from "blitz"
import db from "db"
import { z } from "zod"
import { OnboardedOrganizationSchema } from "../validations"

export default resolver.pipe(
  resolver.zod(OnboardedOrganizationSchema),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const space = await db.organization.update({ where: { id }, data })

    return space
  }
)
