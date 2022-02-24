import { email, password } from "./../auth/validations"
import { UserModel } from "db/zod"
import { z } from "zod"

export const CreateUserInput = z.object({
  data: UserModel.pick({
    name: true,
    metadata: true,
  })
    .partial({ metadata: true })
    .extend({
      password,
      email,
    })
    .partial({
      password: true,
    }),
})
