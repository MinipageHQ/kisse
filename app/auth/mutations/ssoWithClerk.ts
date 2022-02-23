import { defaultUserSelect } from "./../defaults"
import safeEmail from "app/auth/utils/safeEmail"
import { isPasswordSafe } from "../utils/checkPassword"
import { invokeWithMiddleware, Middleware, PublicData, resolver, SecurePassword } from "blitz"
import db, { Membership } from "db"
import { Signup, SsoWithClerkInput } from "app/auth/validations"
import { sessions } from "@clerk/nextjs/api"
import createUser from "app/users/mutations/createUser"
import syncWithClerk from "./syncWithClerk"
import { Role } from "types"

export default resolver.pipe(resolver.zod(SsoWithClerkInput), async ({ sessionId }, ctx,) => {
  if (!ctx.clerkSessionToken) {
    throw new Error("You need a Clerk session token for this action.")
  }

  const session = await sessions.verifySession(sessionId, ctx.clerkSessionToken)

  const user = await syncWithClerk({
    clerkUserId: session.userId as string
  }, ctx)

  const roles: Role[] = [...user.roles]

  const defaultOrganization =
    user.memberships.length > 0
      ? {
          ...user.memberships[0]?.organization,
          role: user.memberships[0]?.role,
        }
      : null

  if (defaultOrganization && defaultOrganization.role) {
    roles.push(defaultOrganization.role)
  }

  await ctx.session.$create({
    userId: user.id,
    roles,
    platformFeatures: defaultOrganization?.platformFeatures,
    defaultOrgId: defaultOrganization ? defaultOrganization.id : undefined,
  })


})
