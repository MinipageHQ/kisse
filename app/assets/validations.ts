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
  organizationId: true,
  name: true,
  description: true,
})
  .extend({
    // inviteCode: z.string().min(1).max(24),
  })
  .partial({})

export const UpdateAssetSchema = AssetModel.pick({})
  .extend({
    // inviteCode: z.string().min(1).max(24),
  })
  .partial({})
