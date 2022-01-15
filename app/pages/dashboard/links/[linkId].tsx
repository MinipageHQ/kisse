import { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useParam, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getLink from "app/links/queries/getLink"
import deleteLink from "app/links/mutations/deleteLink"

export const LinkPage = () => {
  const router = useRouter()
  const linkId = useParam("linkId", "number")
  const creatorId = useParam("creatorId", "number")
  const [deleteLinkMutation] = useMutation(deleteLink)
  const [link] = useQuery(getLink, { id: linkId })

  return (
    <>
      <Head>
        <title>Link {link.id}</title>
      </Head>

      <div>
        <h1>Link {link.id}</h1>
        <pre>{JSON.stringify(link, null, 2)}</pre>

        <Link href={Routes.EditLinkPage({ linkId: link.id })}>
          <a>Edit</a>
        </Link>

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

const ShowLinkPage: BlitzPage = () => {
  return (
    <div>
      <p>
        <Link href={Routes.LinksPage()}>
          <a>Links</a>
        </Link>
      </p>

      <Suspense fallback={<div>Loading...</div>}>
        <LinkPage />
      </Suspense>
    </div>
  )
}

ShowLinkPage.authenticate = true
ShowLinkPage.getLayout = (page) => <Layout>{page}</Layout>

export default ShowLinkPage
