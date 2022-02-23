import { Form, FormProps } from "app/core/components/Form"
import LabeledProfileMediaField from "./LabeledProfileMediaField"
import LabeledTextAreaField from "app/core/components/LabeledTextAreaField"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { z } from "zod"
import LabeledDefaultDomainField from "./LabeledDefaultDomainField"
import { Box, Divider, Group, Paper } from "@mantine/core"
export { FORM_ERROR } from "app/core/components/Form"

const labelClasses = "block text-sm font-medium text-gray-700"
export default function OrganizationUpdateFieldPopover<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  return (
    <Form<S> {...props}>        <Paper padding="md" shadow="xs">

      <Group position="center" direction="column" grow>

        <LabeledDefaultDomainField
          outerProps={{ className: labelClasses }}
          labelProps={{ className: labelClasses }}
          name="slug"
          label="Username"
          helpText="You can change this later."
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

        <LabeledTextField name="inviteCode" label="Invite Code" placeholder="Invite code" helpText="We only accept a limited number of creators at the moment" />
      </Group>
    </Paper>
    </Form>
  )
}
