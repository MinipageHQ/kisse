import _ from "lodash"
import { Image, Link, BlitzPage, useMutation, Routes, BlitzLayout } from "blitz"

import { Logo } from "app/core/components/Logo"
import { UserInfoWrapped } from "app/auth/components/UserBox"

import { Fragment } from "react"
import { Disclosure, Menu, Transition } from "@headlessui/react"
import { SearchIcon } from "@heroicons/react/solid"
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline"
import classNames from "../utils/classnames"
import AuthProvider from "app/auth/components/AuthProvider"

import { useState } from "react"
import { AppShell, Burger, Header, MediaQuery, Navbar, Text, useMantineTheme } from "@mantine/core"

const AppLayout: BlitzLayout<{ showUserBox?: boolean; title?: string }> = ({
  title,
  showUserBox = true,
  children,
}) => {
  const [opened, setOpened] = useState(false)
  const theme = useMantineTheme()

  return (
    <AppShell
      // navbarOffsetBreakpoint controls when navbar should no longer be offset with padding-left
      navbarOffsetBreakpoint="sm"
      // fixed prop on AppShell will be automatically added to Header and Navbar
      fixed
      header={
        <Header height={70} p="md">
          {/* Handle other responsive styles with MediaQuery component or createStyles function */}
          <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
            <Text>Saltana</Text>
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  )
}

AppLayout.authenticate = true
export default AppLayout
