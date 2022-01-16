import { ReactNode, PropsWithoutRef } from "react"
import { Form as FinalForm, FormProps as FinalFormProps } from "react-final-form"
import { z } from "zod"
import { validateZodSchema } from "blitz"
export { FORM_ERROR } from "final-form"

export interface FormProps<S extends z.ZodType<any, any>>
  extends Omit<PropsWithoutRef<JSX.IntrinsicElements["form"]>, "onSubmit"> {
  /** All your form fields */
  children?: ReactNode
  /** Text to display in the submit button */
  submitText?: string
  submitTextWhenLoading?: string

  submitOuterProps?: PropsWithoutRef<JSX.IntrinsicElements["div"]>
  submitProps?: PropsWithoutRef<JSX.IntrinsicElements["button"]>

  schema?: S
  onSubmit: FinalFormProps<z.infer<S>>["onSubmit"]
  initialValues?: FinalFormProps<z.infer<S>>["initialValues"]
}

export function Form<S extends z.ZodType<any, any>>({
  children,
  submitText,
  submitTextWhenLoading,
  submitProps = {},
  submitOuterProps = {},
  schema,
  initialValues,
  onSubmit,
  ...props
}: FormProps<S>) {
  return (
    <FinalForm
      initialValues={initialValues}
      validate={validateZodSchema(schema)}
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting, submitError }) => (
        <form onSubmit={handleSubmit} className="form" {...props}>
          {/* Form fields supplied as children are rendered here */}
          {children}

          {submitError && (
            <div role="alert" style={{ color: "red" }}>
              {submitError}
            </div>
          )}

          {submitText && (
            <div {...submitOuterProps}>
              <button type="submit" disabled={submitting} {...submitProps}>
                {submitting && submitTextWhenLoading ? submitTextWhenLoading : submitText}
              </button>
            </div>
          )}

          <style global jsx>{`
            // .form > * + * {
            //   margin-top: 1rem;
            // }
          `}</style>
        </form>
      )}
    />
  )
}

export default Form
