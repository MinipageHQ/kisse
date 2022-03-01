import * as z from "zod"
import {
  CompleteAuditLog,
  RelatedAuditLogModel,
  CompleteOrganization,
  RelatedOrganizationModel,
  CompleteUser,
  RelatedUserModel,
} from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() =>
  z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)])
)

export const ApiKeyModel = z.object({
  id: z.string(),
  createdAt: z.date(),
  description: z.string().nullish(),
  ipRestrictions: jsonSchema,
  apiKey: z.string(),
  name: z.string().nullish(),
  organizationId: z.string().nullish(),
  referrerRestrictions: jsonSchema,
  scopes: jsonSchema,
  updatedAt: z.date(),
  userId: z.string().nullish(),
})

export interface CompleteApiKey extends z.infer<typeof ApiKeyModel> {
  auditLogs: CompleteAuditLog[]
  organization?: CompleteOrganization | null
  user?: CompleteUser | null
}

/**
 * RelatedApiKeyModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedApiKeyModel: z.ZodSchema<CompleteApiKey> = z.lazy(() =>
  ApiKeyModel.extend({
    auditLogs: RelatedAuditLogModel.array(),
    organization: RelatedOrganizationModel.nullish(),
    user: RelatedUserModel.nullish(),
  })
)
