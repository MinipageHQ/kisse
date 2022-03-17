import { Suspense, useState } from "react"
import { Head, Link, usePaginatedQuery, useRouter, BlitzPage, Routes, useParam } from "blitz"
import DashboardAssetsLayout from "app/assets/components/DashboardAssetsLayout"
import { Modal, Skeleton } from "@mantine/core"
import DashboardAssetsShow from "app/assets/components/DashboardAssetsShow"

const DashboardAssetsEditPage: BlitzPage = (props) => {
  const { push } = useRouter()
  const [modalTitle, setModalTitle] = useState("Update an asset...")
  const assetId = useParam("assetId", "string")

  return (
    <>
      <Head>
        <title>Assets</title>
      </Head>
      <Modal
        opened={typeof assetId === "string"}
        onClose={() => push("/dashboard/assets")}
        title={modalTitle}
        size={assetId === "new" ? "md" : "xl"}
      >
        <DashboardAssetsShow assetId={assetId!} setModalTitle={setModalTitle} />
      </Modal>
    </>
  )
}

DashboardAssetsEditPage.authenticate = true
DashboardAssetsEditPage.getLayout = (page) => <DashboardAssetsLayout>{page}</DashboardAssetsLayout>

export default DashboardAssetsEditPage
