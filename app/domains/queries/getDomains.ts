import { paginate, resolver } from "blitz"
import db, { Prisma } from "db"

interface GetDomainsInput
  extends Pick<Prisma.DomainFindManyArgs, "where" | "orderBy" | "skip" | "take"> {
    only?: "platform" | "organization"
  }

export default resolver.pipe(
  // resolver.authorize(),
  async (
    { only , where, orderBy, skip = 0, take = 100 }: GetDomainsInput,
    { session: { defaultOrgId } }
  ) => {
    console.log({defaultOrgId})
    const orQuery: {
      organizationId: { equals: null | string }
    }[] = [

    ]

    if (only === undefined || only === 'platform') {
      orQuery.push( {
        organizationId: { equals: null },
      })
    }

    if (defaultOrgId && (only === undefined || only === 'organization')) {
      orQuery.push({
        organizationId: { equals: defaultOrgId },
      })
    }

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
            ...where,
            OR: orQuery,
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
