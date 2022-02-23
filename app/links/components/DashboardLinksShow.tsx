import { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useParam, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getLink from "../queries/getLink"
import deleteLink from "../mutations/deleteLink"

export const LinkShow = ({ linkId }) => {
  const router = useRouter()
  // const assetId = useParam("assetId", "number")
  const [deleteLinkMutation] = useMutation(deleteLink)
  const [link] = useQuery(getLink, { id: linkId }, {
    enabled: linkId && linkId.length > 0
  })

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
              router.push(Routes.LinksPage())
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

const ShowLinkPage: BlitzPage = ({ linkId }) => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LinkShow linkId={linkId} />
      </Suspense>
    </div>
  )
}

ShowLinkPage.authenticate = true
ShowLinkPage.getLayout = (page) => <Layout>{page}</Layout>

export default ShowLinkPage
