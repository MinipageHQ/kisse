import { useRouter, BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"
import { LoginForm } from "app/auth/components/LoginForm"
import AppLayout from "app/core/layouts/AppLayout"
import { SignedIn, SignedOut, SignIn, useSession } from "@clerk/nextjs"
import { useEffect } from "react"
import WrappedAuthProvider from "app/auth/components/AuthProvider"

const RedirectToSSO = () => {
  const router = useRouter()

  useEffect(() => {
    router.push("/auth/sso/clerk")
  }, [router])
  return null

}
const LoginPage: BlitzPage = () => {

  return (
    <div>
      <SignedOut><SignIn /></SignedOut>
      <SignedIn><RedirectToSSO /></SignedIn>
      {/* <LoginForm
        onSuccess={(_user) => {
          const next = router.query.next ? decodeURIComponent(router.query.next as string) : "/"
        router.push(next)
        }}
      /> */}
    </div>
  )
}

LoginPage.redirectAuthenticatedTo = "/"
LoginPage.getLayout = (page) => (
  <AppLayout title="Log In" showUserBox={false}>
    <WrappedAuthProvider>  {page}</WrappedAuthProvider>

  </AppLayout>
)

export default LoginPage
