import { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useParam, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getCurrentOrganization from "app/organizations/queries/getCurrentOrganization"
import DashboardCreatorSettingsLayout from "app/core/layouts/DashboardCustomizeLayout"

export const OnboardingWhatsNext = () => {
  const router = useRouter()
  const [organization] = useQuery(getCurrentOrganization, {})

  return (
    <>
      <Head>
        <title>Space {organization.id}</title>
      </Head>

      <div className="max-w-md mx-auto">
        <h1 className="text-3xl text-slate-800 font-bold mb-6">Whatn&apos;s next? ✨</h1>
        {/* Form */}
        <form>
          <div className="space-y-3 mb-8">
            <label className="relative block cursor-pointer">
              <input type="radio" name="radio-buttons" className="peer sr-only" defaultChecked />
              <div className="flex items-center bg-white text-sm font-medium text-slate-800 p-4 rounded border border-slate-200 hover:border-slate-300 shadow-sm duration-150 ease-in-out">
                <svg className="w-6 h-6 shrink-0 fill-current mr-4" viewBox="0 0 24 24">
                  <path
                    className="text-indigo-500"
                    d="m12 10.856 9-5-8.514-4.73a1 1 0 0 0-.972 0L3 5.856l9 5Z"
                  />
                  <path
                    className="text-indigo-300"
                    d="m11 12.588-9-5V18a1 1 0 0 0 .514.874L11 23.588v-11Z"
                  />
                  <path
                    className="text-indigo-200"
                    d="M13 12.588v11l8.486-4.714A1 1 0 0 0 22 18V7.589l-9 4.999Z"
                  />
                </svg>
                <span>Create a link</span>
              </div>
              <div
                className="absolute inset-0 border-2 border-transparent peer-checked:border-indigo-400 rounded pointer-events-none"
                aria-hidden="true"
              ></div>
            </label>
            <label className="relative block cursor-pointer">
              <input type="radio" name="radio-buttons" className="peer sr-only" />
              <div className="flex items-center bg-white text-sm font-medium text-slate-800 p-4 rounded border border-slate-200 hover:border-slate-300 shadow-sm duration-150 ease-in-out">
                <svg className="w-6 h-6 shrink-0 fill-current mr-4" viewBox="0 0 24 24">
                  <path
                    className="text-indigo-500"
                    d="m12 10.856 9-5-8.514-4.73a1 1 0 0 0-.972 0L3 5.856l9 5Z"
                  />
                  <path
                    className="text-indigo-300"
                    d="m11 12.588-9-5V18a1 1 0 0 0 .514.874L11 23.588v-11Z"
                  />
                </svg>
                <span>Verify identity & start selling</span>
              </div>
              <div
                className="absolute inset-0 border-2 border-transparent peer-checked:border-indigo-400 rounded pointer-events-none"
                aria-hidden="true"
              ></div>
            </label>
            <label className="relative block cursor-pointer">
              <input type="radio" name="radio-buttons" className="peer sr-only" />
              <div className="flex items-center bg-white text-sm font-medium text-slate-800 p-4 rounded border border-slate-200 hover:border-slate-300 shadow-sm duration-150 ease-in-out">
                <svg className="w-6 h-6 shrink-0 fill-current mr-4" viewBox="0 0 24 24">
                  <path
                    className="text-indigo-500"
                    d="m12 10.856 9-5-8.514-4.73a1 1 0 0 0-.972 0L3 5.856l9 5Z"
                  />
                </svg>
                <span>Connect your social media accounts</span>
              </div>
              <div
                className="absolute inset-0 border-2 border-transparent peer-checked:border-indigo-400 rounded pointer-events-none"
                aria-hidden="true"
              ></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <a className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-auto">
              Next Step -&gt;
            </a>
          </div>
        </form>
      </div>
    </>
  )
}

const DashboardAnalyticsPage: BlitzPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OnboardingWhatsNext />
      </Suspense>
    </div>
  )
}

DashboardAnalyticsPage.authenticate = true
DashboardAnalyticsPage.getLayout = (page) => (
  <DashboardCreatorSettingsLayout>{page}</DashboardCreatorSettingsLayout>
)

export default DashboardAnalyticsPage
