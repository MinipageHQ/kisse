import { Suspense } from "react"
import { Head, Link, usePaginatedQuery, useRouter, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getAssets from "app/assets/queries/getAssets"

const ITEMS_PER_PAGE = 100

export const AssetsList = () => {
  const router = useRouter()
  const page = Number(router.query.page) || 0
  const [{ assets, hasMore }] = usePaginatedQuery(getAssets, {
    orderBy: { id: "asc" },
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
  })

  const goToPreviousPage = () => router.push({ query: { page: page - 1 } })
  const goToNextPage = () => router.push({ query: { page: page + 1 } })

  return (
    <div>
      <ul>
        {assets.map((asset) => (
          <li key={asset.id}>
            <Link href={Routes.ShowAssetPage({ assetId: asset.id })}>
              <a>{asset.name}</a>
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

const AssetsPage: BlitzPage = () => {
  return (
    <>
      <Head>
        <title>Assets</title>
      </Head>

      <div>
        <p>
          <Link href={Routes.NewAssetPage()}>
            <a>Create Asset</a>
          </Link>
        </p>

        <Suspense fallback={<div>Loading...</div>}>
          <AssetsList />
        </Suspense>
      </div>
    </>
  )
}

AssetsPage.authenticate = true
AssetsPage.getLayout = (page) => <Layout>{page}</Layout>

export default AssetsPage
