import { Link, useRouter, useMutation, BlitzPage, Routes, useQuery } from "blitz"
import Layout from "app/links/components/DashboardLinksLayout"
import createLink from "app/links/mutations/createLink"
import { LinkForm, FORM_ERROR } from "app/links/components/LinkForm"

import { CreateLinkInput } from "app/links/validations"

const DashboardLinksNew = () => {
  const router = useRouter()
  const [createLinkMutation] = useMutation(createLink)


  return (

    <LinkForm
      submitText="Create Link"
      schema={CreateLinkInput}
      submitProps={{ className: "ml-3 inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500" }}
      initialValues={{}}
      onSubmit={async (values) => {
        try {

          console.log("links form new values", values)
          const link = await createLinkMutation(values)
          router.push(Routes.ShowLinkPage({ linkId: link.id }))
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

export default DashboardLinksNew
