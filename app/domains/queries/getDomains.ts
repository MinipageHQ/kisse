import { paginate, resolver } from "blitz"
import db, { Prisma } from "db"

interface GetDomainsInput
  extends Pick<Prisma.DomainFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(
  resolver.authorize(),
  async ({ where, orderBy, skip = 0, take = 100 }: GetDomainsInput, { session: { orgId } }) => {
    const {
      items: domains,
      hasMore,
      nextPage,
      count,
    } = await paginate({
      skip,
      take,
      count: () => db.domain.count({ where }),
      query: (paginateArgs) =>
        db.domain.findMany({
          ...paginateArgs,
          where: {
            OR: [
              {
                organizationId: { equals: null },
              },
              {
                organizationId: { equals: orgId },
              },
            ],
            ...where,
          },
          orderBy,
        }),
    })

    return {
      domains,
      nextPage,
      hasMore,
      count,
    }
  }
)
