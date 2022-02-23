import { resolver, SecurePassword, AuthenticationError } from "blitz"
import db, { Membership, User } from "db"
import { Role } from "types"
import { Login } from "../validations"

export default resolver.pipe(async (user: User, ctx) => {
  // This throws an error if credentials are invalid

  // const roles: Role[] = [...user.roles]

  // const defaultOrganization =
  //   user.memberships.length > 0
  //     ? {
  //         ...user.memberships[0]?.organization,
  //         role: user.memberships[0]?.role,
  //       }
  //     : null

  // if (defaultOrganization && defaultOrganization.role) {
  //   roles.push(defaultOrganization.role)
  // }

  // await ctx.session.$create({
  //   userId: user.id,
  //   roles,
  //   platformFeatures: defaultOrganization?.platformFeatures,
  //   defaultOrgId: defaultOrganization ? defaultOrganization.id : undefined,
  // })

  // return user
})
