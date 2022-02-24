import { defaultUserSelect } from "./../../../auth/defaults"
import db from "db"
import stripe from "integrations/stripe"
import { Queue } from "quirrel/blitz"
import Stripe from "stripe"
import sendEmail from "./send-email"

export interface UserCreatedEvent {
  userId: string
}

export default Queue(
  "api/_/jobs/user-created", // the path of this API route
  async ({ userId }: UserCreatedEvent) => {
    const user = await db.user.findFirst({
      where: {
        id: userId,
      },
      select: {
        ...defaultUserSelect,
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
    promises.push(stripe.customers.create(stripeUserObject))

    if (preferredEmailClerkId) {
      console.log("queued a welcome email")
      promises.push(
        sendEmail.enqueue({
          clerkEmailId: preferredEmailClerkId,
          type: "user-welcome",
          data: { user },
        })
      )
    }
    await Promise.all(promises)
    // create stripe user
  }
)
