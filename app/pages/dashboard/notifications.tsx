import { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useParam, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getCurrentOrganization from "app/organizations/queries/getCurrentOrganization"
import DashboardCreatorSettingsLayout from "app/core/layouts/DashboardCustomizeLayout"
import React from "react"
import { createStyles, Card, Group, Switch, Text, Container } from "@mantine/core"

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  item: {
    "& + &": {
      paddingTop: theme.spacing.sm,
      marginTop: theme.spacing.sm,
      borderTop: `1px solid ${
        theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
      }`,
    },
  },

  switch: {
    "& *": {
      cursor: "pointer",
    },
  },

  title: {
    lineHeight: 1,
  },
}))

interface SwitchesCardProps {
  title: string
  description: string
  data: {
    title: string
    description: string
  }[]
}

export function SwitchesCard({ title, description, data }: SwitchesCardProps) {
  const { classes } = useStyles()

  const items = data.map((item) => (
    <Group position="apart" className={classes.item} noWrap spacing="xl" key={item.title}>
      <div>
        <Text>{item.title}</Text>
        <Text size="xs" color="dimmed">
          {item.description}
        </Text>
      </div>
      <Switch size="lg" />
    </Group>
  ))

  return (
    <Card withBorder radius="md" p="xl" className={classes.card}>
      <Text size="lg" className={classes.title} weight={500}>
        {title}
      </Text>
      <Text size="xs" color="dimmed" mt={3} mb="xl">
        {description}
      </Text>
      {items}
    </Card>
  )
}

const platformNotifications = {
  title: "Configure notifications",
  description: "Choose what notifications you want to receive",
  data: [
    {
      title: "Messages",
      description: "Direct messages you have received from other users",
    },
    {
      title: "Review requests",
      description: "Code review requests from your team members",
    },
    {
      title: "Comments",
      description: "Daily digest with comments on your posts",
    },
    {
      title: "Recommendations",
      description: "Digest with best community posts from previous week",
    },
  ],
}

const assetsNotifications = {
  title: "Configure notifications",
  description: "Choose what notifications you want to receive",
  data: [
    {
      title: "Messages",
      description: "Direct messages you have received from other users",
    },
    {
      title: "Review requests",
      description: "Code review requests from your team members",
    },
    {
      title: "Comments",
      description: "Daily digest with comments on your posts",
    },
    {
      title: "Recommendations",
      description: "Digest with best community posts from previous week",
    },
  ],
}
const defProps = {
  title: "Configure notifications",
  description: "Choose what notifications you want to receive",
  data: [
    {
      title: "Messages",
      description: "Direct messages you have received from other users",
    },
    {
      title: "Review requests",
      description: "Code review requests from your team members",
    },
    {
      title: "Comments",
      description: "Daily digest with comments on your posts",
    },
    {
      title: "Recommendations",
      description: "Digest with best community posts from previous week",
    },
  ],
}
export const Dashboard = () => {
  const router = useRouter()
  const [organization] = useQuery(getCurrentOrganization, {})

  return (
    <>
      <Head>
        <title>Space {organization.id}</title>
      </Head>

      <Group direction="row">
        <SwitchesCard {...platformNotifications} />
        <SwitchesCard {...assetsNotifications} />
        <SwitchesCard {...defProps} />
      </Group>
    </>
  )
}

const DashboardNotificationsPage: BlitzPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard />
      </Suspense>
    </div>
  )
}

DashboardNotificationsPage.authenticate = true
DashboardNotificationsPage.getLayout = (page) => (
  <DashboardCreatorSettingsLayout>{page}</DashboardCreatorSettingsLayout>
)

export default DashboardNotificationsPage
