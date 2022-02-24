import { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useParam, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getCurrentOrganization from "app/organizations/queries/getCurrentOrganization"
import DashboardCreatorSettingsLayout from "app/core/layouts/DashboardCustomizeLayout"

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

const DashboardBillingPage: BlitzPage = () => {
  return (
    <div>

      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard />
      </Suspense>
    </div>
  )
}

DashboardBillingPage.authenticate = true
DashboardBillingPage.getLayout = (page) => <DashboardCreatorSettingsLayout>{page}</DashboardCreatorSettingsLayout>

export default DashboardBillingPage
