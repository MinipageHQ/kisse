import { resolver } from "blitz"
import db from "db"
import { z } from "zod"
import { UpdateLinkInput } from "../validations"

export default resolver.pipe(
  resolver.zod(UpdateLinkInput),
  resolver.authorize(),
  async ({ id, ...data }, { session: { defaultOrgId } }) => {
    const link = await db.link.update({ where: { id }, data })
    return link
  }
)
