import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const UpdateOrganization = z.object({
  id: z.number(),
  name: z.string(),
})

export default resolver.pipe(
  resolver.zod(UpdateOrganization),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const space = await db.space.update({ where: { id }, data })

    return space
  }
)
