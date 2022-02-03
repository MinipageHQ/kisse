import * as z from "zod"
import { MembershipRole } from "@prisma/client"
import { CompleteOrganization, RelatedOrganizationModel, CompleteUser, RelatedUserModel } from "./index"

export const MembershipModel = z.object({
  id: z.string(),
  role: z.nativeEnum(MembershipRole),
  organizationId: z.string(),
  userId: z.string().nullish(),
  invitedName: z.string().nullish(),
  invitedEmail: z.string().nullish(),
})

export interface CompleteMembership extends z.infer<typeof MembershipModel> {
  organization: CompleteOrganization
  user?: CompleteUser | null
}

/**
 * RelatedMembershipModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedMembershipModel: z.ZodSchema<CompleteMembership> = z.lazy(() => MembershipModel.extend({
  organization: RelatedOrganizationModel,
  user: RelatedUserModel.nullish(),
}))
