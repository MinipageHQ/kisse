import { Job, Processor } from "bullmq"
import db from "db"
import { Stripe } from "stripe"
import stripe from "integrations/stripe"
import { sendEmail } from "./email"

export interface OrganizationEvent {
  organizationId: string
}

export interface OrganizationSyncEvent extends OrganizationEvent {}
export interface OrganizationCreatedEvent extends OrganizationEvent {}
export interface OrganizationUpdatedEvent extends OrganizationEvent {}

export async function organizationUpdated(job: Job<OrganizationUpdatedEvent>) {
  const { organizationId } = job.data
  const promises: Promise<any>[] = [
    // organizationCreateStripeConnect.enqueue({ organizationId })
  ]

  const organization = await db.organization.findFirst({
    where: {
      id: organizationId,
    },
    select: {
      name: true,
      platformFeatures: true,
      slug: true,
      description: true,
      stripeCustomerId: true,
      stripeSellerId: true,
      metadata: true,
      memberships: {
        select: {
          user: {
            select: {
              prefersEmail: {
                select: {
                  emailSafe: true,
                  clerkEmailId: true,
                },
              },
            },
          },
        },
      },
    },
  })

  const email = organization?.memberships[0]?.user?.prefersEmail?.emailSafe
  const emailClerkId = organization?.memberships[0]?.user?.prefersEmail?.clerkEmailId

  if (!organization?.stripeSellerId) {
    // promises.push(
    //   stripe.accounts
    //     .update({
    //       email: email || `${organizationId}@organizations.saltana.net`, // make sure this takes the email and sends it to all emails for an organization
    //     })
    //     .then((stripeAccount) =>
    //       db.organization.update({
    //         where: {
    //           id: organizationId,
    //         },
    //         data: {
    //           stripeSellerId: stripeAccount.id,
    //         },
    //       })
    //     )
    // )
  }

  if (!organization?.stripeCustomerId) {
    // promises.push(
    //   stripe.customers
    //     .create({
    //       email: email || `${organizationId}@organizations.saltana.net`, // make sure this takes the email and sends it to all emails for an organization
    //     })
    //     .then((stripeCustomer) =>
    //       db.organization.update({
    //         where: {
    //           id: organizationId,
    //         },
    //         data: {
    //           stripeCustomerId: stripeCustomer.id,
    //         },
    //       })
    //     )
    // )
  }

  await Promise.all(promises)
}
export async function organizationCreated(job: Job<OrganizationCreatedEvent>) {
  const { organizationId } = job.data
  const promises = [
    // organizationCreateStripeConnect.enqueue({ organizationId })
  ]

  const organization = await db.organization.findFirst({
    where: {
      id: organizationId,
    },
    select: {
      name: true,
      platformFeatures: true,
      slug: true,
      description: true,
      stripeCustomerId: true,
      stripeSellerId: true,
      defaultDomainId: true,
      domains: {
        select: {
          domain: true,
        },
      },
      memberships: {
        select: {
          user: {
            select: {
              prefersEmail: {
                select: {
                  emailSafe: true,
                  clerkEmailId: true,
                },
              },
            },
          },
        },
      },
    },
  })

  const email = organization?.memberships[0]?.user?.prefersEmail?.emailSafe
  const emailClerkId = organization?.memberships[0]?.user?.prefersEmail?.clerkEmailId

  if (!organization?.stripeSellerId) {
    promises.push(
      stripe.accounts
        .create({
          type: "express",
          email: email || `${organizationId}@organizations.saltana.net`, // make sure this takes the email and sends it to all emails for an organization
        })
        .then((stripeAccount) =>
          db.organization.update({
            where: {
              id: organizationId,
            },
            data: {
              stripeSellerId: stripeAccount.id,
            },
          })
        )
    )
  }

  if (!organization?.stripeCustomerId) {
    promises.push(
      stripe.customers
        .create({
          email: email || `${organizationId}@organizations.saltana.net`, // make sure this takes the email and sends it to all emails for an organization
        })
        .then((stripeCustomer) =>
          db.organization.update({
            where: {
              id: organizationId,
            },
            data: {
              stripeCustomerId: stripeCustomer.id,
            },
          })
        )
    )
  }

  if (organization?.defaultDomainId === null) {
    const defaultDomainId = organization.domains[0]?.domain
    promises.push(
      db.organization.update({ where: { id: organizationId }, data: { defaultDomainId } })
    )
  }

  if (emailClerkId) {
    // promises.push(
    //   sendEmail.enqueue({
    //     clerkEmailId: emailClerkId,
    //     type: "organization-welcome",
    //     data: {
    //       name: organization.name,
    //     },
    //   })
    // )
  }

  await Promise.all(promises)
}
export async function organizationSync(job: Job) {}
