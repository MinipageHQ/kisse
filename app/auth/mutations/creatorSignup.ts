import { resolver, SecurePassword } from "blitz"
import db, { Membership } from "db"
import { Signup, SignupForCreators } from "app/auth/validations"
import { Role } from "types"

export default resolver.pipe(
  resolver.zod(SignupForCreators),
  async ({ email, name, inviteCode, password }, ctx) => {
    const isValidInviteCode = await db.inviteCode.findFirst({
      where: { code: inviteCode, userId: null },
    })

    if (!isValidInviteCode) {
      throw new Error("INVALID_CODE")
    }

    const hashedPassword = await SecurePassword.hash(password.trim())
    const user = await db.user.create({
      data: {
        email: email.toLowerCase().trim(),
        hashedPassword,
        role: "CREATOR",
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
        roles: [user.role, createdMembership.role],
        orgId: createdMembership.id,
      }),
    ])
    return user
  }
)
