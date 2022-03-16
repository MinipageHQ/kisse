import db from "db"
import { Queue } from "quirrel/next"

export interface StripeWebhookEvent {
  data: { [key: string]: any }
  object: "event"
  type: "user.created"
}

export default Queue<StripeWebhookEvent>("api/queues/stripe-event-recieved", async (job) => {
  const { data, type } = job
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
})
