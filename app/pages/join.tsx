import { useRouter, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import { SignupFormForCreators } from "app/auth/components/SignupForm"

const SignupPageForCreators: BlitzPage = () => {
  const router = useRouter()

  return (
    <div>
      <SignupFormForCreators onSuccess={() => router.push(Routes.CreatorOnboardingPage())} />
    </div>
  )
}

SignupPageForCreators.redirectAuthenticatedTo = "/dashboard"
SignupPageForCreators.getLayout = (page) => <Layout title="Join as a creator">{page}</Layout>

export default SignupPageForCreators
