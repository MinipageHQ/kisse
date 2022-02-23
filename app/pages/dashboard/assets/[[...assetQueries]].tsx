import { Suspense } from "react"
import { Head, Link, usePaginatedQuery, useRouter, BlitzPage, Routes } from "blitz"
import DashboardAssetsLayout from "app/assets/components/DashboardAssetsLayout"
import DashboardAssetsDialog from "app/assets/components/DashboardAssetsDialog"
import DashboardAssetsList from "app/assets/components/DashboardAssetsList"

const AssetsPage: BlitzPage = (props) => {

  return (
    <>
      <Head>
        <title>Assets</title>
      </Head>

      <DashboardAssetsList />
      <DashboardAssetsDialog />
    </>
  )
}

AssetsPage.authenticate = true
AssetsPage.getLayout = (page) => <DashboardAssetsLayout>{page}</DashboardAssetsLayout>

export default AssetsPage
