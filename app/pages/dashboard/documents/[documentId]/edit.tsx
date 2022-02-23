import { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useMutation, useParam, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getDocument from "app/documents/queries/getDocument"
import updateDocument from "app/documents/mutations/updateDocument"
import { DocumentForm, FORM_ERROR } from "app/documents/components/DocumentForm"

export const EditDocument = () => {
  const router = useRouter()
  const documentId = useParam("documentId", "string")
  const [document, { setQueryData }] = useQuery(
    getDocument,
    { id: documentId },
    {
      // This ensures the query never refreshes and overwrites the form data while the user is editing.
      staleTime: Infinity,
    }
  )
  const [updateDocumentMutation] = useMutation(updateDocument)

  return (
    <>
      <Head>
        <title>Edit Document {document.id}</title>
      </Head>

      <div>
        <h1>Edit Document {document.id}</h1>
        <pre>{JSON.stringify(document, null, 2)}</pre>

        <DocumentForm
          submitText="Update Document"
          // TODO use a zod schema for form validation
          //  - Tip: extract mutation's schema into a shared `validations.ts` file and
          //         then import and use it here
          // schema={UpdateDocument}
          initialValues={document}
          onSubmit={async (values) => {
            try {
              const updated = await updateDocumentMutation({
                id: document.id,
                ...values,
              })
              await setQueryData(updated)
              router.push(Routes.ShowDocumentPage({ documentId: updated.id }))
            } catch (error: any) {
              console.error(error)
              return {
                [FORM_ERROR]: error.toString(),
              }
            }
          }}
        />
      </div>
    </>
  )
}

const EditDocumentPage: BlitzPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <EditDocument />
      </Suspense>

      <p>
        <Link href={Routes.DocumentsPage()}>
          <a>Documents</a>
        </Link>
      </p>
    </div>
  )
}

EditDocumentPage.authenticate = true
EditDocumentPage.getLayout = (page) => <Layout>{page}</Layout>

export default EditDocumentPage
