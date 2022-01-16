import { Form, FormProps } from "app/core/components/Form"
import LabeledMediaField from "app/core/components/LabeledMediaField"
import LabeledTextAreaField from "app/core/components/LabeledTextAreaField"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { z } from "zod"
import LabeledDefaultDomainField from "./LabeledDefaultDomainField"
export { FORM_ERROR } from "app/core/components/Form"

const labelClasses = "block text-sm font-medium text-gray-700"
export function OrganizationOnboardingForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
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
            name="displayName"
            label="Display name"
            outerProps={{ className: labelClasses }}
            labelProps={{ className: labelClasses }}
            className={`
            shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md
          `}
          />
          <p className="mt-2 text-sm text-gray-500" id="name-description">
            Most creators prefer using the name they are most known with, sdfs You&apos;ll be able
            to select a different display name if you prefer but your real name is used to verify
            your identity.
          </p>
          <LabeledTextAreaField
            name="description"
            label="Short description"
            outerProps={{ className: labelClasses }}
            labelProps={{ className: labelClasses }}
            className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md `}
          />
          <p className="mt-2 text-sm text-gray-500" id="name-description">
            Displayed at the top of your links
          </p>

          <LabeledMediaField
            name="profileMedia"
            label="Profile Media"
            outerProps={{ className: labelClasses }}
            labelProps={{ className: labelClasses }}
            className={`
            shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md
          `}
          />
        </div>
      </div>
      <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
        {/* <FormSubmitButton
          type="submit"
          isLoading={updateUserSettings.isLoading}
          text="Start using Saltana"
          textWhenLoading="Crafting your profile..."
          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        /> */}
      </div>
    </Form>
  )
}
