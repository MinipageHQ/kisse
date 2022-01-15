import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const DeleteDomain = z.object({
  id: z.number(),
})

export default resolver.pipe(resolver.zod(DeleteDomain), resolver.authorize(), async ({ id }) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const domain = await db.domain.deleteMany({ where: { id } })

  return domain
})
