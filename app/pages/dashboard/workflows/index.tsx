import { Switch } from "@headlessui/react"
import DashboardCustomizeLayout from "app/core/layouts/DashboardCustomizeLayout"
import classNames from "app/core/utils/classnames"
import { useCurrentOrganization } from "app/organizations/hooks/useCurrentOrganization"
import { BlitzPage, Image } from "blitz"

import {
  Popover,
  Button,
  Group,
  TextInput,
  Avatar,
  Text,
  ActionIcon,
  useMantineTheme,
  Anchor,
  ColorInput,
  Select,
} from "@mantine/core"
import { useForm, useMediaQuery } from "@mantine/hooks"
import { Pencil2Icon } from "@modulz/radix-icons"
import { useState } from "react"
import { useNotifications } from "@mantine/notifications"
import IntegrationsPage from "app/organizations/components/IntegrationsPage"

function Apps() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <main>
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
        {/* Page header */}
        <div className="mb-8">
          {/* Title */}
          <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">Account Settings ✨</h1>
        </div>

        {/* Content */}
        <div className="bg-white shadow-lg rounded-sm mb-8">
          <div className="flex flex-col md:flex-row md:-mr-px">
            <IntegrationsPage />
          </div>
        </div>
      </div>
    </main>
  )
}

const DashboardWorkflowsPage: BlitzPage = () => {
  const [automaticTimezoneEnabled, setAutomaticTimezoneEnabled] = useState(true)
  const [autoUpdateApplicantDataEnabled, setAutoUpdateApplicantDataEnabled] = useState(false)
  const organization = useCurrentOrganization()
  return <IntegrationsPage />
}

DashboardWorkflowsPage.getLayout = (page) => (
  <DashboardCustomizeLayout>{page}</DashboardCustomizeLayout>
)

export default DashboardWorkflowsPage
