import { Suspense } from "react"
import { Head, Link, usePaginatedQuery, useRouter, Routes, useQuery } from "blitz"
import getLinks from "app/links/queries/getLinks"
import classNames from "app/core/utils/classnames"
import { ChevronRightIcon } from "@heroicons/react/outline"
import DashboardLinksEmpty from "app/links/components/DashboardLinksEmpty"
import { Badge, Group, Menu, Divider, Text, ActionIcon, Tooltip } from "@mantine/core"
import getCurrentOrganization from "app/organizations/queries/getCurrentOrganization"

const ITEMS_PER_PAGE = 100
import {
  GearIcon,
  ChatBubbleIcon,
  ImageIcon,
  MagnifyingGlassIcon,
  TrashIcon,
  ClipboardCopyIcon,
  PinRightIcon,
} from "@radix-ui/react-icons"
import DashboardLinkTitle from "./DashboardLinkTitle"

export const LinksList = () => {
  const router = useRouter()

  const currentOrganization = useQuery(getCurrentOrganization, {})
  const page = Number(router.query.page) || 0
  const [{ links, hasMore }] = usePaginatedQuery(getLinks, {
    orderBy: { id: "asc" },
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
  })

  const goToPreviousPage = () => router.push({ query: { page: page - 1 } })
  const goToNextPage = () => router.push({ query: { page: page + 1 } })

  const showPagination = page !== 0 || hasMore
  if (links?.length === 0) {
    return <DashboardLinksEmpty />
  }

  return (
    <div>
      {/* <pre>{JSON.stringify(currentOrganization)}</pre> */}
      {/* Projects list (only on smallest breakpoint) */}
      <div className="mt-10 sm:hidden">
        <div className="px-4 sm:px-6">
          <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">Links</h2>
        </div>
        <ul role="list" className="mt-3 border-t border-gray-200 divide-y divide-gray-100">
          {links?.map((link) => (
            <li key={link.id}>
              <Link href={Routes.LinksPage({ linkId: link.id })} passHref>
                <a className="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6">
                  <span className="flex items-center truncate space-x-3">
                    <span
                      className={classNames("w-2.5 h-2.5 flex-shrink-0 rounded-full")}
                      aria-hidden="true"
                    />
                    <span className="font-medium truncate text-sm leading-6">
                      {link.target}{" "}
                      <span className="truncate font-normal text-gray-500">{link.type}</span>
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
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" />

                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <span className="lg:pl-2">Link</span>
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" />
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {links.map((link) => (
                <tr key={link.id}>
                  <td className="px-6 py-3 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center">
                      <div className="flex flex-shrink-0 space-x-1">
                        {/* <ContextMenu /> */}
                        <Tooltip label="Copy">
                          <ActionIcon color="dark">
                            <ClipboardCopyIcon />
                          </ActionIcon>
                        </Tooltip>
                        <Tooltip label="Visit">
                          <ActionIcon color="dark">
                            <ClipboardCopyIcon />
                          </ActionIcon>
                        </Tooltip>
                        <Badge>{link.type}</Badge>
                        {/* <Group position="center" direction="column" grow>
                          <Link href={Routes.LinksPage({ linkQueries: [link.id] })} passHref>

                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                              Edit
                            </a>
                          </Link>
                          <Link href={Routes.LinksPage({ linkQueries: [link.id] })} passHref>

                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                              Edit
                            </a>
                          </Link>
                        </Group> */}
                      </div>
                    </div>
                  </td>
                  <td className=" py-3 max-w-0 w-full whitespace-nowrap text-sm font-medium text-gray-900">
                    <div className="flex items-center space-x-3 lg:pl-2">
                      <div
                        className={classNames("flex-shrink-0 w-2.5 h-2.5 rounded-full")}
                        aria-hidden="true"
                      />
                      <Link href={Routes.DashboardLinkPage({ linkId: link.id })} passHref>
                        <a href="#" className="truncate hover:text-gray-600">
                          <DashboardLinkTitle link={link} />
                          {/* <span>
                          {link.slug}
                          {link.target} <span className="text-gray-500 font-normal">in {link.type}</span>
                        </span> */}
                        </a>
                      </Link>
                    </div>
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <div className="flex flex-shrink-0 space-x-1">
                        {/* <ContextMenu /> */}
                        <Tooltip label="Copy">
                          <ActionIcon color="dark">
                            <ClipboardCopyIcon />
                          </ActionIcon>
                        </Tooltip>
                        <Tooltip label="Visit">
                          <ActionIcon color="dark">
                            <ClipboardCopyIcon />
                          </ActionIcon>
                        </Tooltip>
                        <Tooltip label="Edit">
                          <ActionIcon color="dark">
                            <ClipboardCopyIcon />
                          </ActionIcon>
                        </Tooltip>
                        {/* <Group position="center" direction="column" grow>
                          <Link href={Routes.LinksPage({ linkQueries: [link.id] })} passHref>

                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                              Edit
                            </a>
                          </Link>
                          <Link href={Routes.LinksPage({ linkQueries: [link.id] })} passHref>

                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                              Edit
                            </a>
                          </Link>
                        </Group> */}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showPagination && (
        <>
          <button disabled={page === 0} onClick={goToPreviousPage}>
            Previous
          </button>
          <button disabled={!hasMore} onClick={goToNextPage}>
            Next
          </button>
        </>
      )}
    </div>
  )
}

const WrappedLinksList = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LinksList />
    </Suspense>
  )
}

export default WrappedLinksList
