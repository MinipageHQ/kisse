import { Suspense } from "react"
import { Head, Link, usePaginatedQuery, useRouter, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getDomains from "app/domains/queries/getDomains"
import DashboardCreatorSettingsLayout from "app/core/layouts/DashboardCustomizeLayout"

const ITEMS_PER_PAGE = 100

export const DomainsList = () => {
  const router = useRouter()
  const page = Number(router.query.page) || 0
  const [{ domains, hasMore }] = usePaginatedQuery(getDomains, {
    orderBy: { id: "asc" },
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
  })

  const goToPreviousPage = () => router.push({ query: { page: page - 1 } })
  const goToNextPage = () => router.push({ query: { page: page + 1 } })

  return (
    <div>
      <ul>
        {domains.map((domain) => (
          <li key={domain.id}>
            <Link href={Routes.ShowDomainPage({ domainId: domain.id })}>
              <a>{domain.name}</a>
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

const DomainsPage: BlitzPage = () => {
  return (
    <>
      <Head>
        <title>Domains</title>
      </Head>

      <div>
        <p>
          <Link href={Routes.NewDomainPage()}>
            <a>Create Domain</a>
          </Link>
        </p>

        <Suspense fallback={<div>Loading...</div>}>
          <DomainsList />
        </Suspense>
      </div>
    </>
  )
}

DomainsPage.authenticate = true
DomainsPage.getLayout = (page) => (
  <DashboardCreatorSettingsLayout>{page}</DashboardCreatorSettingsLayout>
)

export default DomainsPage
