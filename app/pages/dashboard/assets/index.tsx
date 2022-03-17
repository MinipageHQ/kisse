import { Suspense, useState } from "react"
import { Head, Link, usePaginatedQuery, useRouter, BlitzPage, Routes } from "blitz"
import DashboardAssetsLayout from "app/assets/components/DashboardAssetsLayout"
import { Modal, Skeleton } from "@mantine/core"
import DashboardAssetsNew from "app/assets/components/DashboardAssetsNew"
import DashboardAssetsShow from "app/assets/components/DashboardAssetsShow"

const DashboardAssetPage: BlitzPage = (props) => {
  return (
    <>
      <Head>
        <title>Assets - Saltana</title>
      </Head>
    </>
  )
}

DashboardAssetPage.authenticate = true
DashboardAssetPage.getLayout = (page) => <DashboardAssetsLayout>{page}</DashboardAssetsLayout>

export default DashboardAssetPage
