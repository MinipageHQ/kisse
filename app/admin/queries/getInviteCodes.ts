import { paginate, resolver } from "blitz"
import db, { Prisma } from "db"

interface GetInviteCodesInput
  extends Pick<Prisma.InviteCodeFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(
  resolver.authorize(),
  async ({ where, orderBy, skip = 0, take = 100 }: GetInviteCodesInput) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const {
      items: spaces,
      hasMore,
      nextPage,
      count,
    } = await paginate({
      skip,
      take,
      count: () => db.inviteCode.count({ where }),
      query: (paginateArgs) => db.inviteCode.findMany({ ...paginateArgs, where, orderBy }),
    })

    return {
      spaces,
      nextPage,
      hasMore,
      count,
    }
  }
)
