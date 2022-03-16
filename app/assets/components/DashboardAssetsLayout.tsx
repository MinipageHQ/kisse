import { Alert, Button, Container, Group, Skeleton, Tabs } from "@mantine/core"
import DashboardLayout from "app/core/layouts/DashboardLayout"
import { BlitzLayout, Link, Routes } from "blitz"
import { Suspense } from "react"

const DashboardAssetsLayout: BlitzLayout<{
  subHeader?: React.ReactNode
  container?: boolean
  title?: string
}> = ({ subHeader, title, children, container }) => {
  return (
    <DashboardLayout title={title}>
      <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 mb-4">
        <div className="flex-1 min-w-0">
          <h1 className="text-xl font-medium text-gray-900 sm:truncate">{title || "Assets"}</h1>
        </div>
        <div className="mt-4 flex sm:mt-0 sm:ml-4">
          <Group grow spacing={10}>
            <Link href={Routes.OrdersPage()}>
              <Button variant="default">Orders</Button>
            </Link>
            <Link href={Routes.DashboardPayoutsPage()}>
              <Button variant="default">Payouts</Button>
            </Link>
            <Link href={Routes.AssetsPage({ assetQueries: ["new"] })}>
              <Button variant="filled">Create an asset</Button>
            </Link>
          </Group>
        </div>
      </div>

      <Container pb={15}>
        <Alert
          title="You need to verify your identity before you can sell items."
          variant="outline"
        >
          To comply with regulations, we need to verify your identity and bank information via our
          partner, Stripe, before you can sell items on Saltana.
        </Alert>
      </Container>

      <Suspense fallback={<Skeleton visible />}>{children}</Suspense>
    </DashboardLayout>
  )
}

export default DashboardAssetsLayout
