import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const UpdateAsset = z.object({
  id: z.string().cuid(),
  name: z.string(),
})

export default resolver.pipe(
  resolver.zod(UpdateAsset),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const asset = await db.asset.update({ where: { id }, data })

    return asset
  }
)
