import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

export const CheckRouteAvailability = z.object({
  domain: z.string(),
  slug: z.string(),
})

export default resolver.pipe(
  resolver.zod(CheckRouteAvailability),
  resolver.authorize(),
  async (input) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    // const link = await db.link.findFirst({ data: input })
    // return link
  }
)
