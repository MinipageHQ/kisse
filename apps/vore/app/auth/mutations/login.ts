import { resolver, SecurePassword, AuthenticationError } from "blitz"
import db, { Membership } from "db"
import { Role } from "types"
import { isPasswordSafe } from "../utils/checkPassword"
import safeEmail from "../utils/safeEmail"
import { Login } from "../validations"

export const authenticateUser = async (rawEmail: string, rawPassword: string) => {
  const { email, password } = Login.parse({ email: rawEmail, password: rawPassword })
  if ((await isPasswordSafe(password)) === false) {
    throw new AuthenticationError(
      "Your password was found on a list of passwords that are considered unsafe. You'll need to change your password by resetting it."
    )
  }

  // const emailSafe = safeEmail(email)
  const user = await db.user.findFirst({
    where: { emails: { some: { email } } },
    select: {
      id: true,
      hashedPassword: true,
      roles: true,
      prefersEmail: {
        select: { id: true, email: true, emailSafe: true },
      },
      emails: {
        select: { id: true, email: true, emailSafe: true },
      },
      memberships: {
        select: { role: true, organization: { select: { id: true, platformFeatures: true } } },
      },
    },
  })
  if (!user) {
    throw new AuthenticationError()
  }

  const updates = []
  const result = await SecurePassword.verify(user.hashedPassword, password)

  if (result === SecurePassword.VALID_NEEDS_REHASH) {
    // Upgrade hashed password with a more secure hash
    const improvedHash = await SecurePassword.hash(password)
    updates.push(db.user.update({ where: { id: user.id }, data: { hashedPassword: improvedHash } }))
  }

  if (user.prefersEmail === null && user.emails[0]) {
    updates.push(
      db.user.update({
        where: { id: user.id },
        data: { prefersEmailId: user.emails[0].id },
      })
    )
  }

  const { hashedPassword, ...rest } = user

  return rest
}

export default resolver.pipe(resolver.zod(Login), async ({ email, password }, ctx) => {
  // This throws an error if credentials are invalid
  const user = await authenticateUser(email, password)

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

  return user
})
