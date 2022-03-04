import DashboardLayout from "app/core/layouts/DashboardLayout"
import { BlitzLayout, Link, Routes } from "blitz"
import { useState } from "react"
import { Popover, Text, Button, Image, Modal, Divider, Box, Title } from "@mantine/core"
import DashboardLinksEmpty from "./DashboardLinksEmpty"
import classNames from "app/core/utils/classnames"
import linkTypes from "../link-types"

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
            <Link href={Routes.LinksPage({ linkQueries: ["new"] })} passHref>
              <a className="order-0 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3">
                Create a new link
              </a>
            </Link>
          </div>
        </div>
      </Box>
      {children}
    </DashboardLayout>
  )
}

export default DashboardLinksLayout
