import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const CreateDomain = z.object({
  // name: z.string(),
  organization: z.number(),
})

export default resolver.pipe(resolver.zod(CreateDomain), resolver.authorize(), async (input) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const domain = await db.domain.create({ data: input })

  return domain
})
