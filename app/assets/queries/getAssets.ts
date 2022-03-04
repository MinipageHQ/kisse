import { Ctx, paginate, resolver } from "blitz"
import db, { Prisma } from "db"

interface GetAssetsInput
  extends Pick<Prisma.AssetFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(
  resolver.authorize(),
  async (
    { where = {}, orderBy, skip = 0, take = 100 }: GetAssetsInput,
    { session: { defaultOrgId } }: Ctx
  ) => {
    if (!defaultOrgId) {
      throw new Error("Organization required for this action.")
    }

    where.organizationId = defaultOrgId

    const {
      items: assets,
      hasMore,
      nextPage,
      count,
    } = await paginate({
      skip,
      take,
      count: () => db.asset.count({ where }),
      query: (paginateArgs) => db.asset.findMany({ ...paginateArgs, where, orderBy }),
    })
    // defaultOrgId
    return {
      assets,
      nextPage,
      hasMore,
      count,
    }
  }
)
