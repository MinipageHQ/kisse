import { Link } from "blitz"
import { useCurrentUser } from "../hooks/useCurrentUser"

const getCreatorDashboardLink = (basePath = "") =>
  function _DashboardLink({ children, href = "", ...props }) {
    // const { user } = useCurrentUser()

    const user = { username: "batuhan " }
    return (
      <Link
        // href={`/dashboard/${user?.username || user?.id || "me"}${basePath}${href}`}
        href={`/dashboard/${basePath}${href}`}
        {...props}
        passHref
      >
        {children}
      </Link>
    )
  }

export const CreatorDashboardLink = getCreatorDashboardLink()
export const CreatorDashboardLinksLink = getCreatorDashboardLink("/links")
export const CreatorDashboardAssetsLink = getCreatorDashboardLink("/assets")
export const CreatorDashboardOrdersLink = getCreatorDashboardLink("/assets/orders")

export function UserDashboardLink({ children, href = "/assets", ...props }) {
  return (
    <Link href={`/my${href}`} {...props} passHref>
      {children}
    </Link>
  )
}

export function CurrentCreatorSpaceLink({ children, href = "", ...props }) {
  // const { creator } = useCreatorSpace()
  const creator = { data: { username: "batuhan" } }
  return (
    <Link href={`/${creator.data.username}/${href}`} {...props} passHref>
      {children}
    </Link>
  )
}

export function DefaultLink({ children, ...props }) {
  return (
    <Link href="/" {...props} passHref>
      {children}
    </Link>
  )
}
