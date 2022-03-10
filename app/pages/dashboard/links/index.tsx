import { Head, BlitzPage } from "blitz"
import DashboardLinksLayout from "app/links/components/DashboardLinksLayout"

const LinksPage: BlitzPage = (props) => {
  return (
    <>
      <Head>
        <title>Links</title>
      </Head>
    </>
  )
}

LinksPage.authenticate = true
LinksPage.getLayout = (page) => <DashboardLinksLayout>{page}</DashboardLinksLayout>

export default LinksPage
