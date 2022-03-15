import { Center, Container } from "@mantine/core"
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

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid"

function Header() {
  return (
    <div className="grow p-6">
      <div>
        <nav className="sm:hidden" aria-label="Back">
          <a
            href="#"
            className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
          >
            <ChevronLeftIcon
              className="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            Back
          </a>
        </nav>
        <nav className="hidden sm:flex" aria-label="Breadcrumb">
          <ol role="list" className="flex items-center space-x-4">
            <li>
              <div className="flex">
                <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-700">
                  Dashboard
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRightIcon
                  className="flex-shrink-0 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <a href="#" className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                  Workflows & Integrations
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRightIcon
                  className="flex-shrink-0 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <a
                  href="#"
                  aria-current="page"
                  className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  Webhooks
                </a>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div className="mt-2 md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Webhooks
          </h2>
        </div>
      </div>
    </div>
  )
}
const DashboardWebhooksPage: BlitzPage<{ svixDashboardUrl: string }> = (props) => {
  return (
    <>
      <Header />
      <div className="svix__container">
        <AppPortal url={props?.svixDashboardUrl} primaryColor="#000000" />
      </div>
    </>
  )
}

DashboardWebhooksPage.authenticate = true
DashboardWebhooksPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>

export default DashboardWebhooksPage
