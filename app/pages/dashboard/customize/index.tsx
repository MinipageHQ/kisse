import { Switch } from "@headlessui/react"
import DashboardCustomizeLayout from "app/core/layouts/DashboardCustomizeLayout"
import classNames from "app/core/utils/classnames"
import { useCurrentOrganization } from "app/organizations/hooks/useCurrentOrganization"
import { BlitzPage, Image, useMutation } from "blitz"

import {
  Popover,
  Button,
  Group,
  TextInput,
  Avatar,
  Text,
  ActionIcon,
  useMantineTheme,
  Anchor,
  ColorInput,
  Select,
} from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import { Pencil2Icon } from "@modulz/radix-icons"
import { useState } from "react"
import { useNotifications } from "@mantine/notifications"
import updateOrganization from "app/organizations/mutations/updateOrganization"
import { FORM_ERROR } from "app/organizations/components/OrganizationCustomizeForm"
import { OrganizationUpdateSchema } from "app/organizations/validations"
import { useForm, zodResolver } from "@mantine/form"
import { Organization } from "@prisma/client"
import { z } from "zod"

enum CreatorUpdateFields {
  NAME,
  LOCATION,
  DESCRIPTION,
}

type OrganizationUpdateSchemaType = z.infer<typeof OrganizationUpdateSchema>
interface UserEditFormProps {
  initialValues: OrganizationUpdateSchemaType
  onSubmit(values: OrganizationUpdateSchemaType): void
  onCancel(): void
  fields: CreatorUpdateFields[]
}

function UserEditForm({ initialValues, onSubmit, onCancel, fields = [] }: UserEditFormProps) {
  const isMobile = useMediaQuery("(max-width: 755px")

  const form = useForm({
    initialValues,
    schema: zodResolver(OrganizationUpdateSchema),
  })

  return (
    <form onSubmit={form.onSubmit(onSubmit)}>
      {fields.includes(CreatorUpdateFields.NAME) && (
        <TextInput
          required
          label="Name"
          placeholder="John Doe"
          mt="sm"
          {...form.getInputProps("name")}
        />
      )}

      {fields.includes(CreatorUpdateFields.DESCRIPTION) && (
        <TextInput
          required
          label="DESCRIPTION"
          placeholder="John Doe"
          mt="sm"
          {...form.getInputProps("description")}
        />
      )}
      {/* {fields.includes(CreatorUpdateFields.LOCATION) && (
        <TextInput
          required
          label="Location"
          placeholder="John Doe"
          mt="sm"
          {...form.getInputProps("metadata.location")}
        />
      )} */}

      {/* <TextInput
        required
        label="Email"
        placeholder="Email"
        style={{ minWidth: isMobile ? 220 : 300, marginTop: 15 }}
        value={form.values.email}
        onChange={(event) => form.setFieldValue("email", event.currentTarget.value)}
        error={form.errors.email}
        variant="default"
      /> */}

      <Group position="apart" style={{ marginTop: 15 }}>
        <Anchor component="button" color="gray" size="sm" onClick={onCancel}>
          Cancel
        </Anchor>
        <Button type="submit" size="sm">
          Save
        </Button>
      </Group>
    </form>
  )
}

function EditDisplayNamePopover({ fields }: { fields: CreatorUpdateFields[] }) {
  const [opened, setOpened] = useState(false)
  const theme = useMantineTheme()
  const notifications = useNotifications()
  const [updateOrganizationMutation] = useMutation(updateOrganization)
  const [organization] = useCurrentOrganization()

  return (
    <Popover
      opened={opened}
      onClose={() => setOpened(false)}
      position="bottom"
      placement="end"
      withCloseButton
      title="Update your information"
      transition="pop-top-right"
      target={
        <ActionIcon
          variant={theme.colorScheme === "dark" ? "hover" : "light"}
          onClick={() => setOpened((o) => !o)}
        >
          <Pencil2Icon />
        </ActionIcon>
      }
    >
      <UserEditForm
        initialValues={
          { ...organization, metadata: { location: "t " } } as OrganizationUpdateSchemaType
        }
        fields={fields}
        onCancel={() => setOpened(false)}
        onSubmit={async (values) => {
          console.log("values", values)
          const id = notifications.showNotification({
            loading: true,
            id: "update-organization",
            title: "Updating your information...",
            message: "Thanks for waiting :)",
            autoClose: false,
            disallowClose: true,
          })

          try {
            const updated = await updateOrganizationMutation({
              name: values.name,
              description: values.description,
              metadata: {
                location: "te",
                // location: values.location,
              },
            })

            // await refetch()

            // setValues(updated)
            notifications.updateNotification(id, {
              loading: false,
              id: "update-organization-success",
              title: "Success",
              message: "Done!",
              color: "green",
            })
            // router.push(Routes.ShowOrderPage({ orderId: updated.id }))
          } catch (error: any) {
            console.error(error)
            notifications.updateNotification(id, {
              loading: false,
              title: "Error",
              id: "update-organization-error",
              message: error?.message ?? "Something went wrong",
              color: "red",
              autoClose: 3000,
            })
            setOpened(false)
            return {
              [FORM_ERROR]: error.toString(),
            }
          }

          setOpened(false)
        }}
      />
    </Popover>
  )
}
const DashboardSettingsProfilePage: BlitzPage = () => {
  const [automaticTimezoneEnabled, setAutomaticTimezoneEnabled] = useState(true)
  const [autoUpdateApplicantDataEnabled, setAutoUpdateApplicantDataEnabled] = useState(false)
  const [organization] = useCurrentOrganization()
  return (
    <div className="p-4">
      {/* Description list with inline editing */}
      <div>
        <div className="space-y-1">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Profile</h3>
          <p className="max-w-2xl text-sm text-gray-500">
            This information will be displayed publicly so be careful what you share.
          </p>
        </div>
        <div className="mt-6">
          <dl className="divide-y divide-gray-200">
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Name</dt>
              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <span className="flex-grow">{organization?.name || "not set yet"}</span>
                <span className="ml-4 flex-shrink-0">
                  <EditDisplayNamePopover fields={[CreatorUpdateFields.NAME]} />
                </span>
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
              <dt className="text-sm font-medium text-gray-500">Photo</dt>
              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <span className="flex-grow">
                  <Image
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                    height={100}
                    width={100}
                  />
                </span>
                <span className="ml-4 flex-shrink-0 flex items-start space-x-4">
                  <button
                    type="button"
                    className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                  >
                    Update
                  </button>
                  <span className="text-gray-300" aria-hidden="true">
                    |
                  </span>
                  <button
                    type="button"
                    className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                  >
                    Remove
                  </button>
                </span>
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
              <dt className="text-sm font-medium text-gray-500">Location</dt>
              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <span className="flex-grow">
                  {(organization?.metadata as any)?.location || "not yet set"}
                </span>
                <span className="ml-4 flex-shrink-0">
                  <EditDisplayNamePopover fields={[CreatorUpdateFields.LOCATION]} />
                </span>
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
              <dt className="text-sm font-medium text-gray-500">Description</dt>
              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <span className="flex-grow">a guy from somewhere doing *stuff*</span>
                <span className="ml-4 flex-shrink-0">
                  <EditDisplayNamePopover fields={[CreatorUpdateFields.DESCRIPTION]} />
                </span>
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
              <dt className="text-sm font-medium text-gray-500">Public Email</dt>{" "}
              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <span className="flex-grow">chelsea.hagon@example.com</span>
                <span className="ml-4 flex-shrink-0">
                  <EditDisplayNamePopover fields={[CreatorUpdateFields.NAME]} />
                </span>
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
              <dt className="text-sm font-medium text-gray-500">Primary Domain</dt>

              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <span className="flex-grow">
                  {organization?.defaultDomain?.domain || "batuhan.saltana.dev"}
                </span>
                <span className="ml-4 flex-shrink-0">
                  <button
                    type="button"
                    className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                  >
                    Update
                  </button>
                </span>
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
              <dt className="text-sm font-medium text-gray-500">Linked Accounts</dt>
              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <span className="flex-grow">Link your social media accounts</span>
                <span className="ml-4 flex-shrink-0">
                  <button
                    type="button"
                    className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                  >
                    Add
                  </button>
                </span>
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="mt-10 divide-y divide-gray-200">
        <div className="space-y-1">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Colours & Theme</h3>
          <p className="max-w-2xl text-sm text-gray-500">
            You can customize colors and backgrounds for your space.
          </p>
        </div>
        <div className="mt-6">
          <dl className="divide-y divide-gray-200">
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Main (text)</dt>
              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <Group className="flex-grow">
                  <Select
                    placeholder="Pick a font"
                    data={[
                      { value: "react", label: "Times New Roman" },
                      { value: "ng", label: "Helvetica" },
                      { value: "svelte", label: "Arial" },
                      { value: "vue", label: "Impact" },
                    ]}
                  />
                  <ColorInput placeholder="Pick color" />
                </Group>
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Background</dt>
              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <span className="flex-grow">
                  <ColorInput placeholder="Pick color" />
                </span>
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Titles</dt>
              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <span className="flex-grow">
                  <ColorInput placeholder="Pick color" />
                </span>
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
              <dt className="text-sm font-medium text-gray-500">Date format</dt>
              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <span className="flex-grow">DD-MM-YYYY</span>
                <span className="ml-4 flex-shrink-0 flex items-start space-x-4">
                  <button
                    type="button"
                    className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                  >
                    Update
                  </button>
                  <span className="text-gray-300" aria-hidden="true">
                    |
                  </span>
                  <button
                    type="button"
                    className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                  >
                    Remove
                  </button>
                </span>
              </dd>
            </div>
            <Switch.Group as="div" className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
              <Switch.Label as="dt" className="text-sm font-medium text-gray-500" passive>
                Hide Saltana branding (except for checkout pages)
              </Switch.Label>
              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <Switch
                  checked={automaticTimezoneEnabled}
                  onChange={setAutomaticTimezoneEnabled}
                  className={classNames(
                    automaticTimezoneEnabled ? "bg-purple-600" : "bg-gray-200",
                    "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:ml-auto"
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={classNames(
                      automaticTimezoneEnabled ? "translate-x-5" : "translate-x-0",
                      "inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                    )}
                  />
                </Switch>
              </dd>
            </Switch.Group>
            <Switch.Group
              as="div"
              className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200"
            >
              <Switch.Label as="dt" className="text-sm font-medium text-gray-500" passive>
                Auto-update applicant data
              </Switch.Label>
              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <Switch
                  checked={autoUpdateApplicantDataEnabled}
                  onChange={setAutoUpdateApplicantDataEnabled}
                  className={classNames(
                    autoUpdateApplicantDataEnabled ? "bg-purple-600" : "bg-gray-200",
                    "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:ml-auto"
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={classNames(
                      autoUpdateApplicantDataEnabled ? "translate-x-5" : "translate-x-0",
                      "inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                    )}
                  />
                </Switch>
              </dd>
            </Switch.Group>
          </dl>
        </div>
      </div>
      <div className="mt-10 divide-y divide-gray-200">
        <div className="space-y-1">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Account</h3>
          <p className="max-w-2xl text-sm text-gray-500">
            Manage how information is displayed on your account.
          </p>
        </div>
        <div className="mt-6">
          <dl className="divide-y divide-gray-200">
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Language</dt>
              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <span className="flex-grow">English</span>
                <span className="ml-4 flex-shrink-0">
                  <button
                    type="button"
                    className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                  >
                    Update
                  </button>
                </span>
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
              <dt className="text-sm font-medium text-gray-500">Date format</dt>
              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <span className="flex-grow">DD-MM-YYYY</span>
                <span className="ml-4 flex-shrink-0 flex items-start space-x-4">
                  <button
                    type="button"
                    className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                  >
                    Update
                  </button>
                  <span className="text-gray-300" aria-hidden="true">
                    |
                  </span>
                  <button
                    type="button"
                    className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                  >
                    Remove
                  </button>
                </span>
              </dd>
            </div>
            <Switch.Group as="div" className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
              <Switch.Label as="dt" className="text-sm font-medium text-gray-500" passive>
                Allow search engines to index my space
              </Switch.Label>
              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <Switch
                  checked={automaticTimezoneEnabled}
                  onChange={setAutomaticTimezoneEnabled}
                  className={classNames(
                    automaticTimezoneEnabled ? "bg-purple-600" : "bg-gray-200",
                    "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:ml-auto"
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={classNames(
                      automaticTimezoneEnabled ? "translate-x-5" : "translate-x-0",
                      "inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                    )}
                  />
                </Switch>
              </dd>
            </Switch.Group>
            <Switch.Group
              as="div"
              className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200"
            >
              <Switch.Label as="dt" className="text-sm font-medium text-gray-500" passive>
                Auto-update applicant data
              </Switch.Label>
              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <Switch
                  checked={autoUpdateApplicantDataEnabled}
                  onChange={setAutoUpdateApplicantDataEnabled}
                  className={classNames(
                    autoUpdateApplicantDataEnabled ? "bg-purple-600" : "bg-gray-200",
                    "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:ml-auto"
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={classNames(
                      autoUpdateApplicantDataEnabled ? "translate-x-5" : "translate-x-0",
                      "inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                    )}
                  />
                </Switch>
              </dd>
            </Switch.Group>
          </dl>
        </div>
      </div>
    </div>
  )
}

DashboardSettingsProfilePage.getLayout = (page) => (
  <DashboardCustomizeLayout>{page}</DashboardCustomizeLayout>
)

export default DashboardSettingsProfilePage
