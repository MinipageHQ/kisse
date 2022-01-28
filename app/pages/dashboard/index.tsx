import { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useParam, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getCurrentOrganization from "app/organizations/queries/getCurrentOrganization"
import DashboardLayout from "app/core/layouts/DashboardLayout"

export const Dashboard = () => {
  const router = useRouter()
  const [organization] = useQuery(getCurrentOrganization, {})

  return (
    <>
      <Head>
        <title>Space {organization.id}</title>
      </Head>

      <div>
        <h1>Space {organization.id}</h1>
        <pre>{JSON.stringify(organization, null, 2)}</pre>
      </div>
    </>
  )
}

const DashboardMainPage: BlitzPage = () => {
  return (
    <div>
      <p>
        <Link href={Routes.SpacesPage()}>
          <a>Spaces</a>
        </Link>
      </p>

      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard />
      </Suspense>
    </div>
  )
}

DashboardMainPage.authenticate = true
DashboardMainPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>

export default DashboardMainPage
