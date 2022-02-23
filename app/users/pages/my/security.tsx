import { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useParam, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getCurrentOrganization from "app/organizations/queries/getCurrentOrganization"
import DashboardLayout from "app/core/layouts/DashboardLayout"
import { UserProfile } from "@clerk/clerk-react"
import AuthProvider from "app/auth/components/AuthProvider"

const MySettingsSecurityPage: BlitzPage = () => {
  return (
    <div>

      <Head>
        <title>Space </title>
      </Head>


      <AuthProvider>
        <UserProfile path="/my/security" hideNavigation={true} only={"security"} /></AuthProvider>
    </div>
  )
}

MySettingsSecurityPage.authenticate = true
MySettingsSecurityPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>

export default MySettingsSecurityPage
