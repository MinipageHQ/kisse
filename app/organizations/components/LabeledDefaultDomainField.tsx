import Uppy from "@uppy/core"
import { useUppy } from "@uppy/react"
import { forwardRef, ComponentPropsWithoutRef, PropsWithoutRef } from "react"
import { useField, UseFieldConfig } from "react-final-form"

export interface LabeledDefaultDomainFieldProps
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

export const LabeledDefaultDomainField = forwardRef<
  HTMLInputElement,
  LabeledDefaultDomainFieldProps
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

      {touched && normalizedError && (
        <div role="alert" style={{ color: "red" }}>
          {normalizedError}
        </div>
      )}
    </div>
  )
})

export default LabeledDefaultDomainField
