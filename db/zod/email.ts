import * as z from "zod"
import { CompleteUser, RelatedUserModel } from "./index"

export const EmailModel = z.object({
  createdAt: z.date(),
  email: z.string(),
  emailSafe: z.string(),
  id: z.string(),
  isVerified: z.boolean(),
  updatedAt: z.date(),
  userId: z.string(),
  clerkEmailId: z.string().nullish(),
})

export interface CompleteEmail extends z.infer<typeof EmailModel> {
  user: CompleteUser
  users: CompleteUser[]
}

/**
 * RelatedEmailModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedEmailModel: z.ZodSchema<CompleteEmail> = z.lazy(() =>
  EmailModel.extend({
    user: RelatedUserModel,
    users: RelatedUserModel.array(),
  })
)
