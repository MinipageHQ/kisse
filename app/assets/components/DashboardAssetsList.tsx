import { Suspense } from "react"
import { Head, Link, usePaginatedQuery, useRouter, Routes } from "blitz"
import classNames from "app/core/utils/classnames"
import { ChevronRightIcon } from "@heroicons/react/outline"
import DashboardLinksEmpty from "app/links/components/DashboardLinksEmpty"
import getAssets from "../queries/getAssets"
import DashboardAssetsListEmpty from "./DashboardAssetsListEmpty"
const ITEMS_PER_PAGE = 100

export const AssetsList = () => {
  const router = useRouter()
  const page = Number(router.query.page) || 0
  const [{ assets, hasMore }] = usePaginatedQuery(getAssets, {
    orderBy: { id: "asc" },
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
  })

  const goToPreviousPage = () => router.push({ query: { page: page - 1 } })
  const goToNextPage = () => router.push({ query: { page: page + 1 } })

  if (assets?.length === 0) {
    return <DashboardAssetsListEmpty />
  }
  return (
    <div>
      <button disabled={page === 0} onClick={goToPreviousPage}>
        Previous
      </button>
      <button disabled={!hasMore} onClick={goToNextPage}>
        Next
      </button>

      {/* Projects list (only on smallest breakpoint) */}
      <div className="mt-10 sm:hidden">
        <div className="px-4 sm:px-6">
          <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">Links</h2>
        </div>
        <ul role="list" className="mt-3 border-t border-gray-200 divide-y divide-gray-100">
          {assets.map((asset) => (
            <li key={asset.id}>
              <Link href={Routes.DashboardAssetsEditPage({ assetId: asset.id })} passHref>
                <a className="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6">
                  <span className="flex items-center truncate space-x-3">
                    <span
                      className={classNames("w-2.5 h-2.5 flex-shrink-0 rounded-full")}
                      aria-hidden="true"
                    />
                    <span className="font-medium truncate text-sm leading-6">
                      {asset.name}{" "}
                      <span className="truncate font-normal text-gray-500">
                        {asset.assetTypeId}
                      </span>
                    </span>
                  </span>
                  <ChevronRightIcon
                    className="ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Projects table (small breakpoint and up) */}
      <div className="hidden mt-8 sm:block">
        <div className="align-middle inline-block min-w-full border-b border-gray-200">
          <table className="min-w-full">
            <thead>
              <tr className="border-t border-gray-200">
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <span className="lg:pl-2">Link</span>
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Members
                </th>
                <th className="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last updated
                </th>
                <th className="pr-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" />
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {assets.map((asset) => (
                <tr key={asset.id}>
                  <td className="px-6 py-3 max-w-0 w-full whitespace-nowrap text-sm font-medium text-gray-900">
                    <div className="flex items-center space-x-3 lg:pl-2">
                      <div
                        className={classNames("flex-shrink-0 w-2.5 h-2.5 rounded-full")}
                        aria-hidden="true"
                      />
                      <a href="#" className="truncate hover:text-gray-600">
                        <span>
                          {asset.name}
                          {asset.description}{" "}
                          <span className="text-gray-500 font-normal">in {asset.assetTypeId}</span>
                        </span>
                      </a>
                    </div>
                  </td>
                  <td className="px-6 py-3 text-sm text-gray-500 font-medium">
                    <div className="flex items-center space-x-2">
                      <div className="flex flex-shrink-0 -space-x-1">
                        {/* {project.members.map((member) => (
                          <img
                            key={member.handle}
                            className="max-w-none h-6 w-6 rounded-full ring-2 ring-white"
                            src={member.imageUrl}
                            alt={member.name}
                          />
                        ))} */}
                      </div>
                      {/* {project.totalMembers > project.members.length ? (
                        <span className="flex-shrink-0 text-xs leading-5 font-medium">
                          +{project.totalMembers - project.members.length}
                        </span>
                      ) : null} */}
                    </div>
                  </td>
                  <td className="hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-right">
                    {/* {project.lastUpdated} */}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap text-right text-sm font-medium">
                    <Link href={Routes.DashboardAssetsEditPage({ assetId: asset.id })} passHref>
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit
                      </a>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

const DashboardAssetsList = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AssetsList />
    </Suspense>
  )
}

export default DashboardAssetsList
