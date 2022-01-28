import { Suspense } from "react"
import { Head, Link, usePaginatedQuery, useRouter, BlitzPage, Routes } from "blitz"
import getLinks from "app/links/queries/getLinks"
import DashboardLayout from "app/core/layouts/DashboardLayout"

const ITEMS_PER_PAGE = 100

export const LinksList = () => {
  const router = useRouter()
  const page = Number(router.query.page) || 0
  const [{ links, hasMore }] = usePaginatedQuery(getLinks, {
    orderBy: { id: "asc" },
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
  })

  const goToPreviousPage = () => router.push({ query: { page: page - 1 } })
  const goToNextPage = () => router.push({ query: { page: page + 1 } })

  return (
    <div>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <Link href={Routes.ShowLinkPage({ linkId: link.id })}>
              <a>{link.name}</a>
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

const LinksPage: BlitzPage = () => {
  return (
    <>
      <Head>
        <title>Links</title>
      </Head>

      <div>
        <p>
          <Link href={Routes.NewLinkPage()}>
            <a>Create Link</a>
          </Link>
        </p>

        <Suspense fallback={<div>Loading...</div>}>
          <LinksList />
        </Suspense>
      </div>
    </>
  )
}

LinksPage.authenticate = true
LinksPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>

export default LinksPage
