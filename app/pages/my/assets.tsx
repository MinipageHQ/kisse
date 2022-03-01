import { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useParam, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getCurrentOrganization from "app/organizations/queries/getCurrentOrganization"
import DashboardLayout from "app/core/layouts/DashboardLayout"
import { UserProfile } from "@clerk/clerk-react"
import AuthProvider from "app/auth/components/AuthProvider"

const MyAssetsPAge: BlitzPage = () => {
  return (
    <div>
      <Head>
        <title>Space </title>
      </Head>
      assets
    </div>
  )
}

MyAssetsPAge.authenticate = true
MyAssetsPAge.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>

export default MyAssetsPAge
