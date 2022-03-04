import { sessions } from "@clerk/nextjs/api"
import { Ctx } from "blitz"

export default async function logout(_: any, ctx: Ctx) {
  const clerkSessionId = ctx.session.clerkSessionId

  const promises = []
  if (clerkSessionId) {
    promises.push(sessions.revokeSession(clerkSessionId))
  }
  promises.push(ctx.session.$revoke())

  await Promise.all(promises)
  return true
}
