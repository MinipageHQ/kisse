import { Link, useRouter, useMutation, BlitzPage, Routes, useQuery } from "blitz"
import createLink from "app/links/mutations/createLink"

import { CreateLinkInput } from "app/links/validations"
import { Modal } from "@mantine/core"
import classNames from "app/core/utils/classnames"
import createAsset from "../mutations/createAsset"
import { AssetForm, FORM_ERROR } from "./AssetForm"
import { CreateAssetSchema } from "../validations"

const DashboardAssetsNew = () => {
  const router = useRouter()
  const [createAssetMutation] = useMutation(createAsset)

  return (
    <AssetForm
      submitText="Create the asset"
      schema={CreateAssetSchema}
      submitProps={{
        className:
          "ml-3 inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500",
      }}
      initialValues={{
        currency: "USD",
      }}
      onSubmit={async (values) => {
        try {
          console.log("asset form new values", values)

          const asset = await createAssetMutation(values)

          if (asset?.id) {
            router.push(Routes.AssetsPage({ assetQueries: [asset?.id] }))
          }
        } catch (error: any) {
          console.error(error)
          return {
            [FORM_ERROR]: error.toString(),
          }
        }
      }}
    />
  )
}

export default DashboardAssetsNew
