import { ExclamationCircleIcon } from "@heroicons/react/solid"
import { Domain } from "@prisma/client"
import Uppy from "@uppy/core"
import { useUppy } from "@uppy/react"
import { forwardRef, ComponentPropsWithoutRef, PropsWithoutRef } from "react"
import { useField, UseFieldConfig } from "react-final-form"
import { PLATFORM_DOMAINS } from "../utils"

export interface LabeledLinkSlugFieldProps
  extends PropsWithoutRef<JSX.IntrinsicElements["input"]> {
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

export const LabeledLinkSlugField = forwardRef<
  HTMLInputElement,
  LabeledLinkSlugFieldProps
>(({ domainIdFieldName = "domainId", slugFieldName = "slug", label, domains = [], outerProps, fieldProps, labelProps, ...props }, ref) => {

  // Since domain ID field is selected from a select box it's not possible
  // to have a validation problem with it under normal circumtences
  // API method will have the correct validations and if a user tries something funny
  // inside the browser they won't get a proper error displayed but their trick won't work
  const domainIdField = useField(domainIdFieldName, {
    ...fieldProps,
  })

  const {
    input,
    meta: { touched, error, submitError, submitting },
  } = useField(slugFieldName, {
    ...fieldProps,
  })

  // const normalizedError = Array.isArray(error) ? error.join(", ") : error || submitError

  const normalizedError = Array.isArray(error) ? error.join(", ") : error || submitError
  const showError = touched && normalizedError


  return (
    <div {...outerProps}>

      <label htmlFor="slug" className="block text-sm font-medium text-gray-700" {...labelProps}>
        {label}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 flex items-center">
          <label htmlFor="domain" className="sr-only">
            Domain
          </label>
          <select
            id="domain"
            {...domainIdField.input}
            className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-3 pr-12 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
          >
            {domains.map((domain, index) => <option key={domain.id} value={domain.id} selected={index === 0}>{domain.domain}/</option>)}
          </select>
        </div>
        <input
          type="text"
          id="slug"
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-36 sm:text-sm border-gray-300 rounded-md"
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
})

export default LabeledLinkSlugField
