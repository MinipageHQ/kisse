import { Head, Link, usePaginatedQuery, useRouter, BlitzPage, Routes } from "blitz"
import DashboardAssetsLayout from "app/assets/components/DashboardAssetsLayout"

const DashboardAssetsPage: BlitzPage = (props) => {
  return (
    <>
      <Head>
        <title>Assets - Saltana</title>
      </Head>
    </>
  )
}

DashboardAssetsPage.authenticate = true
DashboardAssetsPage.getLayout = (page) => <DashboardAssetsLayout>{page}</DashboardAssetsLayout>

export default DashboardAssetsPage
