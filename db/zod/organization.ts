import * as z from "zod"
import { PlatformFeatures } from "@prisma/client"
import {
  CompleteMembership,
  RelatedMembershipModel,
  CompleteDocument,
  RelatedDocumentModel,
  CompleteAsset,
  RelatedAssetModel,
  CompleteOrder,
  RelatedOrderModel,
  CompleteTransaction,
  RelatedTransactionModel,
  CompleteLink,
  RelatedLinkModel,
  CompleteDomain,
  RelatedDomainModel,
  CompleteExternalProfiles,
  RelatedExternalProfilesModel,
  CompleteApiKey,
  RelatedApiKeyModel,
  CompleteAuditLog,
  RelatedAuditLogModel,
  CompleteWebhook,
  RelatedWebhookModel,
  CompleteAssetCategory,
  RelatedAssetCategoryModel,
} from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() =>
  z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)])
)

export const OrganizationModel = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string().nullish(),
  description: z.string().nullish(),
  profileMedia: jsonSchema,
  metadata: jsonSchema,
  privateMetadata: jsonSchema,
  stripeSellerId: z.string().nullish(),
  stripeCustomerId: z.string().nullish(),
  defaultDomainId: z.string().nullish(),
  platformFeatures: z.nativeEnum(PlatformFeatures).array(),
})

export interface CompleteOrganization extends z.infer<typeof OrganizationModel> {
  memberships: CompleteMembership[]
  documents: CompleteDocument[]
  assets: CompleteAsset[]
  orders: CompleteOrder[]
  transactions: CompleteTransaction[]
  links: CompleteLink[]
  defaultDomain?: CompleteDomain | null
  domains: CompleteDomain[]
  externalProfiles: CompleteExternalProfiles[]
  ApiKey: CompleteApiKey[]
  AuditLog: CompleteAuditLog[]
  Webhook: CompleteWebhook[]
  AssetCategory: CompleteAssetCategory[]
}

/**
 * RelatedOrganizationModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedOrganizationModel: z.ZodSchema<CompleteOrganization> = z.lazy(() =>
  OrganizationModel.extend({
    memberships: RelatedMembershipModel.array(),
    documents: RelatedDocumentModel.array(),
    assets: RelatedAssetModel.array(),
    orders: RelatedOrderModel.array(),
    transactions: RelatedTransactionModel.array(),
    links: RelatedLinkModel.array(),
    defaultDomain: RelatedDomainModel.nullish(),
    domains: RelatedDomainModel.array(),
    externalProfiles: RelatedExternalProfilesModel.array(),
    ApiKey: RelatedApiKeyModel.array(),
    AuditLog: RelatedAuditLogModel.array(),
    Webhook: RelatedWebhookModel.array(),
    AssetCategory: RelatedAssetCategoryModel.array(),
  })
)
