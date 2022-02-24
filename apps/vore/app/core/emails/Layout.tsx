import { Mjml, MjmlHead, MjmlTitle, MjmlPreview, MjmlBody, MjmlSection, MjmlColumn, MjmlImage, MjmlButton } from "mjml-react";

export default function EmailLayout({ children, title, preview }: {
  children: React.ReactNode;
  title?: string;
  preview?: string;
}): JSX.Element {
  return (<Mjml>
    <MjmlHead>
      <MjmlTitle>{title}</MjmlTitle>
      <MjmlPreview>{preview}</MjmlPreview>
    </MjmlHead>
    <MjmlBody width={500}>
      {children}
    </MjmlBody>
  </Mjml>)
}
