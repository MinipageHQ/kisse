import { ExclamationCircleIcon } from "@heroicons/react/solid"
import { Form, FormProps } from "app/core/components/Form"
import { LabeledTextField, LabeledTextFieldProps } from "app/core/components/LabeledTextField"
import { forwardRef } from "react"
import { useField } from "react-final-form"
import { z } from "zod"
export { FORM_ERROR } from "app/core/components/Form"
export const LabeledDomainField = forwardRef<HTMLInputElement, LabeledTextFieldProps>(
  ({ name, label, outerProps, fieldProps, labelProps, type = "text", helpText, ...props }, ref) => {
    const {
      input,
      meta: { touched, error, submitError, submitting },
    } = useField(name, {
      ...fieldProps,
    })

    const normalizedError = Array.isArray(error) ? error.join(", ") : error || submitError
    const showError = touched && normalizedError

    return (
      <>
        <input
          title={label}
          type={type}
          {...input}
          disabled={submitting}
          {...props}
          className="rounded-md border border-gray-300 focus:ring-0 focus:border-black px-4 flex-auto min-w-0 sm:text-sm"
          placeholder="mydomain.com"
          pattern="^(?:[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.)?[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$"
          autoComplete="off"

          ref={ref}
        />
        {showError && (
          <div className="text-red-500 text-left w-full max-w-2xl mt-5 text-sm flex items-center space-x-2">
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
              style={{ color: "#f44336" }}
            >
              <circle cx="12" cy="12" r="10" fill="white" />
              <path d="M12 8v4" stroke="#f44336" />
              <path d="M12 16h.01" stroke="#f44336" />
            </svg>
            <p>

              {normalizedError}
            </p>


          </div>
        )}
        {helpText && <p className="mt-2 text-sm text-gray-500">{helpText}</p>}
      </>
    )
  }
)

export function DomainForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {

  return (
    <Form<S> {...props} className="flex justify-between space-x-4 w-full max-w-2xl h-10 mt-10 mb-10"

    >

      <LabeledDomainField name="domain" label="Domain" placeholder="Domain" />

    </Form>
  )
}
