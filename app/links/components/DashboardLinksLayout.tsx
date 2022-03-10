import DashboardLayout from "app/core/layouts/DashboardLayout"
import { BlitzLayout, Link, Router, Routes } from "blitz"
import { useEffect, useState } from "react"
import { Popover, Text, Button, Image, Modal, Divider, Box, Title, Group } from "@mantine/core"

import classNames from "app/core/utils/classnames"
import linkTypes from "../link-types"
import WrappedLinksList from "./DashboardLinksPage"

function CreateANewLinkButton() {
  const [opened, setOpened] = useState(false)
  useEffect(() => {
    const handleRouteChange = () => {
      setOpened(false)
      // console.log("App is changing to: ", url)
    }

    Router.events.on("routeChangeStart", handleRouteChange)
    return () => {
      Router.events.off("routeChangeStart", handleRouteChange)
    }
  }, [])
  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        closeOnClickOutside
        closeOnEscape
        title="Create a new link..."
      >
        <ul role="list" className="border-gray-200 py-6 grid grid-cols-1 gap-6 sm:grid-cols-1">
          {linkTypes.map((item, itemIdx) => (
            <li key={itemIdx} className="flow-root">
              <div className="relative -m-2 p-2 flex items-center space-x-4 rounded-xl hover:bg-gray-50 focus-within:ring-2 focus-within:ring-indigo-500">
                <div
                  className={classNames(
                    item.background,
                    "flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-lg"
                  )}
                >
                  {/* <item.icon className="h-6 w-6 text-white" aria-hidden="true" /> */}
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    <Link href={Routes.DashboardLinksNewPage({ linkType: item.type })} passHref>
                      <a href="#" className="focus:outline-none">
                        <span className="absolute inset-0" aria-hidden="true" />
                        {item.name}
                        <span aria-hidden="true"> &rarr;</span>
                      </a>
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Create a new link</Button>
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
