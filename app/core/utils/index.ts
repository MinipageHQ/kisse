// app/core/utils.ts
import { Ctx } from "blitz"
import { Prisma, GlobalRole } from "db"

export function assert(condition: any, message: string): asserts condition {
  if (!condition) throw new Error(message)
}

export const setDefaultOrganizationId = <T extends Record<any, any>>(
  input: T,
  { session }: Ctx
): T & { organizationId: Prisma.StringNullableFilter | string } => {
  assert(session.defaultOrgId, "This page requires a creator account")
  if (input.organizationId) {
    // Pass through the input
    return input as T & { organizationId: string }
  } else if (session.roles?.includes(GlobalRole.SUPERADMIN)) {
    // Allow viewing any organization
    return { ...input, organizationId: { not: null } }
  } else {
    // Set organizationId to session.defaultOrgId
    return { ...input, organizationId: session.defaultOrgId }
  }
}

export const enforceSuperAdminIfNotCurrentOrganization = <T extends Record<any, any>>(
  input: T,
  ctx: Ctx
): T => {
  assert(ctx.session.defaultOrgId, "missing session.defaultOrgId")
  assert(input.organizationId, "missing input.organizationId")

  if (input.organizationId !== ctx.session.defaultOrgId) {
    ctx.session.$authorize(GlobalRole.SUPERADMIN)
  }
  return input
}
