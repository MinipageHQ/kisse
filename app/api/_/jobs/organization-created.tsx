

import { Queue } from "quirrel/blitz"
import organizationCreateStripeConnect from "./organization-create-stripe-connect"

export interface OrganizationCreated {
  organizationId: string
}

export default Queue(
  "api/_/jobs/organization-created", // the path of this API route
  async ({ organizationId }: OrganizationCreated) => {
    const promises = [
      organizationCreateStripeConnect.enqueue({ organizationId })
    ]

    await Promise.all(promises)
  }
)
