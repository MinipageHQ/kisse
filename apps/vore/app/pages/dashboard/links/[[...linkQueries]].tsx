import { Head, BlitzPage } from "blitz"
import DashboardLinksLayout from "app/links/components/DashboardLinksLayout"
import LinksList from "app/links/components/DashboardLinksPage"
import DashboardLinksDialog from "app/links/components/DashboardLinksDialog"

const LinksPage: BlitzPage = (props) => {

  return (
    <>
      <Head>
        <title>Links</title>
      </Head>

      <LinksList />
      <DashboardLinksDialog />
    </>
  )
}

LinksPage.authenticate = true
LinksPage.getLayout = (page) => <DashboardLinksLayout>{page}</DashboardLinksLayout>

export default LinksPage
