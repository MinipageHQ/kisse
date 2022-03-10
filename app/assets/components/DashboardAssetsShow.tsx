import { Suspense, useEffect } from "react"
import { Head, Link, useRouter, useQuery, useParam, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import deleteAsset from "../mutations/deleteAsset"
import getAsset from "../queries/getAsset"
// import { RicosEditor } from 'ricos-editor';
interface AssetShowProps {
  assetId: string
  setModalTitle: (title: string) => void
}

import { User, MapPin, CircleCheck } from "tabler-icons-react"
import {
  TextInput,
  Textarea,
  Group,
  Button,
  ThemeIcon,
  Text,
  SimpleGrid,
  Accordion,
  useAccordionState,
  useMantineTheme,
} from "@mantine/core"

function Demo() {
  const [state, handlers] = useAccordionState({ total: 3, initialItem: 0 })
  const theme = useMantineTheme()
  const breakpoints = [{ maxWidth: "sm" as const, cols: 1 }]

  return (
    <Accordion state={state} onChange={handlers.setState} disableIconRotation multiple>
      <Accordion.Item label="Overview" icon={<User color={theme.colors.blue[6]} />}>
        <SimpleGrid cols={2} breakpoints={breakpoints}>
          <TextInput label="Email" placeholder="Email" required />
          <TextInput label="Full name" placeholder="Full name" required />
        </SimpleGrid>
        <Textarea
          label="Your message"
          placeholder="Message (optional)"
          mt="md"
          minRows={2}
          autosize
        />
        <Group position="right" mt="xl">
          <Button onClick={() => handlers.toggle(1)}>Next step</Button>
        </Group>
      </Accordion.Item>
      <Accordion.Item label="Deliverables" icon={<MapPin color={theme.colors.red[6]} />}>
        {/* <RicosEditor placeholder={'Type here!'} />; */}

        <SimpleGrid cols={3} breakpoints={breakpoints}>
          <TextInput label="City" placeholder="City" />
          <TextInput label="State" placeholder="State" />
          <TextInput label="Zip" placeholder="Zip" />
        </SimpleGrid>

        <Textarea
          label="Additional information"
          placeholder="Additional information"
          autosize
          mt="md"
          minRows={2}
        />

        <Group position="apart" mt="xl">
          <Button variant="default" onClick={() => handlers.toggle(0)}>
            Previous step
          </Button>
          <Button onClick={() => handlers.toggle(2)}>Next step</Button>
        </Group>
      </Accordion.Item>

      <Accordion.Item label="Pricing & Stock" icon={<MapPin color={theme.colors.red[6]} />}>
        <SimpleGrid cols={3} breakpoints={breakpoints}>
          <TextInput label="City" placeholder="City" />
          <TextInput label="State" placeholder="State" />
          <TextInput label="Zip" placeholder="Zip" />
        </SimpleGrid>

        <Textarea
          label="Additional information"
          placeholder="Additional information"
          autosize
          mt="md"
          minRows={2}
        />

        <Group position="apart" mt="xl">
          <Button variant="default" onClick={() => handlers.toggle(0)}>
            Previous step
          </Button>
          <Button onClick={() => handlers.toggle(2)}>Next step</Button>
        </Group>
      </Accordion.Item>
      <Accordion.Item label="Confirmation" icon={<CircleCheck color={theme.colors.cyan[6]} />}>
        <Text>All done!</Text>
        <Text color="dimmed" size="sm">
          We will start processing your order soon
        </Text>
        <Group position="left" mt="xl">
          <Button variant="default" onClick={() => handlers.toggle(1)}>
            Previous step
          </Button>
        </Group>
      </Accordion.Item>
    </Accordion>
  )
}
export const AssetShow = ({ assetId, setModalTitle }: AssetShowProps) => {
  const router = useRouter()
  // const assetId = useParam("assetnId", "string")
  const [deleteAssetMutation] = useMutation(deleteAsset)
  const [asset, meta] = useQuery(
    getAsset,
    { id: assetId as string },
    {
      enabled: !!assetId,
      initialData: {
        id: assetId,
        name: "",
      },
    }
  )

  useEffect(() => {
    if (meta.isFetched === true) {
      setModalTitle(`Edit ${asset?.name}`)
    }
  }, [meta.isFetched, asset?.name, setModalTitle])

  return (
    <>
      <Head>
        <title>asset {asset?.id}</title>
      </Head>

      <Demo />
      <div>
        <h1>asset {asset?.id}</h1>
        <pre>{JSON.stringify(asset, null, 2)}</pre>

        <button
          type="button"
          onClick={async () => {
            if (!asset?.id) {
              return
            }
            if (window.confirm("This will be deleted")) {
              await deleteAssetMutation({ id: asset?.id })
              router.push(Routes.AssetsPage({}))
            }
          }}
          style={{ marginLeft: "0.5rem" }}
        >
          Delete
        </button>
      </div>
    </>
  )
}

const DashboardAssetShow: BlitzPage<AssetShowProps> = ({ assetId, setModalTitle }) => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <AssetShow assetId={assetId} setModalTitle={setModalTitle} />
      </Suspense>
    </div>
  )
}
export default DashboardAssetShow
