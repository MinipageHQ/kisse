export const defaultUserSelect = {
  id: true,
  name: true,
  emails: {
    select: {
      email: true,
      id: true,
      clerkEmailId: true
    },
  },
  roles: true,
  memberships: {
    select: {
      role: true,
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
}
