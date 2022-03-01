import { Suspense } from "react"
import {
  Head as BlitzHead,
  Link,
  useRouter,
  useQuery,
  useMutation,
  useParam,
  BlitzPage,
  Routes,
  QueryClient,
  dehydrate,
  getQueryKey,
  invokeWithMiddleware,
  GetServerSidePropsContext,
} from "blitz"
import OrganizationCreateForm, {
  FORM_ERROR,
} from "app/organizations/components/OrganizationCreateForm"
import AppLayout from "app/core/layouts/AppLayout"
import { CreateOrganizationWithInviteCodeSchema } from "app/organizations/validations"
import createOrganization from "app/organizations/mutations/createOrganization"
import { Box, Container, Group, Paper, Text, Title } from "@mantine/core"
import getDomains from "app/domains/queries/getDomains"

export const CreateAnOrganization = () => {
  const router = useRouter()
  const [createOrganizationMutation] = useMutation(createOrganization)

  return (
    <Paper padding="md" shadow="xs">
      <Group position="center" direction="column" grow spacing={15}>
        <Title order={2}>Create your space on Saltana ✨</Title>

        <Text>
          Let’s get started by filling in the information below to create your new presence on the
          web.
        </Text>

        <OrganizationCreateForm
          submitText="Start using Saltana"
          submitTextWhenLoading="Crafting your profile..."
          submitProps={{
            className:
              "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm",
          }}
          schema={CreateOrganizationWithInviteCodeSchema}
          initialValues={{ inviteCode: router.query.inviteCode as string }}
          onSubmit={async (values) => {
            try {
              const updated = await createOrganizationMutation({
                ...values,
              })
              // await setQueryData(updated)
              router.push(Routes.DashboardWelcomePage())
            } catch (error: any) {
              console.error(error)
              return {
                [FORM_ERROR]: error.toString(),
              }
            }
          }}
        />
      </Group>
    </Paper>
  )
}

const CreateAnOrganizationPage: BlitzPage = () => {
  return (
    <>
      <BlitzHead>
        <title>Create your space on Saltana</title>
      </BlitzHead>

      <Container size={"xs"}>
        <CreateAnOrganization />
      </Container>
    </>
  )
}

CreateAnOrganizationPage.authenticate = true
CreateAnOrganizationPage.getLayout = (page) => <AppLayout>{page}</AppLayout>
CreateAnOrganizationPage.suppressFirstRenderFlicker = true

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const queryClient = new QueryClient()
  // IMPORTANT: the second argument to getQueryKey must exactly match the second argument to useQuery down below
  const queryKey = getQueryKey(getDomains, { only: "platform" })
  await queryClient.prefetchQuery(queryKey, () =>
    invokeWithMiddleware(getDomains, { only: "platform" }, context)
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default CreateAnOrganizationPage
