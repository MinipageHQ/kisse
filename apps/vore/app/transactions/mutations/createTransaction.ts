import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const CreateTransaction = z.object({
  name: z.string(),
})

export default resolver.pipe(
  resolver.zod(CreateTransaction),
  resolver.authorize(),
  async (input) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    // const transaction = await db.transaction.create({ data: input })
    // return transaction
  }
)
