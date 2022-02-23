import { Queue } from "quirrel/blitz"

export interface OrganizationCreated {
  organizationId: string
}

export default Queue(
  "api/_/jobs/domain-created", // the path of this API route
  async ({ organizationId }: OrganizationCreated) => {
    const promises: Promise<any>[] = []

    /// send to vercel
    if (promises.length > 0) {
      await Promise.all(promises)
    }
  }
)
