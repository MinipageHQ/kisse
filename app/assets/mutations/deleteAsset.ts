import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const DeleteAsset = z.object({
  id: z.string().cuid(),
})

export default resolver.pipe(resolver.zod(DeleteAsset), resolver.authorize(), async ({ id }) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const asset = await db.asset.deleteMany({ where: { id } })

  return asset
})
