import * as z from "zod"
import { PlatformFeatures } from "@prisma/client"
import { CompleteAsset, RelatedAssetModel } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const AssetTypeModel = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  timeBased: z.boolean(),
  infiniteStock: z.boolean(),
  name: z.string(),
  pricing: jsonSchema,
  timing: jsonSchema,
  unavailableWhen: jsonSchema,
  transactionProcess: jsonSchema,
  isDefault: z.boolean(),
  active: z.boolean(),
  requiredFeatures: z.nativeEnum(PlatformFeatures).array(),
  metadata: jsonSchema,
  privateMetadata: jsonSchema,
})

export interface CompleteAssetType extends z.infer<typeof AssetTypeModel> {
  assets: CompleteAsset[]
}

/**
 * RelatedAssetTypeModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedAssetTypeModel: z.ZodSchema<CompleteAssetType> = z.lazy(() => AssetTypeModel.extend({
  assets: RelatedAssetModel.array(),
}))
