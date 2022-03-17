import { Suspense, useEffect, useState } from "react"
import { Head, Link, useRouter, useQuery, useParam, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import deleteAsset from "../mutations/deleteAsset"
import getAsset from "../queries/getAsset"
// import { RicosEditor } from 'ricos-editor';
interface AssetShowProps {
  assetId: string
  setModalTitle: (title: string) => void
}

import { CardStackPlusIcon, CircleIcon } from "@radix-ui/react-icons"
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
  Skeleton,
  Tabs,
} from "@mantine/core"
import { Tab } from "@headlessui/react"

function Demo() {
  const [activeTab, setActiveTab] = useState(0)
  const theme = useMantineTheme()
  const breakpoints = [{ maxWidth: "sm" as const, cols: 1 }]

  return (
    <Tabs active={activeTab} onTabChange={setActiveTab}>
      <Tabs.Tab label="Overview" icon={<CardStackPlusIcon color={theme.colors.blue[6]} />}>
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
          <Button onClick={() => setActiveTab(1)}>Next step</Button>
        </Group>
      </Tabs.Tab>
      <Tabs.Tab label="Deliverables" icon={<CircleIcon color={theme.colors.red[6]} />}>
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
          <Button variant="default" onClick={() => setActiveTab(0)}>
            Previous step
          </Button>
          <Button onClick={() => setActiveTab(2)}>Next step</Button>
        </Group>
      </Tabs.Tab>

      <Tabs.Tab label="Pricing & Stock" icon={<CircleIcon color={theme.colors.red[6]} />}>
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
          <Button variant="default" onClick={() => setActiveTab(0)}>
            Previous step
          </Button>
          <Button onClick={() => setActiveTab(2)}>Next step</Button>
        </Group>
      </Tabs.Tab>
      <Tabs.Tab label="Danger Zone" icon={<CircleIcon color={theme.colors.cyan[6]} />}>
        <Text>All done!</Text>
        <Text color="dimmed" size="sm">
          We will start processing your order soon
        </Text>
        <Group position="left" mt="xl">
          <Button variant="default" onClick={() => setActiveTab(1)}>
            Previous step
          </Button>
        </Group>
      </Tabs.Tab>
    </Tabs>
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
        <title>Asset {asset?.id}</title>
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
              router.push(Routes.DashboardAssetsPage({}))
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
    <Suspense fallback={<Skeleton visible />}>
      <AssetShow assetId={assetId} setModalTitle={setModalTitle} />
    </Suspense>
  )
}
export default DashboardAssetShow
