import { Queues } from "./queues"
import { Worker } from "bullmq"
import { organizationCreatedOrUpdated } from "./workers/organization"
import { userCreated, userSync } from "./workers/user"
import { sendEmail } from "./workers/email"
import { handleClerkEvent } from "./workers/clerk"
import { handleStripeEvent } from "./workers/stripe"

export const workers = {
  [Queues.USER_SYNC]: new Worker(Queues.USER_SYNC, userSync),
  [Queues.USER_CREATED]: new Worker(Queues.USER_CREATED, userCreated),

  [Queues.ORGANIZATION_CREATED_OR_UPDATED]: new Worker(
    Queues.ORGANIZATION_CREATED_OR_UPDATED,
    organizationCreatedOrUpdated
  ),

  [Queues.SEND_EMAIL]: new Worker(Queues.SEND_EMAIL, sendEmail),

  [Queues.WEBHOOKS_CLERK]: new Worker(Queues.WEBHOOKS_CLERK, handleClerkEvent),
  [Queues.WEBHOOKS_STRIPE]: new Worker(Queues.WEBHOOKS_STRIPE, handleStripeEvent),
}
