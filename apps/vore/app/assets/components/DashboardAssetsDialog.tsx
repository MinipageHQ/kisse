import { Fragment, Suspense, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { XIcon } from "@heroicons/react/outline"
import { useRouter } from "blitz"
import DashboardAssetsNew from "./DashboardAssetsNew"
import DashboardAssetsShow from "./DashboardAssetsShow"
import { Modal, Skeleton } from "@mantine/core"

export default function DashboardAssetsDialog() {
  const { query, push } = useRouter()

  const [assetId = null, assetType = null] = query.assetQueries || []

  const [modalTitle, setModalTitle] = useState("Create an asset...")
  // const typeData = assetTypes.find(({ type }) => type === assetType)

  if (!assetId) {
    return null
  }
  return (
    <Modal
      opened={typeof assetId === "string"}
      onClose={() => push("/dashboard/assets")}
      title={modalTitle}
    >
      <Suspense fallback={<Skeleton visible />}>
        {assetId === "new" ? (
          <DashboardAssetsNew />
        ) : (
          <DashboardAssetsShow assetId={assetId} setModalTitle={setModalTitle} />
        )}
      </Suspense>
    </Modal>
  )
}
