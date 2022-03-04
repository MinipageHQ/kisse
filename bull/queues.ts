import { Queue, QueueOptions } from "bullmq"
import Redis from "ioredis"

export enum Queues {
  USER_SYNC = "user-sync",
  USER_CREATED = "user-created",

  ORGANIZATION_CREATED = "organization-created",
  ORGANIZATION_UPDATED = "organization-updated",

  SEND_EMAIL = "send-email",

  WEBHOOKS_STRIPE = "webhooks-stripe",
  WEBHOOKS_CLERK = "webhooks-clerk",
}

const { REDIS_URL } = process.env

const client = new Redis(REDIS_URL)

const subscriber = new Redis(REDIS_URL)

// Users
export const userSyncQueue = new Queue(Queues.USER_SYNC)
export const userCreatedQueue = new Queue(Queues.USER_CREATED)

// Organizations
export const organizationCreatedQueue = new Queue(Queues.ORGANIZATION_CREATED)
export const organizationUpdatedQueue = new Queue(Queues.ORGANIZATION_UPDATED)

// Emails
export const sendEmailQueue = new Queue(Queues.SEND_EMAIL)

// Webhooks
export const stripeWebhooksQueue = new Queue(Queues.WEBHOOKS_STRIPE)
export const clerkWebhooksQueue = new Queue(Queues.WEBHOOKS_CLERK)