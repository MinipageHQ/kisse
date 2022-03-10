import { Head, BlitzPage } from "blitz"
import DashboardLinksLayout from "app/links/components/DashboardLinksLayout"
import { Fragment, Suspense, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { XIcon } from "@heroicons/react/outline"
import { useRouter } from "blitz"
import DashboardLinksNew from "app/links/components/DashboardLinksNew"
import { Modal, Skeleton } from "@mantine/core"
import linkTypes from "app/links/link-types"

const DashboardLinksNewPage: BlitzPage = (props) => {
  const {
    query: { linkType },
    back,
    push,
  } = useRouter()

  const typeData = linkTypes.find(({ type }) => type === linkType)

  return (
    <>
      <Head>
        <title>Links</title>
      </Head>

      <Modal
        opened
        onClose={() => push("/dashboard/links")}
        title={typeData?.createTitle || "Create a new link..."}
      >
        <Suspense fallback={<Skeleton visible />}>
          <DashboardLinksNew linkType={linkType! as string} />
        </Suspense>
      </Modal>
    </>
  )
}

DashboardLinksNewPage.authenticate = true
DashboardLinksNewPage.getLayout = (page) => <DashboardLinksLayout>{page}</DashboardLinksLayout>

export default DashboardLinksNewPage
