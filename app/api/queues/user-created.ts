import { defaultUserSelect } from "app/auth/defaults"
import db from "db"
import { Queue } from "quirrel/next"

export interface UserEvent {
  userId: string
}

export interface UserSyncEvent extends UserEvent {}
export interface UserCreatedEvent extends UserEvent {}

export default Queue<UserCreatedEvent>("api/queues/user-created", async (job) => {
  const { userId } = job

  console.log("recieved a user", userId)
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

  // return userSync(job)
  // // create stripe user
})
