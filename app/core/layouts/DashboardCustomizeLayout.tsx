import { Switch } from "@headlessui/react"
import { Container } from "@mantine/core"
import { Head, BlitzLayout, Image, Link, useRouter } from "blitz"
import { Suspense, useState } from "react"
import classNames from "../utils/classnames"
import DashboardLayout from "./DashboardLayout"

const tabs = [
  { name: "Profile", href: "/dashboard/customize", current: true },
  { name: "Notifications", href: "/dashboard/notifications", current: false },
  { name: "Custom Domains", href: "/dashboard/domains", current: false },
  { name: "Plans & Billing", href: "/dashboard/billing", current: false },
]
import { Tabs } from '@mantine/core';

function CustomizeTabs() {
  const router = useRouter()

  const tabIndex = tabs.findIndex(({ href }) => href === router.asPath)
  const onChange = (active: number, tabKey: string) => {
    router.push(tabKey)
  };

  return (
    <Tabs active={tabIndex} onTabChange={onChange}>
      {tabs.map(({ name, href, current }) => (
        <Tabs.Tab label={name} tabKey={href} key={href}>
          {name}
        </Tabs.Tab>
      ))}
    </Tabs>
  );
}
const DashboardCustomizeLayout: BlitzLayout<{ title?: string }> = ({ title, children }) => {
  const router = useRouter()

  const tabIndex = tabs.findIndex(({ href }) => href === router.asPath)
  const onChange = (active: number, tabKey: string) => {
    router.push(tabKey)
  };

  return (
    <DashboardLayout>

      <Tabs active={tabIndex} onTabChange={onChange}>
        {tabs.map(({ name, href, current }) => (
          <Tabs.Tab label={name} tabKey={href} key={href}>
            <Suspense fallback="Loading Settings LAyout">
              <Container padding={10}>{children}</Container></Suspense>
          </Tabs.Tab>
        ))}
      </Tabs>
    </DashboardLayout>
  )
}

export default DashboardCustomizeLayout
