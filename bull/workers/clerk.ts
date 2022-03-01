import { defaultUserSelect } from "app/auth/defaults"
import { Job } from "bullmq"
import db from "db"

export interface ClerkEvent {
  data: { [key: string]: any }
  object: "event"
  type: "user.created"
}

export async function handleClerkEvent(job: Job<ClerkEvent>) {
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
