import { forwardRef, ComponentPropsWithoutRef, PropsWithoutRef } from "react"
import { useField, UseFieldConfig } from "react-final-form"

export interface LabeledTextFieldProps extends PropsWithoutRef<JSX.IntrinsicElements["input"]> {
  /** Field name. */
  name: string
  /** Field label. */
  label: string
  /** Field type. Doesn't include radio buttons and checkboxes */
  type?: "text" | "password" | "email" | "number" | "url"
  /** Field help text */
  helpText?: React.ReactNode
  outerProps?: PropsWithoutRef<JSX.IntrinsicElements["div"]>
  labelProps?: ComponentPropsWithoutRef<"label">
  fieldProps?: UseFieldConfig<string>
}
import { ExclamationCircleIcon } from "@heroicons/react/solid"
import { Input, InputWrapper } from "@mantine/core"

export const LabeledTextField = forwardRef<HTMLInputElement, LabeledTextFieldProps>(
  ({ name, label, outerProps, fieldProps, labelProps, type = "text", helpText, ...props }, ref) => {
    const {
      input,
      meta: { touched, error, submitError, submitting },
    } = useField(name, {
      ...fieldProps,
    })

    const normalizedError = Array.isArray(error) ? error.join(", ") : error || submitError
    const showError = touched && normalizedError

    console.log("normalizedError labeled text field", name, error)
    return (
      <InputWrapper
        id={name}
        required
        label={label}
        description={helpText}
        error={touched && normalizedError}
      >
        <Input {...input} id={name} disabled={submitting} ref={ref} />
      </InputWrapper>
    )
    return (
      <div {...outerProps} className={`mt-3 ${outerProps?.className}`}>
        <label className="block text-sm font-medium text-gray-700" {...labelProps}>
          {label}

          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              title={label}
              type={type}
              {...input}
              disabled={submitting}
              {...props}
              className={`block w-full pr-10 focus:outline-none  sm:text-sm rounded-md ${
                showError &&
                "border-red-300 text-red-900 placeholder-red-300  focus:ring-red-500 focus:border-red-500 "
              } `}
              ref={ref}
            />
            {showError && (
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
              </div>
            )}
          </div>
        </label>

        {helpText && <p className="mt-2 text-sm text-gray-500">{helpText}</p>}
      </div>
    )
  }
)

export default LabeledTextField
