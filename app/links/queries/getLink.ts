import { resolver, NotFoundError } from "blitz"
import db from "db"
import { z } from "zod"

const GetLink = z.object({
  // This accepts type of undefined, but is required at runtime
  id: z.string().cuid().optional().refine(Boolean, "Required"),
})

export default resolver.pipe(
  resolver.zod(GetLink),
  resolver.authorize(),
  async ({ id }, { session: { defaultOrgId } }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const link = await db.link.findFirst({
      where: { id, organizationId: defaultOrgId },
      select: {
        id: true,
        slug: true,
        target: true,
        provider: true,
        domainId: true,
        createdAt: true,
        metadata: true,
        privateMetadata: true,
        updatedAt: true,
        type: true,

        domain: {
          select: {
            id: true,
            domain: true,
          },
        },
      },
    })

    if (!link) throw new NotFoundError()

    return link
  }
)
