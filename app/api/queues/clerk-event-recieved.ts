import { Queue } from "quirrel/next"

import db from "db"

export interface ClerkEvent {
  data: { [key: string]: any }
  object: "event"
  type: "user.created"
}

export default Queue<ClerkEvent>(
  "api/queues/clerk-event-recieved", // 👈 the route it's reachable on
  async (job) => {
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
  }
)
