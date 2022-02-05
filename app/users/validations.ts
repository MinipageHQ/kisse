import { email, password } from "./../auth/validations"
import { UserModel } from "db/zod"

export const CreateUserInput = UserModel.pick({
  name: true,
  metadata: true,
})
  .partial({ metadata: true })
  .extend({
    password,
    email,
  })
