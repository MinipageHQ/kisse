import * as z from "zod"
import { CompleteAsset, RelatedAssetModel, CompleteOrganization, RelatedOrganizationModel } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const AssetCategoryModel = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  name: z.string(),
  metadata: jsonSchema,
  privateMetadata: jsonSchema,
  organizationId: z.string().nullish(),
})

export interface CompleteAssetCategory extends z.infer<typeof AssetCategoryModel> {
  assets: CompleteAsset[]
  organization?: CompleteOrganization | null
}

/**
 * RelatedAssetCategoryModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedAssetCategoryModel: z.ZodSchema<CompleteAssetCategory> = z.lazy(() => AssetCategoryModel.extend({
  assets: RelatedAssetModel.array(),
  organization: RelatedOrganizationModel.nullish(),
}))
