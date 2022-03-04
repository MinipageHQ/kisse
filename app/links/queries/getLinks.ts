import { paginate, resolver, Ctx } from "blitz"
import db, { Prisma } from "db"

interface GetLinksInput
  extends Pick<Prisma.LinkFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(
  resolver.authorize(),
  async (
    { where = {}, orderBy, skip = 0, take = 100 }: GetLinksInput,
    { session: { defaultOrgId } }: Ctx
  ) => {
    if (!defaultOrgId) {
      throw new Error("Organization required for this action.")
    }

    where.organizationId = defaultOrgId

    const {
      items: links,
      hasMore,
      nextPage,
      count,
    } = await paginate({
      skip,
      take,
      count: () => db.link.count({ where }),
      query: (paginateArgs) =>
        db.link.findMany({
          ...paginateArgs,
          where,
          orderBy,
          select: {
            id: true,
            slug: true,
            domain: {
              select: {
                id: true,
                domain: true,
              },
            },
          },
        }),
    })

    return {
      links,
      nextPage,
      hasMore,
      count,
    }
  }
)
