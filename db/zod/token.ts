import * as z from "zod"
import { CompleteUser, RelatedUserModel } from "./index"

export const TokenModel = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  hashedToken: z.string(),
  type: z.string(),
  expiresAt: z.date(),
  sentTo: z.string(),
  userId: z.string(),
})

export interface CompleteToken extends z.infer<typeof TokenModel> {
  user: CompleteUser
}

/**
 * RelatedTokenModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedTokenModel: z.ZodSchema<CompleteToken> = z.lazy(() => TokenModel.extend({
  user: RelatedUserModel,
}))
