import { InputWrapper, Input, Textarea, NumberInput } from "@mantine/core"
import { forwardRef, ComponentPropsWithoutRef, PropsWithoutRef } from "react"
import { useField, UseFieldConfig } from "react-final-form"

export interface LabeledPriceFieldProps extends PropsWithoutRef<JSX.IntrinsicElements["textarea"]> {
  /** Field name. */
  name: string
  /** Field label. */
  label: string
  /** Field type. Doesn't include radio buttons and checkboxes */
  // type?: "text" | "password" | "email" | "number"
  helpText?: React.ReactNode
  outerProps?: PropsWithoutRef<JSX.IntrinsicElements["div"]>
  labelProps?: ComponentPropsWithoutRef<"label">
  fieldProps?: UseFieldConfig<string>
}

export const LabeledPriceField = forwardRef<HTMLTextAreaElement, LabeledPriceFieldProps>(
  ({ name, label, outerProps, fieldProps, labelProps, helpText, ...props }, ref) => {
    const {
      input,
      meta: { touched, error, submitError, submitting },
    } = useField(name, {
      parse: (v) => (v === "" ? null : v),
      ...fieldProps,
    })

    const normalizedError = Array.isArray(error) ? error.join(", ") : error || submitError

    return (
      <NumberInput
        label={label}
        required
        // icon={"$"}
        error={touched && normalizedError}
        description={helpText}
        stepHoldDelay={500}
        stepHoldInterval={100}
        {...input}
        type="number"
        id={name}
        disabled={submitting}
      />
    )
  }
)

export default LabeledPriceField
