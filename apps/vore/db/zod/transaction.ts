import * as z from "zod"
import { Currency } from "@prisma/client"
import { CompleteOrganization, RelatedOrganizationModel, CompleteAsset, RelatedAssetModel } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const TransactionModel = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  organizationId: z.string(),
  assetSnapshot: jsonSchema,
  assetTypeId: z.string(),
  assetType: jsonSchema,
  status: z.string(),
  statusHistory: jsonSchema,
  metadata: jsonSchema,
  privateMetadata: jsonSchema,
  cancellationReason: z.string(),
  ownerId: z.number().int(),
  takerId: z.number().int(),
  quantity: z.number().int(),
  startDate: z.date(),
  endDate: z.date(),
  duration: jsonSchema,
  timeunit: z.string(),
  unitPrice: z.number(),
  value: z.number(),
  ownerAmount: z.number(),
  takerAmount: z.number(),
  platformAmount: z.number(),
  ownerFees: z.number(),
  takerFees: z.number(),
  currency: z.nativeEnum(Currency),
  completedAt: z.date(),
  cancelledAt: z.date(),
  assetId: z.string(),
})

export interface CompleteTransaction extends z.infer<typeof TransactionModel> {
  organization: CompleteOrganization
  asset: CompleteAsset
}

/**
 * RelatedTransactionModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedTransactionModel: z.ZodSchema<CompleteTransaction> = z.lazy(() => TransactionModel.extend({
  organization: RelatedOrganizationModel,
  asset: RelatedAssetModel,
}))
