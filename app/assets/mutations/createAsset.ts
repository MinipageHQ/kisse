import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const CreateAsset = z.object({
  name: z.string(),
})

export default resolver.pipe(resolver.zod(CreateAsset), resolver.authorize(), async (input) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const asset = await db.asset.create({ data: input })

  return asset
})
