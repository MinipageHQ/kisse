import { Link, useRouter, useMutation, BlitzPage, Routes, useQuery } from "blitz"
import Layout from "app/core/layouts/DashboardLayout"
import createLink from "app/links/mutations/createLink"
import { LinkForm, FORM_ERROR } from "app/links/components/LinkForm"
import linkTypes from 'app/links/link-types'
import classNames from "app/core/utils/classnames"
import { useMemo } from "react"
import getCurrentOrganization from "app/organizations/queries/getCurrentOrganization"

const NewLinkPage: BlitzPage = () => {
  const router = useRouter()
  const [currentOrganization] = useQuery(getCurrentOrganization, {})
  const [createLinkMutation] = useMutation(createLink)

  const {
    query: { type = "link-list" },
    push,
  } = useRouter()
  const typeData = useMemo(
    () => linkTypes.find((linkType) => linkType.type === type),
    [type],
  )
  return (
    <div>
      <h1>Create New Link</h1>


      <main className="max-w-lg mx-auto pt-10 pb-12 px-4 lg:pb-16">
        <form >
          <div className="space-y-6">
            <div>
              <h1 className="text-lg leading-6 font-medium text-gray-900">
                {typeData.createTitle}
              </h1>
              <p className="mt-1 text-sm text-gray-500">
                Let’s get started by filling in the information below to create
                your new link.
              </p>


              <pre>{JSON.stringify(currentOrganization)}</pre>
              <p className="mt-1 text-sm text-gray-500">

              </p>
            </div>

            {typeData.createFields.includes('destination') && (
              <div>
                <label
                  htmlFor="destination"
                  className="block text-sm font-medium text-gray-700"
                >
                  Destination (URL)
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    {...register('destination', {
                      required: true,
                    })}
                    disabled={isSubmitting}
                    id="destination"
                    className={classNames(
                      isSubmitting && `disabled:opacity-50`,
                      `block w-full shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm border-gray-300 rounded-md`,
                    )}
                    placeholder="https://notion.so/test-change-this"
                  />
                </div>
                {errors.destination && (
                  <div>{JSON.stringify(errors.destination)}</div>
                )}
              </div>
            )}

            {type === 'checkout' && (
              <>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      {...register('name', {
                        required: true,
                      })}
                      id="name"
                      className="block w-full shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <GenericFormFieldError errors={errors} fieldName="name" />

                </div>
                <CreatorDashboardCreateAsset form={{
                  register,
                  handleSubmit,
                  control,
                  setValue,
                  formState: { errors, isSubmitting },
                }}
                  namePrefix="asset"
                />

              </>
            )}
            {typeData.createFields.includes('slug') && (
              <div>
                <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <label htmlFor="country" className="sr-only">
                      Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      autoComplete="country"
                      className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-3 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                    >
                      <option>US</option>
                      <option>CA</option>
                      <option>EU</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    name="phone-number"
                    id="phone-number"
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-16 sm:text-sm border-gray-300 rounded-md"
                    placeholder="+1 (555) 987-6543"
                  />
                </div>
              </div>
            )}

            <div className="flex justify-end bg-black">
              {/* <button
                type="submit"
                disabled={isSubmitting}
                className={classNames(
                  isSubmitting && `disabled:opacity-50`,
                  `ml-3 inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500`,
                )}
              >
                {isSubmitting ? 'Creating your new link' : 'Create my link'}
              </button> */}
            </div>
          </div>
        </form>
      </main>
      <LinkForm
        submitText="Create Link"
        // TODO use a zod schema for form validation
        //  - Tip: extract mutation's schema into a shared `validations.ts` file and
        //         then import and use it here
        schema={CreateLink}
        // initialValues={{}}
        onSubmit={async (values) => {
          try {
            const link = await createLinkMutation(values)
            router.push(Routes.ShowLinkPage({ linkId: link.id }))
          } catch (error: any) {
            console.error(error)
            return {
              [FORM_ERROR]: error.toString(),
            }
          }
        }}
      />

      <p>
        <Link href={Routes.LinksPage()}>
          <a>Links</a>
        </Link>
      </p>
    </div>
  )
}

NewLinkPage.authenticate = true
NewLinkPage.getLayout = (page) => <Layout title={"Create New Link"}>{page}</Layout>

export default NewLinkPage
