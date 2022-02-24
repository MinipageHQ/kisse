import AppLayout from "app/core/layouts/AppLayout"
import { Head, ErrorComponent, BlitzPage } from "blitz"

// ------------------------------------------------------
// This page is rendered if a route match is not found
// ------------------------------------------------------
const Error404: BlitzPage = () => {
  const statusCode = 404
  const title = "This page could not be found"
  return (
    <>
      <Head>
        <title>
          {statusCode}: {title}
        </title>
      </Head>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">four-oh-four :/</span>
            <span className="block">There&quot;s nothing here, yet.</span>
          </h2>
          <ErrorComponent statusCode={statusCode} title={title} />

          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <a href="/request-invite">
                <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  Request invite to claim this space
                </a>
              </a>
            </div>
            <div className="ml-3 inline-flex">
              <a href="/">
                <a className="inline-flex items-center justify-center px-5 py-3 text-base font-medium rounded-md text-indigo-700">
                  Take me out of here
                </a>
              </a>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <iframe
              className="w-full "
              src="https://giphy.com/embed/26hkhPJ5hmdD87HYA"
              width="480"
              height="480"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </>
  )
}

Error404.getLayout = (page) => <AppLayout>{page}</AppLayout>
export default Error404
