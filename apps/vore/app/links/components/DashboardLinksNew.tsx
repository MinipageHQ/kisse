import { Link, useRouter, useMutation, BlitzPage, Routes, useQuery } from "blitz"
import Layout from "app/links/components/DashboardLinksLayout"
import createLink from "app/links/mutations/createLink"
import { LinkForm, FORM_ERROR } from "app/links/components/LinkForm"

import { CreateLinkInput } from "app/links/validations"
import { Modal } from "@mantine/core"
import classNames from "app/core/utils/classnames"
import linkTypes from "../link-types"

const DashboardLinksNew = ({ linkType }: { linkType: string }) => {
  const router = useRouter()
  const [createLinkMutation] = useMutation(createLink)

  if (linkType === null) {
    return (
      <ul role="list" className="mt-6 border-t border-b border-gray-200 py-6 grid grid-cols-1 gap-6 sm:grid-cols-1">
        {linkTypes.map((item, itemIdx) => (
          <li key={itemIdx} className="flow-root">
            <div className="relative -m-2 p-2 flex items-center space-x-4 rounded-xl hover:bg-gray-50 focus-within:ring-2 focus-within:ring-indigo-500">
              <div
                className={classNames(
                  item.background,
                  'flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-lg'
                )}
              >
                {/* <item.icon className="h-6 w-6 text-white" aria-hidden="true" /> */}
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">
                  <Link href={Routes.LinksPage({ linkQueries: ['new', item.type] })} passHref>
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
    )

  }

  return (
    <LinkForm
      submitText="Create Link"
      schema={CreateLinkInput}
      submitProps={{ className: "ml-3 inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500" }}
      initialValues={{}}
      onSubmit={async (values) => {
        try {
          console.log("links form new values", values)
          const link = await createLinkMutation(values)
          router.push(Routes.LinksPage({ linkQueries: [link.id] }))
        } catch (error: any) {
          console.error(error)
          return {
            [FORM_ERROR]: error.toString(),
          }
        }
      }}
    />
  )
}

export default DashboardLinksNew
