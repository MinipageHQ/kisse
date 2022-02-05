import safeEmail from "app/auth/utils/safeEmail"
import { isPasswordSafe } from "./../utils/checkPassword"
import { resolver, SecurePassword } from "blitz"
import db, { Membership } from "db"
import { Signup, SignupForCreators } from "app/auth/validations"

async function securePassword(password: string) {
  const normalizedPassword = password.trim()

  if (await isPasswordSafe(normalizedPassword)) {
    throw new Error("UNSAFE_PASSWORD")
  }

  const hashedPassword = await SecurePassword.hash(normalizedPassword)
  return hashedPassword
}

// validates, normalizes and checks email
async function checkEmail(email: string) {
  const emailSafe = safeEmail(email)

  const existigEmail = await db.email.findFirst({
    where: { emailSafe },
    select: { id: true },
  })

  if (existigEmail) {
    throw new Error("EMAIL_IN_USE")
  }

  return { email, emailSafe }
}
export default resolver.pipe(
  resolver.zod(SignupForCreators),
  async ({ email, name, inviteCode, password }, ctx) => {
    const isValidInviteCode = await db.inviteCode.findFirst({
      where: { code: inviteCode, userId: null },
    })

    if (!isValidInviteCode) {
      throw new Error("INVALID_CODE")
    }

    const hashedPassword = await securePassword(password)
    const { emailSafe } = await checkEmail(email)

    const user = await db.user.create({
      data: {
        emails: {
          create: {
            email,
            emailSafe,
          },
        },
        hashedPassword,
        roles: ["CREATOR"],
        memberships: {
          create: {
            role: "OWNER",
            organization: {
              create: {
                name,
              },
            },
          },
        },
      },
      include: {
        memberships: true,
      },
    })
    const createdMembership = user.memberships[0] as Membership

    await Promise.all([
      db.inviteCode.update({
        where: { id: isValidInviteCode.id },
        data: { userId: user.id, usedAt: new Date() },
      }),
      ctx.session.$create({
        userId: user.id,
        roles: [...user.roles, createdMembership.role],
        orgId: createdMembership.organizationId,
      }),
    ])
    return user
  }
)
