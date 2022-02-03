import { Link, useRouter, useMutation, BlitzPage, Routes, useQuery } from "blitz"
import Layout from "app/links/components/DashboardLinksLayout"
import createLink, { CreateLink } from "app/links/mutations/createLink"
import { LinkForm, FORM_ERROR } from "app/links/components/LinkForm"
import linkTypes from 'app/links/link-types'
import classNames from "app/core/utils/classnames"
import { useMemo } from "react"

const NewLinkPage: BlitzPage = () => {
  const router = useRouter()
  const [createLinkMutation] = useMutation(createLink)

  return (
    <main className="max-w-lg mx-auto pt-10 pb-12 px-4 lg:pb-16">
      <div className="space-y-6">
        <LinkForm
          submitText="Create Link"
          schema={CreateLink}
          submitProps={{ className: "ml-3 inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500" }}
          // initialValues={{}}
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
      </div>
    </main>
  )
}

NewLinkPage.authenticate = true
NewLinkPage.getLayout = (page) => <Layout title={"Create New Link"}>{page}</Layout>

export default NewLinkPage
