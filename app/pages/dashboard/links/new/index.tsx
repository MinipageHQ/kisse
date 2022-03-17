import { Head, BlitzPage, Link, Routes } from "blitz"
import DashboardLinksLayout from "app/links/components/DashboardLinksLayout"
import { useRouter } from "blitz"
import { Modal, Skeleton } from "@mantine/core"
import linkTypes from "app/links/link-types"
import classNames from "app/core/utils/classnames"

const DashboardLinksNewIndexPage: BlitzPage = (props) => {
  const {
    query: { linkType },
    back,
    push,
  } = useRouter()

  return (
    <>
      <Head>
        <title>Links</title>
      </Head>
      <Modal
        opened
        onClose={() => push("/dashboard/links")}
        title={"Pick the type of link you want to create..."}
        closeOnClickOutside
        closeOnEscape
      >
        <ul role="list" className="border-gray-200 py-6 grid grid-cols-1 gap-6 sm:grid-cols-1">
          {linkTypes.map((item, itemIdx) => (
            <li key={itemIdx} className="flow-root">
              <div className="relative -m-2 p-2 flex items-center space-x-4 rounded-xl hover:bg-gray-50 focus-within:ring-2 focus-within:ring-indigo-500">
                <div
                  className={classNames(
                    item.background,
                    "flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-lg"
                  )}
                >
                  {/* <item.icon className="h-6 w-6 text-white" aria-hidden="true" /> */}
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    <Link
                      href={Routes.DashboardLinksNewPage({
                        linkType: item.type,
                        provider: item.provider,
                      })}
                      passHref
                    >
                      <a href="#" className="focus:outline-none">
                        <span className="absolute inset-0" aria-hidden="true" />
                        {item.name}
                        <span aria-hidden="true"> &rarr;</span>
                      </a>
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Modal>
    </>
  )
}

DashboardLinksNewIndexPage.authenticate = true
DashboardLinksNewIndexPage.getLayout = (page) => <DashboardLinksLayout>{page}</DashboardLinksLayout>

export default DashboardLinksNewIndexPage
