import { Form, FormProps } from "app/core/components/Form"
import LabeledProfileMediaField from "./LabeledProfileMediaField"
import LabeledTextAreaField from "app/core/components/LabeledTextAreaField"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { z } from "zod"
import LabeledDefaultDomainField from "./LabeledDefaultDomainField"
export { FORM_ERROR } from "app/core/components/Form"

const labelClasses = "block text-sm font-medium text-gray-700"
export function OrganizationCreateForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  return (
    <Form<S> {...props}>
      <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
        <div className="space-y-6">
          <LabeledDefaultDomainField
            domains={["saltana.com"]}
            outerProps={{ className: labelClasses }}
            labelProps={{ className: labelClasses }}
            name="username"
            label="Username"
            className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm"
          />

          <LabeledTextField
            name="name"
            label="Display name"
            outerProps={{ className: labelClasses }}
            labelProps={{ className: labelClasses }}
            helpText="Most creators prefer using the name they are most known with, sdfs You'll be able to select a different display name if you prefer but your real name is used to verify your identity.            "
            className={`
            shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md
          `}
          />

          <LabeledTextAreaField
            name="description"
            label="Short description"
            helpText="Displayed at the top of your links"
            outerProps={{ className: labelClasses }}
            labelProps={{ className: labelClasses }}
            className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md `}
          />

          <LabeledProfileMediaField
            name="profileMedia"
            label="Profile Media"
            outerProps={{ className: labelClasses }}
            labelProps={{ className: labelClasses }}
            className={`
            shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-300 rounded-md
          `}
          />
        </div>
      </div>
    </Form>
  )
}
