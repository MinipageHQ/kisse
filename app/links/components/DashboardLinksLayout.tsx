import DashboardLayout from "app/core/layouts/DashboardLayout"
import { BlitzLayout, Link, Router, Routes } from "blitz"
import { Popover, Text, Button, Image, Modal, Divider, Box, Title, Group } from "@mantine/core"

import WrappedLinksList from "./DashboardLinksPage"

function CreateANewLinkButton() {
  return (
    <>
      <Group position="center">
        <Link href="/dashboard/links/new" passHref>
          <Button component="a">Create a new link</Button>
        </Link>
      </Group>
    </>
  )
}
const DashboardLinksLayout: BlitzLayout<{
  subHeader?: React.ReactNode
  container?: boolean
  title?: string
}> = ({ subHeader, title, children, container }) => {
  return (
    <DashboardLayout title={title}>
      <Box>
        <div className="md:flex md:items-center md:justify-between p-3">
          <div className="flex-1 min-w-0">
            <Title order={2}>{title || "Links"}</Title>
          </div>
          <div className="mt-4 flex md:mt-0 md:ml-4">
            <CreateANewLinkButton />
          </div>
        </div>
      </Box>
      <WrappedLinksList />

      {children}
    </DashboardLayout>
  )
}

export default DashboardLinksLayout
