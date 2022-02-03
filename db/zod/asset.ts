import * as z from "zod"
import { AssetStatus, Currency } from "@prisma/client"
import { CompleteOrganization, RelatedOrganizationModel, CompleteAssetCategory, RelatedAssetCategoryModel, CompleteAssetType, RelatedAssetTypeModel, CompleteTransaction, RelatedTransactionModel } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const AssetModel = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  status: z.nativeEnum(AssetStatus),
  createdAt: z.date(),
  updatedAt: z.date(),
  organizationId: z.string(),
  assetCategoryId: z.string().nullish(),
  assetTypeId: z.string(),
  price: z.number(),
  currency: z.nativeEnum(Currency),
  metadata: jsonSchema,
  quantity: z.number().int(),
})

export interface CompleteAsset extends z.infer<typeof AssetModel> {
  organization: CompleteOrganization
  assetCategory?: CompleteAssetCategory | null
  assetType: CompleteAssetType
  transactions: CompleteTransaction[]
}

/**
 * RelatedAssetModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedAssetModel: z.ZodSchema<CompleteAsset> = z.lazy(() => AssetModel.extend({
  organization: RelatedOrganizationModel,
  assetCategory: RelatedAssetCategoryModel.nullish(),
  assetType: RelatedAssetTypeModel,
  transactions: RelatedTransactionModel.array(),
}))
