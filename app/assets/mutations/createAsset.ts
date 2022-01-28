import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const CreateAsset = z.object({
  organizationId: z.number(),
  name: z.string().max(255),
  description: z.string().max(3000),
  status: z.enum(["DRAFT", "ARCHIVED", "LIVE", "SUSPENDED"]),
  categoryId: z.number(),
  assetTypeId: z.number(),
  quantity: z.number().min(0),
  price: z.number().min(0),
  currency: z.enum(["USD", "EUR", "TRY"]),
})

export default resolver.pipe(resolver.zod(CreateAsset), resolver.authorize(), async (input) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const asset = await db.asset.create({ data: input })

  return asset
})
