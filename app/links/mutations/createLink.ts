import { resolver } from "blitz"
import db from "db"
import { CreateLinkInput } from "../validations"

export default resolver.pipe(
  resolver.authorize(),
  resolver.zod(CreateLinkInput),
  async (input, { session: { orgId } }) => {
    const link = await db.link.create({ data: { ...input, organizationId: orgId as string } })

    return link
  }
)
