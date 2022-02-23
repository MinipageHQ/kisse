

import { Queue } from "quirrel/blitz"

export interface OrganizationCreated {
  organizationId: string
}

export default Queue(
  "api/_/jobs/domain-created", // the path of this API route
  async ({ organizationId }: OrganizationCreated) => {
    const promises = [
    ]


    /// send to vercel
    await Promise.all(promises)
  }
)
