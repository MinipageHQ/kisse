import { resolver } from "blitz"
import db from "db"
import { z } from "zod"
import { CreateAssetSchema } from "../validations"

export default resolver.pipe(
  resolver.zod(CreateAssetSchema),
  resolver.authorize(),
  async ({ name }, { session: { defaultOrgId } }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    // const asset = await db.asset.create({ data: { name, organizationId: defaultOrgId as string } })
    // return asset

    return {
      id: "test",
    }
  }
)
