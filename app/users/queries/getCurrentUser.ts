import { Ctx } from "blitz"
import db from "db"

export default async function getCurrentUser(_ = null, { session }: Ctx) {
  if (!session.userId) return null

  const user = db.user.findFirst({
    where: { id: session.userId },
    select: {
      id: true,
      name: true,
      emails: {
        select: {
          email: true,
          id: true,
        },
      },
      roles: true,
      memberships: {
        select: {
          organization: {
            select: {
              id: true,
              slug: true,
              name: true,
              description: true,
              profileMedia: true,
              platformFeatures: true,
              privateMetadata: true,
              domains: {
                select: {
                  id: true,
                  domain: true,
                },
              },
              defaultDomain: true,
              externalProfiles: true,
            },
          },
        },
      },
    },
  })

  return user
}
