import db from "db"
import stripe from "integrations/stripe"
import { Queue } from "quirrel/blitz"
import sendEmail from "./send-email"

export interface OrganizationCreatedEvent {
  organizationId: string
}


// Make sure this can be run multiple times
export default Queue(
  "api/_/jobs/organization-created", // the path of this API route
  async ({ organizationId }: OrganizationCreatedEvent) => {
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

    if (emailClerkId) {
      promises.push(
        sendEmail.enqueue({
          clerkEmailId: emailClerkId,
          type: "organization-welcome",
          data: {
            name: organization.name,
          },
        })
      )
    }

    await Promise.all(promises)
  }
)
