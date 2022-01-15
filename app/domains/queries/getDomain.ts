import { resolver, NotFoundError } from "blitz"
import db from "db"
import { z } from "zod"

const GetDomain = z.object({
  // This accepts type of undefined, but is required at runtime
  id: z.number().optional().refine(Boolean, "Required"),
})

export default resolver.pipe(resolver.zod(GetDomain), resolver.authorize(), async ({ id }) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const domain = await db.domain.findFirst({ where: { id } })

  if (!domain) throw new NotFoundError()

  return domain
})
