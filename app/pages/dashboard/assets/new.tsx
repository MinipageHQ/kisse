import { Link, useRouter, useMutation, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import createAsset from "app/assets/mutations/createAsset"
import { AssetForm, FORM_ERROR } from "app/assets/components/AssetForm"

const NewAssetPage: BlitzPage = () => {
  const router = useRouter()
  const [createAssetMutation] = useMutation(createAsset)

  return (
    <div>
      <h1>Create New Asset</h1>

      <AssetForm
        submitText="Create Asset"
        // TODO use a zod schema for form validation
        //  - Tip: extract mutation's schema into a shared `validations.ts` file and
        //         then import and use it here
        // schema={CreateAsset}
        // initialValues={{}}
        onSubmit={async (values) => {
          try {
            const asset = await createAssetMutation(values)
            router.push(Routes.ShowAssetPage({ assetId: asset.id }))
          } catch (error: any) {
            console.error(error)
            return {
              [FORM_ERROR]: error.toString(),
            }
          }
        }}
      />

      <p>
        <Link href={Routes.AssetsPage()}>
          <a>Assets</a>
        </Link>
      </p>
    </div>
  )
}

NewAssetPage.authenticate = true
NewAssetPage.getLayout = (page) => <Layout title={"Create New Asset"}>{page}</Layout>

export default NewAssetPage
