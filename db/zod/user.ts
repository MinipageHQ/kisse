import * as z from "zod"
import { GlobalRole } from "@prisma/client"
import { CompleteToken, RelatedTokenModel, CompleteSession, RelatedSessionModel, CompleteMembership, RelatedMembershipModel, CompleteInviteCode, RelatedInviteCodeModel } from "./index"

export const UserModel = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  name: z.string().nullish(),
  email: z.string(),
  hashedPassword: z.string().nullish(),
  role: z.nativeEnum(GlobalRole),
})

export interface CompleteUser extends z.infer<typeof UserModel> {
  tokens: CompleteToken[]
  sessions: CompleteSession[]
  memberships: CompleteMembership[]
  inviteCodes: CompleteInviteCode[]
}

/**
 * RelatedUserModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUserModel: z.ZodSchema<CompleteUser> = z.lazy(() => UserModel.extend({
  tokens: RelatedTokenModel.array(),
  sessions: RelatedSessionModel.array(),
  memberships: RelatedMembershipModel.array(),
  inviteCodes: RelatedInviteCodeModel.array(),
}))
