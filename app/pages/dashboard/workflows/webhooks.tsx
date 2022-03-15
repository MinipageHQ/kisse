import DashboardLayout from "app/core/layouts/DashboardLayout"
import { BlitzPage, GetServerSideProps, getSession } from "blitz"
import db from "db"
import svix from "integrations/svix"
import { AppPortal } from "svix-react"

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession(req, res)

  if (session.defaultOrgId) {
    const organization = await db.organization.findFirst({
      where: {
        id: session.defaultOrgId,
      },
      select: {
        svixAppId: true,
      },
    })

    if (organization && organization.svixAppId) {
      try {
        const dashboard = await svix.authentication.dashboardAccess(organization.svixAppId)

        return {
          props: {
            svixAppId: organization.svixAppId,
            svixDashboardUrl: dashboard.url,
          },
        }
      } catch (error: any) {
        console.error("Unknown error", error)
      }
    }
  }

  return { props: {} }
}

const DashboardWebhooksPage: BlitzPage<{ svixDashboardUrl: string }> = (props) => {
  return <AppPortal url={props?.svixDashboardUrl} />
}

DashboardWebhooksPage.authenticate = true
DashboardWebhooksPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>

export default DashboardWebhooksPage
