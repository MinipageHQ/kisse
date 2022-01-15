import { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useParam, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getAsset from "app/assets/queries/getAsset"
import deleteAsset from "app/assets/mutations/deleteAsset"

export const Asset = () => {
  const router = useRouter()
  const assetId = useParam("assetId", "number")
  const [deleteAssetMutation] = useMutation(deleteAsset)
  const [asset] = useQuery(getAsset, { id: assetId })

  return (
    <>
      <Head>
        <title>Asset {asset.id}</title>
      </Head>

      <div>
        <h1>Asset {asset.id}</h1>
        <pre>{JSON.stringify(asset, null, 2)}</pre>

        <Link href={Routes.EditAssetPage({ assetId: asset.id })}>
          <a>Edit</a>
        </Link>

        <button
          type="button"
          onClick={async () => {
            if (window.confirm("This will be deleted")) {
              await deleteAssetMutation({ id: asset.id })
              router.push(Routes.AssetsPage())
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

const ShowAssetPage: BlitzPage = () => {
  return (
    <div>
      <p>
        <Link href={Routes.AssetsPage()}>
          <a>Assets</a>
        </Link>
      </p>

      <Suspense fallback={<div>Loading...</div>}>
        <Asset />
      </Suspense>
    </div>
  )
}

ShowAssetPage.authenticate = true
ShowAssetPage.getLayout = (page) => <Layout>{page}</Layout>

export default ShowAssetPage
