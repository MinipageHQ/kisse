import { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useParam, BlitzPage, useMutation, Routes } from "blitz"
import DashboardLayout from "app/core/layouts/DashboardLayout"
import getInviteCodes from "app/admin/queries/getInviteCodes"

export const Dashboard = () => {
  const [inviteCodes] = useQuery(getInviteCodes, {})

  return (
    <>
      <Head>
        <title>Invite Codes</title>
      </Head>

      <div>
        <h1>Invite Codes ({inviteCodes.count})</h1>
        <pre>{JSON.stringify(inviteCodes, null, 2)}</pre>
      </div>
    </>
  )
}

const AdminDashboardInviteCodesPage: BlitzPage = () => {
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

AdminDashboardInviteCodesPage.authenticate = true
AdminDashboardInviteCodesPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>

export default AdminDashboardInviteCodesPage
