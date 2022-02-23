import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const DeleteDocument = z.object({
  id: z.string().cuid(),
})

export default resolver.pipe(resolver.zod(DeleteDocument), resolver.authorize(), async ({ id }) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const document = await db.document.deleteMany({ where: { id } })

  return document
})
