import { useSession, useRouter } from "blitz"
import { Suspense, isValidElement } from "react"

type Role = "CREATOR" | "USER" | "SUPERADMIN" | "OWNER" | "ADMIN" // @TODO: refine this.
type AllowedElements = React.ReactNode
interface ShowForProps {
  role?: Role
  children: AllowedElements | ((props: { roles: Role[] | undefined }) => AllowedElements)
}

export const ShowForRole: React.FC<ShowForProps> = ({ role, children }) => {
  const { roles = [] } = useSession()
  // const router = useRouter()

  const show = role ? roles.includes(role) : true

  if (show == false) {
    return null
  }

  const renderDirectly = isValidElement(children) || typeof children !== "function"
  return <>{renderDirectly ? children : children({ roles })}</>
}

interface ShowForWrappedProps extends ShowForProps {
  fallback?: AllowedElements
}

const ShowForRoleWrapped: React.FC<ShowForWrappedProps> = ({
  role,
  children,
  fallback = "Loading...",
}) => {
  return (
    <Suspense fallback={fallback}>
      <ShowForRole role={role}>{children}</ShowForRole>
    </Suspense>
  )
}

export default ShowForRoleWrapped
