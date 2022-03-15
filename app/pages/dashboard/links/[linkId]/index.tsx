import { Head, BlitzPage, useQuery, Routes, useMutation, useParam } from "blitz"
import DashboardLinksLayout from "app/links/components/DashboardLinksLayout"
import LinksList from "app/links/components/DashboardLinksPage"
import { Fragment, Suspense, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { CheckIcon, XIcon } from "@heroicons/react/outline"
import { useRouter } from "blitz"
import { useForm, zodResolver } from "@mantine/form"

import { Alert, Drawer, Modal, Paper, Skeleton, Tabs, Title } from "@mantine/core"
import getLink from "app/links/queries/getLink"
import deleteLink from "app/links/mutations/deleteLink"
import DashboardExternalUrlPreview from "app/links/components/DashboardExternalUrlPreview"
import { TextInput, Checkbox, Button, Group, Box } from "@mantine/core"
import { Photo, MessageCircle, Settings, Container } from "tabler-icons-react"

import { UpdateLinkInput } from "app/links/validations"
import { Link } from "db"
import updateLink from "app/links/mutations/updateLink"
import { useNotifications } from "@mantine/notifications"

function LinkEditForm({ linkId, linkData }: { linkId: string; linkData: Partial<Link> }) {
  const form = useForm({
    initialValues: linkData,
    schema: zodResolver(UpdateLinkInput),
  })
  const { push } = useRouter()
  const [deleteLinkMutation] = useMutation(deleteLink)
  const [updateLinkMutation, { isLoading }] = useMutation(updateLink, {})
  const notifications = useNotifications()

  console.log("from", form)
  return (
    <>
      <Head>
        <title>link {linkId}</title>
      </Head>
      <form
        onSubmit={form.onSubmit(async (values) => {
          const id = notifications.showNotification({
            id: "update-link",
            loading: true,
            title: "Updating your link...",
            message: "We are verifying and updating your link.",
            autoClose: false,
            disallowClose: true,
          })

          try {
            await updateLinkMutation({ ...values, id: linkId })
            notifications.updateNotification(id, {
              id,
              color: "teal",
              title: "Link updated!",
              message: "It might take a few seconds for the changes to take effect",
              icon: <CheckIcon />,
              autoClose: 1000,
            })
          } catch (error) {
            notifications.updateNotification(id, {
              id,
              color: "red",
              title: "Update failed :(",
              message: `This might be a problem on our side. Error has been logged so we'll look into it`,
              icon: <CheckIcon />,
              autoClose: 1000,
            })
          }
        })}
      >
        <Tabs>
          <Tabs.Tab label="Basic">
            <TextInput
              required
              label="Target URL"
              description="The URL that this link will redirect to"
              placeholder="https://www.instagram.com/zuck"
              {...form.getInputProps("target")}
            />
          </Tabs.Tab>
          <Tabs.Tab label="SEO" disabled>
            Redirections are always public.
          </Tabs.Tab>
          <Tabs.Tab label="Access" disabled>
            Redirections are always public.
          </Tabs.Tab>
          <Tabs.Tab label="Danger zone">
            <Alert title="Careful before you break things!" variant={"outline"} color={"red"}>
              Changing the slug of a link or deleting it might cause dead links in places this link
              was shared before like social media.
            </Alert>

            <TextInput
              required
              label="domain id"
              placeholder="your@email.com"
              {...form.getInputProps("domainId")}
            />
            <TextInput
              required
              label="Slug"
              placeholder="/awesome-link"
              {...form.getInputProps("slug")}
            />
            <Button
              color={"red"}
              onClick={async () => {
                if (window.confirm("This will be deleted")) {
                  await deleteLinkMutation({ id: link?.id! })
                  push(Routes.LinksPage({}))
                }
              }}
            >
              Delete
            </Button>
          </Tabs.Tab>
        </Tabs>

        <Group position="apart" mt="md">
          <Button type="submit" fullWidth loading={isLoading}>
            Update
          </Button>
        </Group>
      </form>
    </>
  )
}

function LinkEditView({ linkId }: { linkId: string }) {
  const { push } = useRouter()

  const [link, { isFetched }] = useQuery(getLink, { id: linkId! }, {})

  if (isFetched === false) {
    return <Skeleton visible />
  }
  return (
    <>
      <Head>
        <title>link {linkId}</title>
      </Head>
      <LinkEditForm linkId={linkId} linkData={link} />
    </>
  )
}
const DashboardLinkPage: BlitzPage = (props) => {
  const { push } = useRouter()
  const linkId = useParam("linkId", "string")

  return (
    <>
      <Modal
        opened={true}
        onClose={() => push("/dashboard/links")}
        title={"Update link"}
        padding="xl"
      >
        <Suspense fallback={<Skeleton visible />}>
          <div>
            <LinkEditView linkId={linkId!} />
            {/* <DashboardExternalUrlPreview targetUrl={link.target!} /> */}
          </div>
        </Suspense>
      </Modal>
    </>
  )
}

DashboardLinkPage.authenticate = true
DashboardLinkPage.getLayout = (page) => (
  <DashboardLinksLayout>
    <Suspense fallback={<Skeleton visible />}>{page}</Suspense>
  </DashboardLinksLayout>
)

export default DashboardLinkPage
