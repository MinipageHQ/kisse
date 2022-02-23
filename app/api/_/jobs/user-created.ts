import db from "db"
import { Queue } from "quirrel/blitz"

export interface UserCreatedEvent {
  userId: string
}

export default Queue(
  "api/_/jobs/user-created", // the path of this API route
  async ({ userId }: UserCreatedEvent) => {




// create stripe user
  }
)
