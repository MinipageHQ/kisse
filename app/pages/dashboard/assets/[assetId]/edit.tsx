import { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useMutation, useParam, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getAsset from "app/assets/queries/getAsset"
import updateAsset from "app/assets/mutations/updateAsset"
import { AssetForm, FORM_ERROR } from "app/assets/components/AssetForm"

export const EditAsset = () => {
  const router = useRouter()
  const assetId = useParam("assetId", "number")
  const [asset, { setQueryData }] = useQuery(
    getAsset,
    { id: assetId },
    {
      // This ensures the query never refreshes and overwrites the form data while the user is editing.
      staleTime: Infinity,
    }
  )
  const [updateAssetMutation] = useMutation(updateAsset)

  return (
    <>
      <Head>
        <title>Edit Asset {asset.id}</title>
      </Head>

      <div>
        <h1>Edit Asset {asset.id}</h1>
        <pre>{JSON.stringify(asset, null, 2)}</pre>

        <AssetForm
          submitText="Update Asset"
          // TODO use a zod schema for form validation
          //  - Tip: extract mutation's schema into a shared `validations.ts` file and
          //         then import and use it here
          // schema={UpdateAsset}
          initialValues={asset}
          onSubmit={async (values) => {
            try {
              const updated = await updateAssetMutation({
                id: asset.id,
                ...values,
              })
              await setQueryData(updated)
              router.push(Routes.ShowAssetPage({ assetId: updated.id }))
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

const EditAssetPage: BlitzPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <EditAsset />
      </Suspense>

      <p>
        <Link href={Routes.AssetsPage()}>
          <a>Assets</a>
        </Link>
      </p>
    </div>
  )
}

EditAssetPage.authenticate = true
EditAssetPage.getLayout = (page) => <Layout>{page}</Layout>

export default EditAssetPage
