import { Suspense, useEffect } from "react"
import { Head, Link, useRouter, useQuery, useParam, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import deleteAsset from "../mutations/deleteAsset"
import getAsset from "../queries/getAsset"

interface AssetShowProps {
  assetId: string
  setModalTitle: (title: string) => void
}
export const AssetShow = ({ assetId, setModalTitle }: AssetShowProps) => {
  const router = useRouter()
  // const assetId = useParam("assetId", "number")
  const [deleteAssetMutation] = useMutation(deleteAsset)
  const [asset, meta] = useQuery(
    getAsset,
    { id: assetId as string },
    {
      enabled: !!assetId,
      initialData: {
        id: assetId,
        name: "",
      },
    }
  )

  useEffect(() => {
    if (meta.isFetched === true) {
      setModalTitle(`Edit ${asset?.name}`)
    }
  }, [meta.isFetched, asset?.name, setModalTitle])

  return (
    <>
      <Head>
        <title>asset {asset?.id}</title>
      </Head>

      <div>
        <h1>asset {asset?.id}</h1>
        <pre>{JSON.stringify(asset, null, 2)}</pre>

        <button
          type="button"
          onClick={async () => {
            if (!asset?.id) {
              return
            }
            if (window.confirm("This will be deleted")) {
              await deleteAssetMutation({ id: asset?.id })
              router.push(Routes.AssetsPage({}))
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

const DashboardAssetShow: BlitzPage<AssetShowProps> = ({ assetId, setModalTitle }) => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <AssetShow assetId={assetId} setModalTitle={setModalTitle} />
      </Suspense>
    </div>
  )
}
export default DashboardAssetShow
