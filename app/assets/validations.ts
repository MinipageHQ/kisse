import { AssetModel } from "db/zod"
import { z } from "zod"

const CreateAsset = z.object({
  organizationId: z.string().cuid().optional(),
  name: z.string().max(255),
  description: z.string().max(3000),
  status: z.enum(["DRAFT", "ARCHIVED", "LIVE", "SUSPENDED"]),
  categoryId: z.string().cuid().optional(),
  assetTypeId: z.string().cuid().optional(),
  quantity: z.number().min(-1).default(-1),
  price: z.number().min(0),
  currency: z.enum(["USD", "EUR", "TRY"]).default("USD"),
})

export const CreateAssetSchema = AssetModel.pick({
  name: true,
  description: true,
  assetCategoryId: true,
  assetTypeId: true,
  price: true,
  currency: true,
}).required()

export const UpdateAssetSchema = AssetModel.pick({}).extend({}).partial({})
