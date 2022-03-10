import { Head, BlitzPage, useQuery, Routes, useMutation } from "blitz"
import DashboardLinksLayout from "app/links/components/DashboardLinksLayout"
import LinksList from "app/links/components/DashboardLinksPage"
import { Fragment, Suspense, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { XIcon } from "@heroicons/react/outline"
import { useRouter } from "blitz"

import { Modal, Skeleton } from "@mantine/core"
import getLink from "app/links/queries/getLink"
import deleteLink from "app/links/mutations/deleteLink"

const DashboardLinkPage: BlitzPage = (props) => {
  const { query, back, push } = useRouter()

  const linkId = query.linkId

  const [link, { isFetched }] = useQuery(
    getLink,
    { id: "dsf" },
    {
      enabled: linkId && linkId.length && linkId.length > 0 ? true : false,
      initialData: {
        id: "",
      },
    }
  )
  const [deleteLinkMutation] = useMutation(deleteLink)

  return (
    <>
      <Head>
        <title>link {link?.id}</title>
      </Head>
      <Modal
        opened={typeof linkId === "string"}
        onClose={() => push("/dashboard/links")}
        title={"test"}
      >
        <Suspense fallback={<Skeleton visible />}>
          <div>
            <h1>link {link?.id}</h1>
            <pre>{JSON.stringify(link, null, 2)}</pre>

            <button
              type="button"
              onClick={async () => {
                if (window.confirm("This will be deleted")) {
                  await deleteLinkMutation({ id: link?.id! })
                  push(Routes.LinksPage({}))
                }
              }}
              style={{ marginLeft: "0.5rem" }}
            >
              Delete
            </button>
          </div>
        </Suspense>
      </Modal>
    </>
  )
}

DashboardLinkPage.authenticate = true
DashboardLinkPage.getLayout = (page) => <DashboardLinksLayout>{page}</DashboardLinksLayout>

export default DashboardLinkPage
