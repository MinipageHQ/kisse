import { resolver } from "blitz"
import db from "db"
import { CreateLinkInput } from "../validations"

export default resolver.pipe(
  resolver.authorize(),
  resolver.zod(CreateLinkInput),
  async (input, { session: { defaultOrgId } }) => {
    const link = await db.link.create({ data: { ...input, organizationId: defaultOrgId as string } })

    return link
  }
)
