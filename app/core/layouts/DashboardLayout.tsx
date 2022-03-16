import React, { Fragment, Suspense, useEffect, useState } from "react"
import { Dialog, Menu, Transition, Popover, Listbox } from "@headlessui/react"
import {
  ClockIcon,
  HomeIcon,
  MenuAlt1Icon,
  ViewListIcon,
  XIcon,
  BellIcon,
  MenuIcon,
  TrendingUpIcon,
  LinkIcon,
  CashIcon,
  ShareIcon,
  SwitchHorizontalIcon,
  AdjustmentsIcon,
} from "@heroicons/react/outline"
import {
  ChevronRightIcon,
  DotsVerticalIcon,
  SearchIcon,
  SelectorIcon,
} from "@heroicons/react/solid"

import { Logo } from "app/core/components/Logo"
import { BlitzLayout, useRouter, Image, Link, Head, Router } from "blitz"
import classNames from "../utils/classnames"
import ShowForRoleWrapped from "app/auth/components/ShowForRole"
import RedirectToOnboarding from "app/organizations/components/RedirectToOnboarding"
// import Avatar from 'components/Avatar'
import {
  AppShell,
  Burger,
  Header,
  MediaQuery,
  Navbar,
  ScrollArea,
  Text,
  useMantineTheme,
  Avatar,
  LoadingOverlay,
} from "@mantine/core"

interface UserProps {
  name: string
  email: string
  className?: string
}

function User({ name, email, className }: UserProps) {
  return (
    <div className={className} style={{ display: "flex" }}>
      <Avatar style={{ marginRight: 15 }} color="blue">
        {name
          .split(" ")
          .map((part) => part.charAt(0).toUpperCase())
          .slice(0, 2)
          .join("")}
      </Avatar>

      <div>
        <Text>{name}</Text>
        <Text size="xs" color="gray">
          {email}
        </Text>
      </div>
    </div>
  )
}

const creatorNavigation = [
  {
    name: "Links",
    href: "/dashboard/links",
    current: true,
    icon: LinkIcon,
  },
  {
    name: "Assets",
    href: "/dashboard/assets",
    current: false,
    icon: CashIcon,
  },

  {
    name: "Analytics",
    href: "/dashboard/analytics",
    current: false,
    icon: TrendingUpIcon,
  },
  {
    name: "Workflows & Integrations",
    href: "/dashboard/workflows",
    current: false,
    icon: SwitchHorizontalIcon,
  },
  {
    name: "Customize",
    href: "/dashboard/customize",
    current: false,
    icon: AdjustmentsIcon,
  },
]

const userNavigation = [
  { name: "Purchased Assets", href: "/my/assets", current: false },
  { name: "Payments", href: "/my/payments", current: false },
  { name: "Security", href: "/my/security", current: false },
  { name: "Settings", href: "/my/settings", current: false },
  { name: "Help", href: "/help", current: false },
  // { name: 'Logout', href: '/logout' }
]

const DashboardLayout: BlitzLayout<{
  subHeader?: React.ReactNode
  container?: boolean
  title?: string
}> = ({ subHeader, title, children, container }) => {
  const router = useRouter()
  const [loadingOverlayVisible, setLoadingOverlayVisible] = useState(false)

  const isCurrentRoute = (route: string) => router.pathname.startsWith(route)
  const [opened, setOpened] = useState(false)
  const theme = useMantineTheme()
  useEffect(() => {
    const handleRouteChangeStart = () => setLoadingOverlayVisible(true)
    const handleRouteChangeStop = () => setLoadingOverlayVisible(false)

    Router.events.on("routeChangeStart", handleRouteChangeStart)
    Router.events.on("routeChangeComplete", handleRouteChangeStop)
    return () => {
      Router.events.off("routeChangeStart", handleRouteChangeStart)
      Router.events.off("routeChangeComplete", handleRouteChangeStop)
    }
  }, [])
  return (
    <>
      <Head>
        <title>{title || "Saltana Dashboard"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <ShowForRoleWrapped role="CREATOR">
        <RedirectToOnboarding />
      </ShowForRoleWrapped> */}

      <AppShell
        padding={0}
        // navbarOffsetBreakpoint controls when navbar should no longer be offset with padding-left
        navbarOffsetBreakpoint="sm"
        // fixed prop on AppShell will be automatically added to Header and Navbar
        fixed
        navbar={
          <Navbar
            p="md"
            // Breakpoint at which navbar will be hidden if hidden prop is true
            hiddenBreakpoint="sm"
            // Hides navbar when viewport size is less than value specified in hiddenBreakpoint
            hidden={!opened}
            // when viewport size is less than theme.breakpoints.sm navbar width is 100%
            // viewport size > theme.breakpoints.sm – width is 300px
            // viewport size > theme.breakpoints.lg – width is 400px
            width={{ sm: 300, lg: 400 }}
          >
            <Navbar.Section
              grow
              component={ScrollArea}
              ml={-10}
              mr={-10}
              sx={{ paddingLeft: 10, paddingRight: 10 }}
            >
              {/* Creator spaces dropdown */}
              <ShowForRoleWrapped>
                {({ roles }) =>
                  roles?.includes("CREATOR") ? (
                    <div className="px-3 relative inline-block text-left">
                      <a href="https://saltana.com/" target="_blank" rel="noreferrer">
                        <div className="group w-full rounded-md px-3.5 py-2 text-sm text-left font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-purple-500">
                          <span className="flex w-full justify-between items-center">
                            <span className="flex min-w-0 items-center justify-between space-x-3">
                              <span className="flex-1 flex flex-col min-w-0">
                                <span className="text-gray-900 text-sm font-medium ">
                                  Go to my space -{">"}
                                </span>
                              </span>
                            </span>
                          </span>
                        </div>
                      </a>
                    </div>
                  ) : (
                    <div className="px-3 relative inline-block text-left">
                      <a href="https://saltana.com/request-invite" target="_blank" rel="noreferrer">
                        <div className="group w-full bg-yellow-200 rounded-md px-3.5 py-2 text-sm text-left font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-purple-500">
                          <span className="flex w-full justify-between items-center">
                            <span className="flex min-w-0 items-center justify-between space-x-3">
                              <span className="flex-1 flex flex-col min-w-0">
                                <span className="text-gray-900 text-sm font-medium ">
                                  Apply for a creator account
                                </span>
                              </span>
                            </span>
                          </span>
                        </div>
                      </a>
                    </div>
                  )
                }
              </ShowForRoleWrapped>
              {/* Sidebar Search */}
              <ShowForRoleWrapped role="CREATOR">
                <div className="px-3 mt-5">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div
                      className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                      aria-hidden="true"
                    >
                      <SearchIcon className="mr-3 h-4 w-4 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                      type="text"
                      name="search"
                      id="search"
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-9 sm:text-sm border-gray-300 rounded-md"
                      placeholder="Search"
                    />
                  </div>
                </div>
              </ShowForRoleWrapped>
              {/* Navigation */}
              <nav className="px-3 mt-6">
                <ShowForRoleWrapped role="CREATOR">
                  <div className="space-y-1">
                    {creatorNavigation.map((item) => (
                      <Link key={item.name} href={item.href} passHref>
                        <a
                          className={classNames(
                            isCurrentRoute(item.href)
                              ? "bg-gray-200 text-gray-900"
                              : "text-gray-700 hover:text-gray-900 hover:bg-gray-50",
                            "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                          )}
                          aria-current={isCurrentRoute(item.href) ? "page" : undefined}
                        >
                          <item.icon
                            className={classNames(
                              isCurrentRoute(item.href)
                                ? "text-gray-500"
                                : "text-gray-400 group-hover:text-gray-500",
                              "mr-3 flex-shrink-0 h-6 w-6"
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </ShowForRoleWrapped>

                <div className="mt-8">
                  {/* Secondary navigation */}
                  <h3
                    className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider"
                    id="desktop-myaccount-headline"
                  >
                    My Account
                  </h3>
                  <div
                    className="mt-1 space-y-1"
                    role="group"
                    aria-labelledby="desktop-teams-headline"
                  >
                    {userNavigation.map((item) => (
                      <Link href={item.href} key={item.href} passHref>
                        <a
                          key={item.name}
                          className={classNames(
                            isCurrentRoute(item.href)
                              ? "bg-gray-200 text-gray-900"
                              : "text-gray-700  hover:text-gray-900 hover:bg-gray-50",
                            "group flex items-center px-3 py-2 text-sm font-medium  rounded-md "
                          )}
                          aria-current={isCurrentRoute(item.href) ? "page" : undefined}
                        >
                          <span className="truncate">{item.name}</span>
                        </a>
                      </Link>
                    ))}
                    <a
                      onClick={() => console.log("signout")}
                      href="#"
                      className="group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                    >
                      <span className="truncate">Logout</span>
                    </a>
                  </div>
                </div>
              </nav>
            </Navbar.Section>

            <Navbar.Section>
              <User name="sdfsd" email="sdfds" />
            </Navbar.Section>
          </Navbar>
        }
        header={
          <Header height={70} p="md">
            {/* Handle other responsive styles with MediaQuery component or createStyles function */}
            <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
              <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>

              <Logo h="8" fill="#00000" />
            </div>
          </Header>
        }
      >
        <Suspense fallback={<div>Loading...</div>}>
          <LoadingOverlay visible={loadingOverlayVisible} />
          {children}
        </Suspense>
      </AppShell>
    </>
  )
}

export default DashboardLayout
