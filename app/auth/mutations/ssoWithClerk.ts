import { resolver } from "blitz"
import { Signup, SsoWithClerkInput } from "app/auth/validations"
import { sessions } from "@clerk/nextjs/api"
import syncWithClerk from "./syncWithClerk"
import { Role } from "types"
import organizationCreatedOrUpdatedQueue from "app/api/queues/organization-created-or-updated"

export default resolver.pipe(resolver.zod(SsoWithClerkInput), async ({ sessionId }, ctx) => {
  if (!ctx.clerkSessionToken) {
    throw new Error("You need a Clerk session token for this action.")
  }

  const session = await sessions.verifySession(sessionId, ctx.clerkSessionToken)

  const user = await syncWithClerk(
    {
      clerkUserId: session.userId as string,
    },
    ctx
  )

  const roles: Role[] = [...user.roles]

  const defaultOrganization =
    user.memberships.length > 0
      ? {
          ...user.memberships[0]?.organization,
          role: user.memberships[0]?.role,
        }
      : null

  if (defaultOrganization) {
    if (defaultOrganization.role) {
      roles.push(defaultOrganization.role)
    }

    organizationCreatedOrUpdatedQueue.enqueue({
      organizationId: defaultOrganization.id!,
      action: "updated",
    })
  }

  await ctx.session.$create({
    userId: user.id,
    roles,
    platformFeatures: defaultOrganization?.platformFeatures,
    defaultOrgId: defaultOrganization ? defaultOrganization.id : undefined,
    clerkSessionId: sessionId,
  })
})
