import { resolver } from "blitz"
import db from "db"
import { z } from "zod"
import { OrganizationUpdateSchema } from "../validations"

export default resolver.pipe(
  resolver.zod(OrganizationUpdateSchema),
  resolver.authorize(),
  async ({ ...data }, { session: { defaultOrgId } }) => {
    const space = await db.organization.update({ where: { id: defaultOrgId }, data })

    return space
  }
)
