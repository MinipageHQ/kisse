import { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useParam, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getCurrentOrganization from "app/organizations/queries/getCurrentOrganization"
import DashboardLayout from "app/core/layouts/DashboardLayout"
import AuthProvider from "app/auth/components/AuthProvider"

const MyAssetsPage: BlitzPage = () => {
  return (
    <div>
      <Head>
        <title>Space </title>
      </Head>
      assets
    </div>
  )
}

MyAssetsPage.authenticate = true
MyAssetsPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>

export default MyAssetsPage
