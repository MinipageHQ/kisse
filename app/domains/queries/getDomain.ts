import { resolver, NotFoundError } from "blitz"
import db from "db"
import { z } from "zod"
import { domain as domainValidation } from "../validations"

const GetDomain = z.object({
  // This accepts type of undefined, but is required at runtime
  domain: domainValidation,
})

export default resolver.pipe(resolver.zod(GetDomain), resolver.authorize(), async ({ domain }) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const domainInDb = await db.domain.findFirst({ where: { domain } })

  if (!domainInDb) throw new NotFoundError()

  return domainInDb
})
