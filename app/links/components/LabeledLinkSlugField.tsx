import Uppy from "@uppy/core"
import { useUppy } from "@uppy/react"
import { forwardRef, ComponentPropsWithoutRef, PropsWithoutRef } from "react"
import { useField, UseFieldConfig } from "react-final-form"

export interface LabeledLinkSlugFieldProps
  extends PropsWithoutRef<JSX.IntrinsicElements["input"]> {
  /** Field name. */
  name: string
  /** Field label. */
  label: string
  /** Field type. Doesn't include radio buttons and checkboxes */
  type?: "text" | "password" | "email" | "number"
  domains: string[]
  outerProps?: PropsWithoutRef<JSX.IntrinsicElements["div"]>
  labelProps?: ComponentPropsWithoutRef<"label">
  fieldProps?: UseFieldConfig<string>
}

export const LabeledLinkSlugField = forwardRef<
  HTMLInputElement,
  LabeledLinkSlugFieldProps
>(({ name, label, domains, outerProps, fieldProps, labelProps, ...props }, ref) => {
  const {
    input,
    meta: { touched, error, submitError, submitting },
  } = useField(name, {
    parse:
      props.type === "number"
        ? (Number as any)
        : // Converting `""` to `null` ensures empty values will be set to null in the DB
        (v) => (v === "" ? null : v),
    ...fieldProps,
  })
  const normalizedError = Array.isArray(error) ? error.join(", ") : error || submitError

  return (
    <div {...outerProps}>
      <div>
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
          Price
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">$</span>
          </div>
          <input
            type="text"
            name="price"
            id="price"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
            placeholder="0.00"
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <label htmlFor="currency" className="sr-only">
              Currency
            </label>
            <select
              id="currency"
              name="currency"
              className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
            >
              <option>USD</option>
              <option>CAD</option>
              <option>EUR</option>
            </select>
          </div>
        </div>
      </div>

      <label {...labelProps}>
        {label}
        <div className="mt-1 flex rounded-md shadow-sm">
          <input {...input} disabled={submitting} {...props} ref={ref} />
          <span
            className={`inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm
                            ${touched && normalizedError && "border-red-500"} `}
          >
            .{domains[0]}
          </span>
        </div>
      </label>

      <label htmlFor="price" className="block text-sm font-medium text-gray-700">
        {label}
      </label>

      {touched && normalizedError && (
        <div role="alert" style={{ color: "red" }}>
          {normalizedError}
        </div>
      )}

      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          type="text"
          name="price"
          id="price"
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-111 pr-12 sm:text-sm border-gray-300 rounded-md"
          placeholder="rickastley"
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <label htmlFor="domain" className="sr-only">
            Domain
          </label>
          <select
            id="currency"
            name="currency"
            className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
          >
            <option>saltana.com</option>
            <option>salta.na</option>
            <option>an.other</option>
          </select>
        </div>
      </div>
    </div>
  )
})

export default LabeledLinkSlugField
