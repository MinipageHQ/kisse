import { useRouter, BlitzPage, Routes } from "blitz"
import { SignupFormForCreators } from "app/auth/components/SignupForm"
import AppLayout from "app/core/layouts/AppLayout"

const SignupPageForCreators: BlitzPage = () => {
  const router = useRouter()

  return (
    <div>
      <SignupFormForCreators onSuccess={() => router.push(Routes.CreatorOnboardingPage())} />
    </div>
  )
}

SignupPageForCreators.redirectAuthenticatedTo = "/dashboard"
SignupPageForCreators.getLayout = (page) => <AppLayout title="Join as a creator">{page}</AppLayout>

export default SignupPageForCreators
