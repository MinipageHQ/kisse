import DashboardLayout from "app/core/layouts/DashboardLayout"
import { BlitzPage, GetServerSideProps, getSession } from "blitz"
import db from "db"
import stripe from "integrations/stripe"

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession(req, res)

  const returnUrl = `${process.env.NEXT_PUBLIC_PLATFORM_BASE}/dashboard`
  if (session.userId) {
    const user = await db.user.findFirst({
      where: {
        id: session.userId,
      },
      select: {
        stripeCustomerId: true,
      },
    })

    if (user && user.stripeCustomerId) {
      try {
        const links = await stripe.billingPortal.sessions.create({
          customer: user.stripeCustomerId,
          return_url: returnUrl,
          // redirect_url: returnUrl,
        })

        return {
          redirect: {
            destination: links.url,
            permanent: false,
          },
        }
      } catch (error: any) {
        if (error && error.type === "StripeInvalidRequestError") {
          const rawMessage = error.raw.message
          if (
            rawMessage ===
            "Cannot create a login link for an account that has not completed onboarding."
          ) {
            // const links = await stripe.accountLinks.create({
            //   account: organization.stripeSellerId,
            //   type: "account_onboarding",
            //   return_url: returnUrl,
            //   refresh_url: returnUrl,
            // })
            // return {
            //   redirect: {
            //     destination: links.url,
            //     permanent: false,
            //   },
            // }
          }
        } else {
          console.error("Unknown error", error)
        }
      }
    }
  }

  return { props: {} }
}

const MyPaymentsPage: BlitzPage = () => {
  return <div>Something went wrong and we can&apos;t connect you to our payment provider.</div>
}

MyPaymentsPage.authenticate = true
MyPaymentsPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>

export default MyPaymentsPage
