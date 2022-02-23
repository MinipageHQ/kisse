import {
  CalendarIcon,
  ClockIcon,
  PhotographIcon,
  TableIcon,
  ViewBoardsIcon,
  ViewListIcon,
} from "@heroicons/react/outline"
import { LinkType, LinkProvider } from "db";
import { ReactChild } from "react"
import { z } from "zod";

// new link page is dynamic and the fields appear if they are selected
export const LinkCreateField = z.enum(["linkList", "slug", "asset", "target", "name"]);
export type LinkCreateField = z.infer<typeof LinkCreateField>;

export type LinkTypeData = {
  name: string
  createTitle: string
  type: LinkType
  provider?: LinkProvider
  description: string
  icon: (passProps: { className: string }) => ReactChild
  background: string
  createFields: LinkCreateField[]
}


const linkTypes: LinkTypeData[] = [
  {
    name: "Link List",
    createTitle: "Create a new link list",
    description: "List your relevant links all over internet in a simple page",
    type: LinkType.linklist,
    icon: ({ className }) => <ViewListIcon className={className} />,
    background: "bg-yellow-500",
    createFields: ["linkList", "slug"],
  },
  {
    name: "Checkout",
    description: "Sell documents, downloadable files and more",
    createTitle: "Create a new digital asset",
    type: LinkType.checkout,
    icon: ({ className }) => <CalendarIcon className={className} />,
    background: "bg-green-500",
    createFields: ["asset", "slug"],
  },
  {
    name: "Notion page",
    description: "Natively embed Notion content on your Saltana space",
    createTitle: "Create a new Notion page",
    type: LinkType.embed,
    provider: LinkProvider.notion,
    icon: ({ className }) => <PhotographIcon className={className} />,
    background: "bg-indigo-500",
    createFields: ["target", "slug"],
  },
  {
    name: "Redirection",
    description: "Create a link you can track and modify to share on social media",
    createTitle: "Create a new redirection",
    type: LinkType.redirect,
    icon: ({ className }) => <ViewBoardsIcon className={className} />,
    createFields: ["target", "slug"],
    background: "bg-purple-500",
  },
  {
    name: "NFT Gallery",
    description: "Create a link where you can list your NFTs across platfomrms",
    createTitle: "Create a new NFT gallery",
    type: LinkType.redirect,
    icon: ({ className }) => <ViewBoardsIcon className={className} />,
    createFields: ["target", "slug"],
    background: "bg-purple-500",
  },
  // {
  //   name: "Embed",
  //   createTitle: "Create a new embed",
  //   description:
  //     "Show your content on other platform within your Saltana space. Supports Notion, AirTable, Figma, YouTube, Twich and more!",
  //   type: "embed",
  //   icon: ({ className }) => <TableIcon className={className} />,
  //   background: "bg-blue-500",
  //   createFields: ["destination", "slug"],
  // },
]

export default linkTypes
