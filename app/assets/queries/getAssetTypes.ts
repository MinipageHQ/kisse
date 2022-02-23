import { paginate, resolver } from "blitz"
import db, { Prisma } from "db"

interface GetAssetTypesInput
  extends Pick<Prisma.AssetTypeFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(
  resolver.authorize(),
  async ({ where = {}, orderBy, skip = 0, take = 100 }: GetAssetTypesInput) => {
    where.active = true
    const {
      items: assetTypes,
      hasMore,
      nextPage,
      count,
    } = await paginate({
      skip,
      take,
      count: () => db.assetType.count({ where }),
      query: (paginateArgs) => db.assetType.findMany({ ...paginateArgs, where, orderBy }),
    })

    return {
      assetTypes,
      nextPage,
      hasMore,
      count,
    }
  }
)
