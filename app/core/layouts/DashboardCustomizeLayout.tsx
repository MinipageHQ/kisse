import { Switch } from "@headlessui/react"
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

const DashboardCustomizeLayout: BlitzLayout<{ title?: string }> = ({ title, children }) => {
  const router = useRouter()

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto flex flex-col md:px-8 xl:px-0">
        <main className="flex-1">
          <div className="relative max-w-4xl mx-auto md:px-8 xl:px-0">
            <div className="pt-10 pb-16">
              <div className="px-4 sm:px-6 md:px-0">
                <h1 className="text-3xl font-extrabold text-gray-900">Settings</h1>
              </div>
              <div className="px-4 sm:px-6 md:px-0">
                <div className="py-6">
                  {/* Tabs */}
                  <div className="lg:hidden">
                    <label htmlFor="selected-tab" className="sr-only">
                      Select a tab
                    </label>
                    <select
                      id="selected-tab"
                      name="selected-tab"
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md"
                      defaultValue={tabs.find((tab) => tab.current).name}
                    >
                      {tabs.map((tab) => (
                        <option key={tab.name}>{tab.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="hidden lg:block">
                    <div className="border-b border-gray-200">
                      <nav className="-mb-px flex space-x-8">
                        {tabs.map((tab) => (
                          <Link key={tab.name} href={tab.href} passHref>
                            <a
                              className={classNames(
                                router.pathname.startsWith(tab.href)
                                  ? "border-purple-500 text-purple-600"
                                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                                "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                              )}
                            >
                              {tab.name}
                            </a>
                          </Link>
                        ))}
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 divide-y divide-gray-200 max-w-2xl">
            <Suspense fallback="Loading Settings LAyout">{children}</Suspense>
          </div>
        </main>
      </div>
    </DashboardLayout>
  )
}

export default DashboardCustomizeLayout
