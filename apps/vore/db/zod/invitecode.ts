import * as z from "zod"
import { CompleteUser, RelatedUserModel } from "./index"

export const InviteCodeModel = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  usedAt: z.date().nullish(),
  name: z.string().nullish(),
  referrer: z.string(),
  code: z.string(),
  userId: z.string().nullish(),
})

export interface CompleteInviteCode extends z.infer<typeof InviteCodeModel> {
  usedBy?: CompleteUser | null
}

/**
 * RelatedInviteCodeModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedInviteCodeModel: z.ZodSchema<CompleteInviteCode> = z.lazy(() => InviteCodeModel.extend({
  usedBy: RelatedUserModel.nullish(),
}))
