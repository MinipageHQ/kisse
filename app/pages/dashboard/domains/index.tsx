import { Suspense, useState } from "react"
import { Head, Link, usePaginatedQuery, useRouter, BlitzPage, Routes, useQuery, useMutation } from "blitz"
import Layout from "app/core/layouts/Layout"
import getDomains from "app/domains/queries/getDomains"
import DashboardCreatorSettingsLayout from "app/core/layouts/DashboardCustomizeLayout"
import getDomain from "app/domains/queries/getDomain"
import createDomain from "app/domains/mutations/createDomain"
import { DomainForm } from "app/domains/components/DomainForm"
import { CreateDomain } from "app/domains/validations"
import { FORM_ERROR } from "final-form"

const ITEMS_PER_PAGE = 100

const DomainCard = ({ domain: domainData, domains }: { domain: any, domains: any[] }) => {
  const [domain] = useQuery(
    getDomain,
    { id: domainData.domain, },
    { refetchInterval: 5000, initialData: domainData }
  );
  const [recordType, setRecordType] = useState("CNAME");
  const [removing, setRemoving] = useState(false);
  console.log({ domain })
  return (
    <div className="w-full mt-10 shadow-md border border-gray-50 rounded-lg py-10">
      <div className="flex justify-between space-x-4 px-10">
        <a
          href={`http://${domain.domain}`}
          target="_blank"
          className="text-xl font-semibold flex items-center" rel="noreferrer"
        >
          {domain.domain}
          <span className="inline-block ml-2">
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              shapeRendering="geometricPrecision"
            >
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
              <path d="M15 3h6v6" />
              <path d="M10 14L21 3" />
            </svg>
          </span>
        </a>
        <div className="flex space-x-3">
          <button
            onClick={() => {
              // mutate(`/api/check-domain?domain=${domain}`);
            }}
            // disabled={isValidating}
            className={`${false
              ? "cursor-not-allowed bg-gray-100"
              : "bg-white hover:text-black hover:border-black"
              } text-gray-500 border-gray-200 py-1.5 w-24 text-sm border-solid border rounded-md focus:outline-none transition-all ease-in-out duration-150`}
          >
            {/* {isValidating ? <LoadingDots /> : "Refresh"} */}
          </button>
          <button
            onClick={async () => {
              setRemoving(true);
              // await fetch(`/api/remove-domain?domain=${domain}`).then((res) => {
              //   setRemoving(false);
              //   if (res.ok) {
              //     setDomainList(domainList.filter((item) => item !== domain));
              //   } else {
              //     alert("Error removing domain");
              //   }
              // });
            }}
            disabled={removing}
            className={`${removing ? "cursor-not-allowed bg-gray-100" : ""
              }bg-red-500 text-white border-red-500 hover:text-red-500 hover:bg-white py-1.5 w-24 text-sm border-solid border rounded-md focus:outline-none transition-all ease-in-out duration-150`}
          >
            {/* {removing ? <LoadingDots /> : "Remove"} */}
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-3 my-3 px-10">
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          shapeRendering="geometricPrecision"
        >
          <circle cx="12" cy="12" r="10" fill={true ? "#1976d2" : "#d32f2f"} />
          {true ? (
            <>
              <path
                d="M8 11.8571L10.5 14.3572L15.8572 9"
                fill="none"
                stroke="white"
              />
            </>
          ) : (
            <>
              <path d="M15 9l-6 6" stroke="white" />
              <path d="M9 9l6 6" stroke="white" />
            </>
          )}
        </svg>
        <p
          className={`${true ? "text-black font-normal" : "text-red-700 font-medium"
            } text-sm`}
        >
          {true ? "Valid" : "Invalid"} Configuration
        </p>
      </div>

      {!false && (
        <>
          <div className="w-full border-t border-gray-100 mt-5 mb-8" />

          <div className="px-10">
            <div className="flex justify-start space-x-4">
              <button
                onClick={() => setRecordType("CNAME")}
                className={`${recordType == "CNAME"
                  ? "text-black border-black"
                  : "text-gray-400 border-white"
                  } text-sm border-b-2 pb-1 transition-all ease duration-150`}
              >
                CNAME Record (subdomains)
              </button>
              <button
                onClick={() => setRecordType("A")}
                className={`${recordType == "A"
                  ? "text-black border-black"
                  : "text-gray-400 border-white"
                  } text-sm border-b-2 pb-1 transition-all ease duration-150`}
              >
                A Record (apex domain)
              </button>
            </div>
            <div className="my-3 text-left">
              <p className="my-5 text-sm">
                Set the following record on your DNS provider to continue:
              </p>
              <div className="flex justify-start items-center space-x-10 bg-gray-50 p-2 rounded-md">
                <div>
                  <p className="text-sm font-bold">Type</p>
                  <p className="text-sm font-mono mt-2">{recordType}</p>
                </div>
                <div>
                  <p className="text-sm font-bold">Name</p>
                  <p className="text-sm font-mono mt-2">
                    {recordType == "CNAME" ? "www" : "@"}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-bold">Value</p>
                  <p className="text-sm font-mono mt-2">
                    {recordType == "CNAME"
                      ? `cname.platformize.co`
                      : `76.76.21.21`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export const DomainsList = () => {
  const router = useRouter()
  const page = Number(router.query.page) || 0
  const [{ domains, hasMore }] = usePaginatedQuery(getDomains, {
    only: 'organization',
    orderBy: { id: "asc" },
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
  })

  const goToPreviousPage = () => router.push({ query: { page: page - 1 } })
  const goToNextPage = () => router.push({ query: { page: page + 1 } })

  return (


    <div className="w-full max-w-2xl">
      {domains.map((domain) => {
        return (
          <DomainCard domain={domain} key={domain.id} domains={domains} />
        );
      })}


      {page === 0 && hasMore === true && <> <button disabled={page === 0} onClick={goToPreviousPage}>
        Previous
      </button>
        <button disabled={!hasMore} onClick={goToNextPage}>
          Next
        </button></>}
    </div>
  )
}

const DomainsPage: BlitzPage = () => {

  const router = useRouter()
  const [createDomainMutation] = useMutation(createDomain)
  return (
    <>
      <Head>
        <title>Domains</title>
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center my-20">

        <DomainForm
          submitText="Add"
          submitProps={{
            className: "bg-black text-white border-black hover:text-black hover:bg-white py-2 w-28 text-sm border-solid border rounded-md focus:outline-none transition-all ease-in-out duration-150"
          }}
          schema={CreateDomain}
          // initialValues={{}}
          onSubmit={async (values) => {
            try {
              const domain = await createDomainMutation(values)
              router.push(Routes.ShowDomainPage({ domainId: domain.id }))
            } catch (error: any) {
              console.error(error)
              return {
                [FORM_ERROR]: error.toString(),
              }
            }
          }}
        />


        <Suspense fallback={<div>Loading...</div>}>

          <DomainsList />
        </Suspense>
      </main>
    </>
  )
}

DomainsPage.authenticate = true
DomainsPage.getLayout = (page) => (
  <DashboardCreatorSettingsLayout>{page}</DashboardCreatorSettingsLayout>
)

export default DomainsPage
