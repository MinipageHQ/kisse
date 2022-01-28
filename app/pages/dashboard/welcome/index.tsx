import { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useMutation, useParam, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getCurrentOrganization from "app/organizations/queries/getCurrentOrganization"
import completeOrganizationOnboarding from "app/organizations/mutations/completeOrganizationOnboarding"
import {
  OrganizationOnboardingForm,
  FORM_ERROR,
} from "app/organizations/components/OrganizationOnboardingForm"
import AppLayout from "app/core/layouts/AppLayout"
import { Organization } from "app/organizations/validations"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"

export const CreatorOnboarding = () => {
  const user = useCurrentUser()
  const [completeOrganizationOnboardingMutation] = useMutation(completeOrganizationOnboarding)

  return (
    <>
      <pre>{JSON.stringify(user, null, 2)}</pre>

      <OrganizationOnboardingForm
        submitText="Start using Saltana"
        submitTextWhenLoading="Crafting your profile..."
        submitProps={{
          className:
            "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm",
        }}
        // TODO use a zod schema for form validation
        //  - Tip: extract mutation's schema into a shared `validations.ts` file and
        //         then import and use it here
        schema={Organization}
        // initialValues={organization}
        onSubmit={async (values) => {
          try {
            const updated = await completeOrganizationOnboardingMutation({
              id: 0,
              ...values,
            })
            // await setQueryData(updated)
            // router.push(Routes.ShowLinkPage({ linkId: updated.id }))
          } catch (error: any) {
            console.error(error)
            return {
              [FORM_ERROR]: error.toString(),
            }
          }
        }}
      />
    </>
  )
}

const CreatorOnboardingPage: BlitzPage = () => {
  return (
    <>
      <Head>
        <title>Finish setting up your Saltana account</title>
      </Head>

      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl text-gray-800 font-bold mb-6">Finish setting up your account ✨</h1>

        <p className="mt-1 text-sm text-gray-500">
          Let’s get started by filling in the information below to create your new presence on the
          web.
        </p>

        <Suspense fallback={<div>Loading...</div>}>
          <CreatorOnboarding />
        </Suspense>
      </div>
    </>
  )
}

CreatorOnboardingPage.authenticate = true
CreatorOnboardingPage.getLayout = (page) => <AppLayout>{page}</AppLayout>

export default CreatorOnboardingPage
