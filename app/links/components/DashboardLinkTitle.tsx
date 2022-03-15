import { Link } from "db"

export default function DashboardLinkTitle({ link }: { link: Partial<Link> }) {
  return (
    <>
      <span className="text-gray-500 font-normal">{link.domain.domain}</span>/{link.slug} &gt;{" "}
      {link.target}
    </>
  )
}
