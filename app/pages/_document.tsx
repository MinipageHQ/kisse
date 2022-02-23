import {
  Document, Html, DocumentHead, Main, BlitzScript, /*DocumentContext*/
  DocumentContext
} from "blitz"
import { createGetInitialProps } from '@mantine/next';
import { IntercomProvider, useIntercom } from 'react-use-intercom';
const INTERCOM_APP_ID = process.env.NEXT_PUBLIC_INTERCOM_APP_ID

const getInitialProps = createGetInitialProps();
class MyDocument extends Document {
  // Only uncomment if you need to customize this behaviour
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps, ...getInitialProps }
  }

  render() {
    return (
      <Html lang="en">
        <DocumentHead />
        <body className="bg-white">
          <Main />
          <BlitzScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
