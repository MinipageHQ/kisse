import classNames from "app/core/utils/classnames";
import { Link, Routes } from "blitz";
import link from "next/link";
import linkTypes from "../link-types";



export default function DashboardLinksEmpty() {
  return (
    <main className="max-w-lg mx-auto pt-10 pb-12 px-4 lg:pb-16">
      <h2 className="text-lg font-medium text-gray-900">Links</h2>
      <p className="mt-1 text-sm text-gray-500">
        You haven’t created a link yet. Get started by selecting a type of link
      </p>
      <ul role="list" className="mt-6 border-t border-b border-gray-200 py-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {linkTypes.map((item, itemIdx) => (
          <li key={itemIdx} className="flow-root">
            <div className="relative -m-2 p-2 flex items-center space-x-4 rounded-xl hover:bg-gray-50 focus-within:ring-2 focus-within:ring-indigo-500">
              <div
                className={classNames(
                  item.background,
                  'flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-lg'
                )}
              >
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">
                  <Link href={Routes.NewLinkPage({ type: item.type })}>
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
    </main>
  )
}
