import { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useParam, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getDomain from "app/domains/queries/getDomain"
import deleteDomain from "app/domains/mutations/deleteDomain"

export const Domain = () => {
  const router = useRouter()
  const domainId = useParam("domainnId", "string")
  const [deleteDomainMutation] = useMutation(deleteDomain)
  const [domain] = useQuery(getDomain, { id: domainId! })

  return (
    <>
      <Head>
        <title>Domain {domain.id}</title>
      </Head>

      <div>
        <h1>Domain {domain.id}</h1>
        <pre>{JSON.stringify(domain, null, 2)}</pre>

        <Link href={Routes.EditDomainPage({ domainId: domain.id })}>
          <a>Edit</a>
        </Link>

        <button
          type="button"
          onClick={async () => {
            if (window.confirm("This will be deleted")) {
              await deleteDomainMutation({ id: domain.id })
              router.push(Routes.DomainsPage())
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

const ShowDomainPage: BlitzPage = () => {
  return (
    <div>
      <p>
        <Link href={Routes.DomainsPage()}>
          <a>Domains</a>
        </Link>
      </p>

      <Suspense fallback={<div>Loading...</div>}>
        <Domain />
      </Suspense>
    </div>
  )
}

ShowDomainPage.authenticate = true
ShowDomainPage.getLayout = (page) => <Layout>{page}</Layout>

export default ShowDomainPage
