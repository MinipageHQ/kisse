import { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useParam, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getDocument from "app/documents/queries/getDocument"
import deleteDocument from "app/documents/mutations/deleteDocument"

export const Document = () => {
  const router = useRouter()
  const documentId = useParam("documentId", "number")
  const [deleteDocumentMutation] = useMutation(deleteDocument)
  const [document] = useQuery(getDocument, { id: documentId })

  return (
    <>
      <Head>
        <title>Document {document.id}</title>
      </Head>

      <div>
        <h1>Document {document.id}</h1>
        <pre>{JSON.stringify(document, null, 2)}</pre>

        <Link href={Routes.EditDocumentPage({ documentId: document.id })}>
          <a>Edit</a>
        </Link>

        <button
          type="button"
          onClick={async () => {
            if (window.confirm("This will be deleted")) {
              await deleteDocumentMutation({ id: document.id })
              router.push(Routes.DocumentsPage())
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

const ShowDocumentPage: BlitzPage = () => {
  return (
    <div>
      <p>
        <Link href={Routes.DocumentsPage()}>
          <a>Documents</a>
        </Link>
      </p>

      <Suspense fallback={<div>Loading...</div>}>
        <Document />
      </Suspense>
    </div>
  )
}

ShowDocumentPage.authenticate = true
ShowDocumentPage.getLayout = (page) => <Layout>{page}</Layout>

export default ShowDocumentPage
