import { Form, FormProps } from "app/core/components/Form"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { z } from "zod"
export { FORM_ERROR } from "app/core/components/Form"
import linkTypes from "app/links/link-types"

import { useMemo } from "react"
import { useRouter, useQuery, useRouterQuery } from "blitz"
import getCurrentOrganization from "app/organizations/queries/getCurrentOrganization"
import LabeledLinkSlugField from "app/links/components/LabeledLinkSlugField"
import { Container } from "@mantine/core"

export function LinkForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  const [currentOrganization] = useQuery(getCurrentOrganization, {})
  const query = useRouterQuery()

  const {
    query: { provider, linkType },
    push,
  } = useRouter()

  const typeData = linkTypes.find(({ type }) => type === linkType)

  return (
    <Form<S> {...props} initialValues={{ type: linkType, provider }}>
      <p className="mt-1 text-sm text-gray-500">
        Let’s get started by filling in the information below to create your new link.
      </p>

      {typeData?.type === "embed" && provider === "notion" && <>test</>}
      <Container>
        <pre className=" text-ellipsis">{JSON.stringify(currentOrganization)}</pre>
      </Container>
      <p className="mt-1 text-sm text-gray-500"></p>
      {typeData?.createFields.includes("target") && (
        <LabeledTextField name="target" label="Target" placeholder="target" type="url" />
      )}
      {/*
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
          )} */}
      {typeData?.createFields.includes("slug") && (
        <LabeledLinkSlugField
          label={"Slug"}
          domains={currentOrganization.domains}
          outerProps={{ className: "mt-6" }}
        />
      )}

      {typeData?.createFields.includes("name") && (
        <LabeledLinkSlugField
          label={"Slug"}
          domains={currentOrganization.domains}
          outerProps={{ className: "mt-6" }}
        />
      )}
      <div className="flex justify-end bg-black">
        {/* <button
                type="submit"
                disabled={isSubmitting}
                className={classNames(
                  isSubmitting && `disabled:opacity-50`,
                  ``,
                )}
              >
                {isSubmitting ? 'Creating your new link' : 'Create my link'}
              </button> */}
      </div>
    </Form>
  )
}
