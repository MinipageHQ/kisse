import { UserModel } from "db/zod"
import safeEmail from "app/auth/utils/safeEmail"
import { isPasswordSafe } from "../utils/checkPassword"
import { Middleware, resolver, SecurePassword } from "blitz"
import db, { Membership, Prisma } from "db"
import { Signup, SignupForCreators, SyncWithClerkInput } from "app/auth/validations"
import { z } from "zod"
import { sessions } from "@clerk/nextjs/api"
import clerk, { User } from "@clerk/clerk-sdk-node"
import { defaultUserSelect } from "../defaults"

function getClerkUser(userId: string) {
  return clerk.users.getUser(userId)
}

function convertClerkUserObjectToInternalUserObject(
  clerkUser: User
): Prisma.UserUpsertWithWhereUniqueWithoutPrefersEmailInput {
  const { id, username, firstName, lastName } = clerkUser

  const name = `${firstName} ${lastName}`.trim()
  // 'id',
  // 'username',
  // 'firstName',
  // 'lastName',
  // 'gender',
  // 'birthday',
  // 'profileImageUrl',
  // 'primaryEmailAddressId',
  // 'primaryEmailAddressId',
  // 'primaryPhoneNumberId',
  // 'primaryWeb3WalletId',
  // 'passwordEnabled',
  // 'twoFactorEnabled',
  // 'passwordEnabled',
  // 'passwordEnabled',
  // 'passwordEnabled',
  // 'twoFactorEnabled',
  // 'publicMetadata',
  // 'privateMetadata',
  // 'unsafeMetadata',
  // 'createdAt',
  // 'updatedAt',

  const emails = {
    connectOrCreate: clerkUser.emailAddresses.map(
      ({ emailAddress = undefined, id = undefined }) => ({
        where: {
          clerkEmailId: id as string,
        },
        create: {
          email: emailAddress as string,
          emailSafe: emailAddress as string,
          clerkEmailId: id as string,
        },
      })
    ),
  }

  const commonData = {
    name,
    clerkDataSnapshot: JSON.stringify({
      publicMetadata: clerkUser.publicMetadata,
      privateMetadata: clerkUser.privateMetadata,
      unsafeMetadata: clerkUser.unsafeMetadata,
      gender: clerkUser.gender,
      birthday: clerkUser.birthday,
      profileImageUrl: clerkUser.profileImageUrl,
    }),
    emails,
  }

  return {
    where: { clerkId: clerkUser.id as string },
    create: {
      clerkId: clerkUser.id,
      ...commonData,
      roles: ['USER']
    },
    update: { ...commonData },
  }
}

//@TODO: should only be called from internal services
export default resolver.pipe(resolver.zod(SyncWithClerkInput), async ({ clerkUserId }, ctx) => {
  const clerkUser = await getClerkUser(clerkUserId)
  const upserArgs = await convertClerkUserObjectToInternalUserObject(clerkUser)

  const user = await db.user.upsert({
    ...upserArgs,
    select: {
      ...defaultUserSelect
    },
  })

  return user
})
