import * as z from "zod"
import {
  CompleteOrganization,
  RelatedOrganizationModel,
  CompleteUser,
  RelatedUserModel,
  CompleteApiKey,
  RelatedApiKeyModel,
} from "./index"

export const AuditLogModel = z.object({
  createdAt: z.date(),
  event: z.string(),
  rawEvent: z.string(),
  id: z.string(),
  organizationId: z.string().nullish(),
  updatedAt: z.date(),
  userId: z.string().nullish(),
  apiKeyId: z.string().nullish(),
  ipAddress: z.string().nullish(),
  userAgent: z.string().nullish(),
  city: z.string().nullish(),
  region: z.string().nullish(),
  timezone: z.string().nullish(),
  countryCode: z.string().nullish(),
  browser: z.string().nullish(),
  operatingSystem: z.string().nullish(),
})

export interface CompleteAuditLog extends z.infer<typeof AuditLogModel> {
  organization?: CompleteOrganization | null
  user?: CompleteUser | null
  apiKey?: CompleteApiKey | null
}

/**
 * RelatedAuditLogModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedAuditLogModel: z.ZodSchema<CompleteAuditLog> = z.lazy(() =>
  AuditLogModel.extend({
    organization: RelatedOrganizationModel.nullish(),
    user: RelatedUserModel.nullish(),
    apiKey: RelatedApiKeyModel.nullish(),
  })
)
