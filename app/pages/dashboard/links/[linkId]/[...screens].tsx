import React, { Suspense, useMemo } from "react"
import _ from "lodash"

import Basic from "app/links/components/LinkEditBasicTab"
import Workflows from "app/links/components/LinkEditWorkflowsTab"
import Access from "app/links/components/LinkEditAccessTab"
import Customize from "app/links/components/LinkEditCustomizeTab"
import Advanced from "app/links/components/LinkEditAdvancedTab"
import { useRouter } from "blitz"

const screens = [
  {
    name: "Basic",
    path: "",
    Component: Basic,
    current: false,
    onLinkTypes: ["*"],
  },
  {
    name: "Workflows",
    path: "workflows",
    Component: Workflows,
    current: false,
    onLinkTypes: ["*"],
  },
  {
    name: "Customize",
    path: "customize",
    Component: Customize,
    current: false,
    onLinkTypes: ["embed", "checkout"],
  },
]

export default function CreatorDashboardLinkScreen() {
  const router = useRouter()
  const { link, creator, asset, isLink, isLoading } = useCreatorSpace()

  const [screenPath] = (router.query.screens as string[]) || [""]
  const CurrentScreen = useMemo(() => screens.find(({ path }) => path === screenPath), [screenPath])

  const linkType = link.data?.linkType
  const filteredScreens = useMemo(
    () =>
      screens
        .filter(({ onLinkTypes }) => {
          if (onLinkTypes.includes("*")) {
            return true
          }

          if (onLinkTypes.includes(linkType)) {
            return true
          }

          return false
        })
        .map((item) => ({
          ...item,
          current: CurrentScreen.name === item.name,
        })),
    [linkType, CurrentScreen]
  )

  return (
    <main className="max-w-4xl mx-auto pt-0 pb-12 px-4 lg:pb-10">
      <div className="pt-5">
        <CurrentScreen.Component link={link} />
      </div>
    </main>
  )

  // return (
  //   <UpdateCreatorLinkProvider link={link} creator={creator} asset={asset}>
  //     <DashboardShell
  //       subHeader={
  //         <CreatorDashboardLinkSubHeader link={link} isLink={isLink} />
  //       }
  //     >
  //       <main className="max-w-4xl mx-auto pt-0 pb-12 px-4 lg:pb-10">
  //         <CreatorDashboardLinkSidebar
  //           screens={filteredScreens}
  //           linkId={link.data.id}
  //         />
  //         <div className="pt-5">
  //           <CurrentScreen.Component link={link} />
  //         </div>
  //       </main>
  //     </DashboardShell>
  //   </UpdateCreatorLinkProvider>
  // )
}
