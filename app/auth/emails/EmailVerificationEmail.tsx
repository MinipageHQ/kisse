import EmailLayout from "app/core/emails/Layout";
import { Mjml, MjmlHead, MjmlTitle, MjmlPreview, MjmlBody, MjmlSection, MjmlColumn, MjmlImage, MjmlButton } from "mjml-react";

export default function EmailVerificationEmail({ children, title, preview }: {
  children: React.ReactNode;
  title?: string;
  preview?: string;
}): JSX.Element {
  return (
    <EmailLayout title="sdf" preview="=sdfsd">
      <MjmlSection fullWidth backgroundColor="#efefef">
        <MjmlColumn>
          <MjmlImage src="https://static.wixstatic.com/media/5cb24728abef45dabebe7edc1d97ddd2.jpg" />
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection>
        <MjmlColumn>
          <MjmlButton padding="20px" backgroundColor="#346DB7" href="https://www.wix.com/">
            Verify Email
          </MjmlButton>
        </MjmlColumn>
      </MjmlSection>
    </EmailLayout>
  )
}
