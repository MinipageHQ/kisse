import * as z from "zod"
import { NotificationEmail, GlobalRole } from "@prisma/client"
import { CompleteEmail, RelatedEmailModel, CompleteToken, RelatedTokenModel, CompleteSession, RelatedSessionModel, CompleteMembership, RelatedMembershipModel, CompleteInviteCode, RelatedInviteCodeModel, CompleteApiKey, RelatedApiKeyModel, CompleteAuditLog, RelatedAuditLogModel } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const UserModel = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  name: z.string().nullish(),
  hashedPassword: z.string().nullish(),
  prefersEmailId: z.string().nullish(),
  notificationEmail: z.nativeEnum(NotificationEmail),
  countryCode: z.string(),
  timezone: z.string(),
  roles: z.nativeEnum(GlobalRole).array(),
  active: z.boolean(),
  metadata: jsonSchema,
  privateMetadata: jsonSchema,
})

export interface CompleteUser extends z.infer<typeof UserModel> {
  prefersEmail?: CompleteEmail | null
  emails: CompleteEmail[]
  tokens: CompleteToken[]
  sessions: CompleteSession[]
  memberships: CompleteMembership[]
  inviteCodes: CompleteInviteCode[]
  ApiKey: CompleteApiKey[]
  AuditLog: CompleteAuditLog[]
}

/**
 * RelatedUserModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUserModel: z.ZodSchema<CompleteUser> = z.lazy(() => UserModel.extend({
  prefersEmail: RelatedEmailModel.nullish(),
  emails: RelatedEmailModel.array(),
  tokens: RelatedTokenModel.array(),
  sessions: RelatedSessionModel.array(),
  memberships: RelatedMembershipModel.array(),
  inviteCodes: RelatedInviteCodeModel.array(),
  ApiKey: RelatedApiKeyModel.array(),
  AuditLog: RelatedAuditLogModel.array(),
}))
