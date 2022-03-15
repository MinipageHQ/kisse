import { Job, Processor } from "bullmq"
import db from "db"
import { Stripe } from "stripe"
import stripe from "integrations/stripe"
import { sendEmail } from "./email"
import { Svix } from "svix"
import svix from "integrations/svix"

export interface OrganizationEvent {
  organizationId: string
}

export interface OrganizationSyncEvent extends OrganizationEvent {}
export interface OrganizationCreatedEvent extends OrganizationEvent {
  action: "created"
}
export interface OrganizationUpdatedEvent extends OrganizationEvent {
  action: "updated"
}

export async function organizationCreatedOrUpdated(
  job: Job<OrganizationCreatedEvent | OrganizationUpdatedEvent>
) {
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
      svixAppId: true,
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

  if (organization === null) {
    throw new Error(`Failed to fetch the organization with the organizationId ${organizationId}`)
  }

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

  if (!organization?.svixAppId) {
    promises.push(
      svix.application
        .create({
          name: organization?.name,
        })
        .then((svixApp) =>
          db.organization.update({
            where: {
              id: organizationId,
            },
            data: {
              svixAppId: svixApp.id,
            },
          })
        )
    )
  }

  if (organization?.defaultDomainId === null && organization?.domains?.length > 0) {
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
