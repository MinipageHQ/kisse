import { Suspense, useState } from "react"
import { Head, Link, usePaginatedQuery, useRouter, BlitzPage, Routes } from "blitz"
import DashboardAssetsLayout from "app/assets/components/DashboardAssetsLayout"
import { Modal, Skeleton } from "@mantine/core"
import DashboardAssetsNew from "app/assets/components/DashboardAssetsNew"

const DashboardAssetsNewPage: BlitzPage = (props) => {
  const { query, push } = useRouter()

  return (
    <>
      <Head>
        <title>Create a new asset - Saltana</title>
      </Head>
      <Modal
        opened
        onClose={() => push("/dashboard/assets")}
        title={"Create an asset..."}
        size={"md"}
      >
        <Suspense fallback={<Skeleton visible />}>
          <DashboardAssetsNew />
        </Suspense>
      </Modal>
    </>
  )
}

DashboardAssetsNewPage.authenticate = true
DashboardAssetsNewPage.getLayout = (page) => <DashboardAssetsLayout>{page}</DashboardAssetsLayout>

export default DashboardAssetsNewPage
