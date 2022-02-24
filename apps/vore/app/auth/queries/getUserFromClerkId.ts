import { resolver, NotFoundError } from "blitz"
import db from "db"
import { z } from "zod"

const GetUserFromClerkId = z.object({
  clerkId: z.string(),
})

export default resolver.pipe(
  resolver.zod(GetUserFromClerkId),
  // resolver.authorize(),
  async ({ clerkId }) => {
    const user = await db.user.findFirst({ where: { clerkId } })

    if (!user) throw new NotFoundError()

    return user
  }
)
