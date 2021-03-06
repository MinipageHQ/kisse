import { DefaultCtx, SessionContext, SimpleRolesIsAuthorized } from "blitz"
import { GlobalRole, MembershipRole, Organization, User, PlatformFeatures } from "db"

// Note: You should switch to Postgres and then use a DB enum for role type
export type Role = MembershipRole | GlobalRole

declare module "blitz" {
  export interface Ctx extends DefaultCtx {
    session: SessionContext
    clerkSessionToken?: string
  }
  export interface Session {
    isAuthorized: SimpleRolesIsAuthorized<Role>
    PublicData: {
      userId: User["id"]
      roles: Array<Role>
      platformFeatures?: PlatformFeatures[]
      defaultOrgId?: Organization["id"]
      clerkSessionId?: string
    }
  }
}
