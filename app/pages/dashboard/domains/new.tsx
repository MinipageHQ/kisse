import { Link, useRouter, useMutation, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import createDomain from "app/domains/mutations/createDomain"
import { DomainForm, FORM_ERROR } from "app/domains/components/DomainForm"
import DashboardCreatorSettingsLayout from "app/core/layouts/DashboardCustomizeLayout"

const NewDomainPage: BlitzPage = () => {
  const router = useRouter()
  const [createDomainMutation] = useMutation(createDomain)

  return (
    <div>
      <h1>Create New Domain</h1>

      <DomainForm
        submitText="Create Domain"
        // TODO use a zod schema for form validation
        //  - Tip: extract mutation's schema into a shared `validations.ts` file and
        //         then import and use it here
        // schema={CreateDomain}
        // initialValues={{}}
        onSubmit={async (values) => {
          try {
            const domain = await createDomainMutation(values)
            router.push(Routes.ShowDomainPage({ domainId: domain.id }))
          } catch (error: any) {
            console.error(error)
            return {
              [FORM_ERROR]: error.toString(),
            }
          }
        }}
      />

      <p>
        <Link href={Routes.DomainsPage()}>
          <a>Domains</a>
        </Link>
      </p>
    </div>
  )
}

NewDomainPage.authenticate = true

NewDomainPage.getLayout = (page) => (
  <DashboardCreatorSettingsLayout title={"Create New Domain"}>
    {page}
  </DashboardCreatorSettingsLayout>
)

export default NewDomainPage
