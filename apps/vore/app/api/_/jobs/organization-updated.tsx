import db from "db"
import stripe from "integrations/stripe"
import { Queue } from "quirrel/blitz"

export interface OrganizationUpdatedEvent {
  organizationId: string
}


// Make sure this can be run multiple times
export default Queue(
  "api/_/jobs/organization-updated", // the path of this API route
  async ({ organizationId }: OrganizationUpdatedEvent) => {
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
)
