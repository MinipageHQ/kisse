import { ClerkLoaded, useClerk, useSession } from "@clerk/clerk-react"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import { useMutation, Link, Routes } from "blitz"
import { Suspense } from "react"
import logout from "../mutations/logout"
import WrappedAuthProvider from "./AuthProvider"

const UserInfo = () => {
  const currentUser = useCurrentUser()
  const clerk = useClerk()
  const [logoutMutation] = useMutation(logout)

  if (currentUser) {
    return (
      <>
        <button
          className="button small"
          onClick={async () => {
            await Promise.all([clerk.signOut(), logoutMutation()])
          }}
        >
          Logout
        </button>
        <div>
          User id: <code>{currentUser.id}</code>
          <br />
          User role: <code>{currentUser.roles.join(', ')}</code>
        </div>
      </>
    )
  } else {
    return (
      <>
        <Link href={Routes.SignupPage()}>
          <a className="button small">
            <strong>Sign Up</strong>
          </a>
        </Link>
        <Link href={Routes.LoginPage({})}>
          <a className="button small">
            <strong>Login</strong>
          </a>
        </Link>
      </>
    )
  }
}

export const UserInfoWrapped = () => (
  <Suspense fallback="Loading...">
    <WrappedAuthProvider>
      <ClerkLoaded>
        <UserInfo />
      </ClerkLoaded>
    </WrappedAuthProvider>
  </Suspense>
)
export default UserInfoWrapped
