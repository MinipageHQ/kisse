import safeEmail from "app/auth/utils/safeEmail"
import { resolver } from "blitz"
import db, { GlobalRole } from "db"
import { z } from "zod"
import { CreateUserInput } from "../validations"
const createUser = async (user: string, role: GlobalRole, extraOpts = {}) => {
  const email = `testuser${user}@saltana.dev`
  const emailSafe = safeEmail(email)
  const createdUser = await db.user.create({
    data: {
      emails: {
        create: {
          email,
          emailSafe,
        },
      },
      hashedPassword: defaultHashedPassword,
      roles: [role],
      ...extraOpts,
    },
    select: {
      emails: true,
    },
  })
  const prefersEmail = createdUser.emails[0]

  if (prefersEmail) {
    await db.user.update({
      where: { id: prefersEmail.userId },
      data: {
        prefersEmailId: prefersEmail.id,
      },
    })
  }

  console.log(`creating test user ${user} with role ${role}, email: testuser+${user}@saltana.dev`)
}

export default resolver.pipe(resolver.zod(CreateUserInput), async (input) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const transaction = await db.user.create({ data: input })

  return transaction
})
