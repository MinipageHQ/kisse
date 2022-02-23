import { useRouter, BlitzPage, useMutation, useSession as useBlitzSession } from "blitz"
import Layout from "app/core/layouts/Layout"
import { LoginForm } from "app/auth/components/LoginForm"
import AppLayout from "app/core/layouts/AppLayout"
import { ClerkLoaded, SignedIn, SignIn, useClerk, useSession } from "@clerk/nextjs"
import ssoWithClerk from "app/auth/mutations/ssoWithClerk"
import { useEffect } from "react"

const LoginSSOClerkPage: BlitzPage = () => {

  const clerk = useClerk()
  const blitzSession = useBlitzSession()
  const [ssoWithClerkMutation, meta] = useMutation(ssoWithClerk, {
    retry: false
  })

  const hasBlitzSession = blitzSession.isLoading === false && blitzSession.userId !== null
  const clerkSessionId =
    clerk.session !== null && clerk.session !== undefined ? clerk.session.id : null
  const isLoading = blitzSession.isLoading === true || meta.isLoading === true

  const shouldRunMutation = isLoading === false && clerkSessionId !== null && hasBlitzSession === false && meta.isIdle === true
  useEffect(() => {
    console.log("clerk", clerk.session)
    console.log("blitzSession", blitzSession)
  }, [clerk, blitzSession])

  useEffect(() => {

    console.log(shouldRunMutation)
    if (shouldRunMutation === true) {
      ssoWithClerkMutation({
        sessionId: clerkSessionId as string,
      })
    }

  }, [shouldRunMutation, clerkSessionId, ssoWithClerkMutation])
  return (
    <div>
      {JSON.stringify(meta, null, 2)}
      Logging you in...
    </div>
  )
}

LoginSSOClerkPage.redirectAuthenticatedTo = "/"
LoginSSOClerkPage.getLayout = (page) => (
  <AppLayout title="Logging you in..." showUserBox={false}>
    <ClerkLoaded><SignedIn>{page}</SignedIn></ClerkLoaded>
  </AppLayout>
)

export default LoginSSOClerkPage
