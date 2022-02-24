import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const CreateDocument = z.object({
  name: z.string(),

  organization: z.number(),
})

export default resolver.pipe(resolver.zod(CreateDocument), resolver.authorize(), async (input) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const document = await db.document.create({ data: input })

  return document
})
