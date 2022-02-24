import { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useParam, BlitzPage, useMutation, Routes } from "blitz"
import getLink from "../queries/getLink"
import deleteLink from "../mutations/deleteLink"
import { Skeleton } from "@mantine/core"

const ShowLinkPage = ({ linkId }: { linkId: string }) => {
  const router = useRouter()
  // const assetId = useParam("assetnId", "string")
  const [deleteLinkMutation] = useMutation(deleteLink)
  const [link, { isFetched }] = useQuery(
    getLink,
    { id: linkId },
    {
      enabled: linkId && linkId.length && linkId.length > 0 ? true : false,
      initialData: {
        id: ''
      }
    }
  )

  if (!link) {
    return (<Skeleton />)
  }

  return (
    <>
      <Head>
        <title>link {link.id}</title>
      </Head>

      <div>
        <h1>link {link.id}</h1>
        <pre>{JSON.stringify(link, null, 2)}</pre>

        <button
          type="button"
          onClick={async () => {
            if (window.confirm("This will be deleted")) {
              await deleteLinkMutation({ id: link.id })
              router.push(Routes.LinksPage({}))
            }
          }}
          style={{ marginLeft: "0.5rem" }}
        >
          Delete
        </button>
      </div>
    </>
  )
}

export default ShowLinkPage
