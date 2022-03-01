import { paginate, resolver } from "blitz"
import db, { Prisma } from "db"

interface GetAssetCategoriesInput
  extends Pick<Prisma.AssetCategoryFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(
  resolver.authorize(),
  async ({ where = {}, orderBy, skip = 0, take = 100 }: GetAssetCategoriesInput) => {
    // where.active = true
    const {
      items: assetCategories,
      hasMore,
      nextPage,
      count,
    } = await paginate({
      skip,
      take,
      count: () => db.assetCategory.count({ where }),
      query: (paginateArgs) => db.assetCategory.findMany({ ...paginateArgs, where, orderBy }),
    })

    return {
      assetCategories,
      nextPage,
      hasMore,
      count,
    }
  }
)
