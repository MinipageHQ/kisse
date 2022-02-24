import { Middleware, resolver, SecurePassword } from "blitz"
import db, { Membership, Prisma } from "db"
import { Signup, SyncWithClerkInput } from "app/auth/validations"
import { z } from "zod"
import clerk, { User } from "@clerk/clerk-sdk-node"
import { defaultUserSelect } from "../defaults"
import userCreated from "app/api/_/jobs/user-created"

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
    clerkDataSnapshot: {
      publicMetadata: clerkUser.publicMetadata,
      privateMetadata: clerkUser.privateMetadata,
      unsafeMetadata: clerkUser.unsafeMetadata,
      gender: clerkUser.gender,
      birthday: clerkUser.birthday,
      profileImageUrl: clerkUser.profileImageUrl,
    } as any,
    emails,
  }

  return {
    where: { clerkId: clerkUser.id as string },
    create: {
      clerkId: clerkUser.id,
      ...commonData,
      roles: ["USER"],
    },
    update: { ...commonData },
  }
}

//@TODO: check if the request comes from an internal service
export default resolver.pipe(resolver.zod(SyncWithClerkInput), async ({ clerkUserId }, ctx) => {
  const [clerkUser, doesExists] = await Promise.all([
    getClerkUser(clerkUserId),
    db.user
      .count({
        where: {
          clerkId: clerkUserId,
        },
      })
      .then((count) => count !== 0),
  ])

  const upserArgs = convertClerkUserObjectToInternalUserObject(clerkUser)

  const user = await db.user.upsert({
    ...upserArgs,
    select: {
      ...defaultUserSelect,
    },
  })

  if (doesExists === false) {
    // it's a new user
    await userCreated.enqueue({
      userId: user.id,
    })
  }

  return user
})
