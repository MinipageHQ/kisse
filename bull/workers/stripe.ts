import { defaultUserSelect } from "app/auth/defaults"
import { Job } from "bullmq"
import db from "db"
import stripe from "integrations/stripe"
import { Stripe } from "stripe"

export interface StripeWebhookEvent {
  data: { [key: string]: any }
  object: "event"
  type: "user.created"
}

export async function handleStripeEvent(job: Job<StripeWebhookEvent>) {
  const { data, type } = job.data
  ///verify it
  switch (type) {
    case "user.created":
      const user = await db.user.create({
        data: {
          // username: data.username,
          createdAt: data.created_at,
          updatedAt: data.updated_at,
          // emails: {

          // },
          privateMetadata: {
            isClerk: true,
            clerk: {},
          },
        },
      })
      break
    default:
  }
  console.log(`Recieved a Clerk event: ${JSON.stringify(data, null, 2)}`)
}
