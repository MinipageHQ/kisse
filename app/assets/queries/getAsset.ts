import { resolver, NotFoundError } from "blitz"
import db from "db"
import { z } from "zod"

const GetAsset = z.object({
  // This accepts type of undefined, but is required at runtime
  id: z.string().cuid(),
})

export default resolver.pipe(resolver.zod(GetAsset), resolver.authorize(), async ({ id }) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const asset = await db.asset.findFirst({ where: { id } })

  if (!asset) throw new NotFoundError()

  return asset
})
