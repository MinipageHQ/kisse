import { resolver } from "blitz"
import db from "db"
import { z } from "zod"
import { CreateAssetSchema } from "../validations"

export default resolver.pipe(
  resolver.authorize(),
  resolver.zod(CreateAssetSchema),
  async (
    { name, price, description, currency, assetTypeId, assetCategoryId },
    { session: { defaultOrgId } }
  ) => {
    const asset = await db.asset.create({
      data: {
        name,
        price,
        description,
        currency,
        assetTypeId,
        assetCategoryId,
        status: "DRAFT",
        organizationId: defaultOrgId as string,
      },
    })
    return asset
  }
)
