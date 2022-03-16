import { defaultUserSelect } from "app/auth/defaults"
import db from "db"
import stripe from "integrations/stripe"
import { Stripe } from "stripe"
import { Queue } from "quirrel/next"

export interface UserEvent {
  userId: string
}

export interface UserSyncEvent extends UserEvent {}
export interface UserCreatedEvent extends UserEvent {}

export default Queue<UserSyncEvent>("api/queues/user-sync", async (job) => {
  const { userId } = job
  console.log("recieved a user", userId)
  const user = await db.user.findFirst({
    where: {
      id: userId,
    },
    select: {
      ...defaultUserSelect,
      stripeCustomerId: true,
      prefersEmail: true,
    },
  })

  console.log("got user", user)
  const promises = []

  // if the user doesn't have a prefered email, assign one
  let preferredEmail = user?.prefersEmail?.email
  let preferredEmailClerkId = user?.prefersEmail?.clerkEmailId
  if (!preferredEmail) {
    const firstEmailInEmails = user?.emails[0]
    preferredEmail = firstEmailInEmails?.email
    preferredEmailClerkId = firstEmailInEmails?.clerkEmailId
    console.log("setting a preffered email", firstEmailInEmails)
    if (firstEmailInEmails) {
      promises.push(
        db.user.update({
          where: {
            id: userId,
          },
          data: {
            prefersEmailId: firstEmailInEmails.id,
          },
        })
      )
    }
  }

  if (!user?.stripeCustomerId) {
    const stripeUserObject: Stripe.CustomerCreateParams = {
      email: preferredEmail,
      metadata: {
        internalUserId: userId,
      },
    }

    if (user?.name) {
      stripeUserObject.name = user.name
    }

    console.log("created a stripe customer with object", stripeUserObject)
    promises.push(
      stripe.customers.create(stripeUserObject).then((customer) =>
        db.user.update({
          where: {
            id: userId,
          },
          data: {
            stripeCustomerId: customer.id,
          },
        })
      )
    )
  }

  await Promise.all(promises)
  // // create stripe user
})
