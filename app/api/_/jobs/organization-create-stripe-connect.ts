

import { Queue } from "quirrel/blitz"

export interface OrganizationCreated {
  organizationId: string
}

export default Queue(
  "api/_/jobs/organization-create-stripe-connect", // the path of this API route
  async ({ organizationId }: OrganizationCreated) => {


    // organizationId
  }
)
