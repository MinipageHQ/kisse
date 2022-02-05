

import { Queue } from "quirrel/blitz"

export interface SendEmail {
  template: string
  message: string
}

export default Queue(
  "api/_/jobs/organization-created", // the path of this API route
  async ({ to, message }: Greetings) => {



    // create stripe account
    await greetingsQueue.enqueue({
      to: "Sandy Cheeks",
      message: "Howdy!",
    })
    console.log(`Greetings, ${to}! Thy ears shall hear: "${message}"`)
  }
)
