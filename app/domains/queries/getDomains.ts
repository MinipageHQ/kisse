import { paginate, resolver } from "blitz"
import db, { Prisma } from "db"

interface GetDomainsInput
  extends Pick<Prisma.DomainFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(
  resolver.authorize(),
  async ({ where, orderBy, skip = 0, take = 100 }: GetDomainsInput) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const {
      items: domains,
      hasMore,
      nextPage,
      count,
    } = await paginate({
      skip,
      take,
      count: () => db.domain.count({ where }),
      query: (paginateArgs) => db.domain.findMany({ ...paginateArgs, where, orderBy }),
    })

    return {
      domains,
      nextPage,
      hasMore,
      count,
    }
  }
)
