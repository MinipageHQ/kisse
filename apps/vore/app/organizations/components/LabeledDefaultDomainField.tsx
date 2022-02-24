import { InputWrapper, Input } from "@mantine/core"
import Uppy from "@uppy/core"
import { useUppy } from "@uppy/react"
import getDomains from "app/domains/queries/getDomains"
import { useQuery } from "blitz"
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
  domains?: string[]
  outerProps?: PropsWithoutRef<JSX.IntrinsicElements["div"]>
  labelProps?: ComponentPropsWithoutRef<"label">
  fieldProps?: UseFieldConfig<string>
  helpText?: string
}

export const LabeledDefaultDomainField = forwardRef<
  HTMLInputElement,
  LabeledDefaultDomainFieldProps
>(({ name, label, outerProps, fieldProps, labelProps, helpText, ...props }, ref) => {
  const [{ domains }] = useQuery(getDomains, { only: 'platform' }, {
    initialData: { domains: [] },
    cacheTime: 100
  })

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
    type: 'select'
  })

  const [firstDomain = {}] = domains as { id?: string }[]
  const domainKeyInput = useField('defaultDomainId', {
    defaultValue: domains.length > 0 && firstDomain.id ? firstDomain.id : null
  })
  const normalizedError = Array.isArray(error) ? error.join(", ") : error || submitError

  return (<InputWrapper
    id={name}
    required
    label={label}
    description={helpText}
    error={touched && normalizedError}
  >

    <div className="mt-1 relative rounded-md shadow-sm">
      <input
        type="text"
        {...input}
        disabled={submitting}
        {...props}
        ref={ref}
        id="slug"
        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-111 pr-12 sm:text-sm border-gray-300 rounded-md"
        placeholder="rickastley"
      />
      <div className="absolute inset-y-0 right-0 flex items-center">
        <label htmlFor="domainKey" className="sr-only">
          Domain
        </label>
        <select
          id="domainKey"
          title="domainKey"
          {...domainKeyInput.input}
          value={domainKeyInput.input.value as string}
          className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
        >
          {domains.map(({ domain, id }, i) => <option key={id} value={id}>{domain}</option>)}
        </select>
      </div>
    </div>

  </InputWrapper>
  )

})

export default LabeledDefaultDomainField
