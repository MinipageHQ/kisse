import { ExclamationCircleIcon } from "@heroicons/react/solid"
import { Domain } from "db"
import Uppy from "@uppy/core"
import { useUppy } from "@uppy/react"
import getDomains from "app/domains/queries/getDomains"
import { useQuery } from "blitz"
import { forwardRef, ComponentPropsWithoutRef, PropsWithoutRef } from "react"
import { useField, UseFieldConfig } from "react-final-form"
import { PLATFORM_DOMAINS } from "../utils"
import { InputWrapper, Input, ActionIcon, Group } from "@mantine/core"
import getCurrentUser from "app/users/queries/getCurrentUser"
import getCurrentOrganization from "app/organizations/queries/getCurrentOrganization"
import { GearIcon, ImageIcon, SunIcon } from "@radix-ui/react-icons"

export interface LabeledLinkSlugFieldProps extends PropsWithoutRef<JSX.IntrinsicElements["input"]> {
  /** Domain ID field name. */
  domainIdFieldName?: string
  /** Slug field name. */
  slugFieldName?: string
  /** Field label. */
  label: string
  /** Field type. Doesn't include radio buttons and checkboxes */
  type?: "text" | "password" | "email" | "number"
  domains: Partial<Domain>[]
  outerProps?: PropsWithoutRef<JSX.IntrinsicElements["div"]>
  labelProps?: ComponentPropsWithoutRef<"label">
  fieldProps?: UseFieldConfig<string>
}

export const LabeledLinkSlugField = forwardRef<HTMLInputElement, LabeledLinkSlugFieldProps>(
  (
    {
      domainIdFieldName = "domainId",
      slugFieldName = "slug",
      label,
      outerProps,
      fieldProps,
      labelProps,
      ...props
    },
    ref
  ) => {
    const [currentOrganization, meta] = useQuery(getCurrentOrganization, {})

    const domains = currentOrganization.domains
    // Since domain ID field is selected from a select box it's not possible
    // to have a validation problem with it under normal circumtences
    // API method will have the correct validations and if a user tries something funny
    // inside the browser they won't get a proper error displayed but their trick won't work
    const domainIdField = useField(domainIdFieldName, {
      ...fieldProps,
      initialValue: (domains[0] && domains[0]["id"] && domains[0]["id"]) || undefined,
    })

    const selectedDomain = domains.find((domain) => domain.id === domainIdField.input.value)

    const {
      input,
      meta: { touched, error, submitError, submitting },
    } = useField(slugFieldName, {
      ...fieldProps,
    })

    // const normalizedError = Array.isArray(error) ? error.join(", ") : error || submitError

    const normalizedError = Array.isArray(error) ? error.join(", ") : error || submitError
    const showError = touched && normalizedError

    // return (
    //   <InputWrapper
    //     id="input-demo"
    //     required
    //     label="Credit card information"
    //     description="Please enter your credit card information, we need some money"
    //     error="Your credit card expired"
    //   >
    //     <Input id="input-demo" placeholder="Your email" />
    //   </InputWrapper>
    // )
    return (
      <div {...outerProps}>
        <label htmlFor="slug" className="block text-sm font-medium text-gray-700" {...labelProps}>
          {label}
        </label>
        <Group>
          <p>{selectedDomain?.domain}/</p>
          <ActionIcon color="dark" variant="default" disabled>
            <GearIcon />
          </ActionIcon>
        </Group>
        <div className="mt-1 relative rounded-md shadow-sm">
          {/*  <div className="absolute inset-y-0 left-0 flex items-center">
            {domainIdField.input.value}
            {/* <label htmlFor="domain" className="sr-only">
              Domain
            </label>
            <select
              id="domain"
              {...domainIdField.input}
              className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-3 pr-12 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
            >
              {domains.map((domain: { id: string; domain: string }, index) => (
                <option key={domain.id} value={domain.id} selected={index === 0}>
                  {domain.domain}/
                </option>
              ))}
            </select>
          </div>*/}
          <input
            type="text"
            id="slug"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full  sm:text-sm border-gray-300 rounded-md"
            placeholder="about-me"
            {...input}
          />

          {showError && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
            </div>
          )}
        </div>

        {touched && normalizedError && (
          <div role="alert" style={{ color: "red" }}>
            {normalizedError}
          </div>
        )}
      </div>
    )
  }
)

export default LabeledLinkSlugField
