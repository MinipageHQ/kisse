import { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useMutation, useParam, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getDomain from "app/domains/queries/getDomain"
import updateDomain from "app/domains/mutations/updateDomain"
import { DomainForm, FORM_ERROR } from "app/domains/components/DomainForm"

export const EditDomain = () => {
  const router = useRouter()
  const domainId = useParam("domainId", "string")
  const [domain, { setQueryData }] = useQuery(
    getDomain,
    { id: domainId! },
    {
      enabled: !!domainId,
      // This ensures the query never refreshes and overwrites the form data while the user is editing.
      staleTime: Infinity,
    }
  )
  const [updateDomainMutation] = useMutation(updateDomain)

  return (
    <>
      <Head>
        <title>Edit Domain {domain?.id}</title>
      </Head>

      <div>
        <h1>Edit Domain {domain?.id}</h1>
        <pre>{JSON.stringify(domain, null, 2)}</pre>

        <DomainForm
          submitText="Update Domain"
          // TODO use a zod schema for form validation
          //  - Tip: extract mutation's schema into a shared `validations.ts` file and
          //         then import and use it here
          // schema={UpdateDomain}
          initialValues={domain}
          onSubmit={async (values) => {
            try {
              const updated = await updateDomainMutation({
                id: domain?.id,
                ...values,
              })
              await setQueryData(updated)
              router.push(Routes.ShowDomainPage({ domainId: updated.id }))
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

const EditDomainPage: BlitzPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <EditDomain />
      </Suspense>

      <p>
        <Link href={Routes.DomainsPage()}>
          <a>Domains</a>
        </Link>
      </p>
    </div>
  )
}

EditDomainPage.authenticate = true
EditDomainPage.getLayout = (page) => <Layout>{page}</Layout>

export default EditDomainPage
