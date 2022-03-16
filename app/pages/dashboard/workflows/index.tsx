import { Switch } from "@headlessui/react"
import DashboardLayout from "app/core/layouts/DashboardLayout"
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
/* This example requires Tailwind CSS v2.0+ */
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
                  Back End Developer
                </a>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div className="mt-2 md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Workflows & Integrations
          </h2>
        </div>
      </div>
    </div>
  )
}

const DashboardWorkflowsPage: BlitzPage = () => {
  const [automaticTimezoneEnabled, setAutomaticTimezoneEnabled] = useState(true)
  const [autoUpdateApplicantDataEnabled, setAutoUpdateApplicantDataEnabled] = useState(false)
  const organization = useCurrentOrganization()
  return (
    <>
      <Header /> <IntegrationsPage />
    </>
  )
}

DashboardWorkflowsPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>

export default DashboardWorkflowsPage
