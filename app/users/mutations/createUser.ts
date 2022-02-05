import { resolver } from "blitz"
import db from "db"
import { z } from "zod"
import { CreateUserInput } from "../validations"

export default resolver.pipe(resolver.zod(CreateUserInput), async (input) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const transaction = await db.user.create({ data: input })

  return transaction
})
