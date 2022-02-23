import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const UpdateDomain = z.object({
  id: z.string().cuid(),
  // name: z.string(),
})

export default resolver.pipe(
  resolver.zod(UpdateDomain),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const domain = await db.domain.update({ where: { id }, data })

    return domain
  }
)
