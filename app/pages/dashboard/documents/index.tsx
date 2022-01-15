import { Suspense } from "react"
import { Head, Link, usePaginatedQuery, useRouter, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getDocuments from "app/documents/queries/getDocuments"

const ITEMS_PER_PAGE = 100

export const DocumentsList = () => {
  const router = useRouter()
  const page = Number(router.query.page) || 0
  const [{ documents, hasMore }] = usePaginatedQuery(getDocuments, {
    orderBy: { id: "asc" },
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
  })

  const goToPreviousPage = () => router.push({ query: { page: page - 1 } })
  const goToNextPage = () => router.push({ query: { page: page + 1 } })

  return (
    <div>
      <ul>
        {documents.map((document) => (
          <li key={document.id}>
            <Link href={Routes.ShowDocumentPage({ documentId: document.id })}>
              <a>{document.name}</a>
            </Link>
          </li>
        ))}
      </ul>

      <button disabled={page === 0} onClick={goToPreviousPage}>
        Previous
      </button>
      <button disabled={!hasMore} onClick={goToNextPage}>
        Next
      </button>
    </div>
  )
}

const DocumentsPage: BlitzPage = () => {
  return (
    <>
      <Head>
        <title>Documents</title>
      </Head>

      <div>
        <p>
          <Link href={Routes.NewDocumentPage()}>
            <a>Create Document</a>
          </Link>
        </p>

        <Suspense fallback={<div>Loading...</div>}>
          <DocumentsList />
        </Suspense>
      </div>
    </>
  )
}

DocumentsPage.authenticate = true
DocumentsPage.getLayout = (page) => <Layout>{page}</Layout>

export default DocumentsPage
