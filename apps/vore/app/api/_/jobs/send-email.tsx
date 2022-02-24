import {
  render,
  Mjml,
  MjmlHead,
  MjmlTitle,
  MjmlPreview,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlButton,
  MjmlImage,
} from "mjml-react"

import { Queue } from "quirrel/blitz"
import { emails } from "@clerk/nextjs/api"

export interface SendEmailEvent {
  clerkEmailId: string
  type: "user-welcome" | "organization-welcome"
  data: any
}

export default Queue(
  "api/_/jobs/send-email", // the path of this API route
  async ({ clerkEmailId, type, data }: SendEmailEvent) => {
    let subject: string
    let body: string
    let fromEmailName = "Saltana Support"

    switch (type) {
      case "user-welcome": {
        subject = "We created a Saltana account for you"

        const { html, errors } = render(
          <Mjml>
            <MjmlHead>
              <MjmlTitle>{subject}</MjmlTitle>
              <MjmlPreview>Saltana is a platform for digital creators</MjmlPreview>
            </MjmlHead>
            <MjmlBody width={500}>
              <MjmlSection fullWidth backgroundColor="#efefef">
                <MjmlColumn>
                  <MjmlImage src="https://static.wixstatic.com/media/5cb24728abef45dabebe7edc1d97ddd2.jpg" />
                </MjmlColumn>
              </MjmlSection>
              <MjmlSection>
                <MjmlColumn>
                  <MjmlButton padding="20px" backgroundColor="#346DB7" href="https://www.saltana.com/">
                    Some action for {data.user.name}
                  </MjmlButton>
                </MjmlColumn>
              </MjmlSection>
            </MjmlBody>
          </Mjml>,
          { validationLevel: "soft" }
        )
        body = html
      }

      case "organization-welcome": {
        subject = "You are now a Saltana creator!"

        const { html, errors } = render(
          <Mjml>
            <MjmlHead>
              <MjmlTitle>{subject}</MjmlTitle>
              <MjmlPreview>Saltana is a platform for digital creators</MjmlPreview>
            </MjmlHead>
            <MjmlBody width={500}>
              <MjmlSection fullWidth backgroundColor="#efefef">
                <MjmlColumn>
                  <MjmlImage src="https://static.wixstatic.com/media/5cb24728abef45dabebe7edc1d97ddd2.jpg" />
                </MjmlColumn>
              </MjmlSection>
              <MjmlSection>
                <MjmlColumn>
                  <MjmlButton padding="20px" backgroundColor="#346DB7" href="https://www.saltana.com/">
                    Some action for {data.name}
                  </MjmlButton>
                </MjmlColumn>
              </MjmlSection>
            </MjmlBody>
          </Mjml>,
          { validationLevel: "soft" }
        )
        body = html
      }
    }

    const createEmailArgs = {
      subject,
      body,
      fromEmailName,
      emailAddressId: clerkEmailId,
    }
    console.log("sending an email with", createEmailArgs)
    await emails.createEmail(createEmailArgs)

    console.log("email sent")
  }
)
