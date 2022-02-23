import DashboardLayout from "app/core/layouts/DashboardLayout"
import { BlitzPage, getSession } from "blitz"
import db from "db"
import stripe from "integrations/stripe"


export const getServerSideProps = async ({ req, res }) => {
  const session = await getSession(req, res)

  const returnUrl = `${process.env.NEXT_PUBLIC_PLATFORM_BASE}/dashboard`
  if (session.defaultOrgId) {
    const organization = await db.organization.findFirst({
      where: {
        id: session.defaultOrgId,
      },
      select: {
        stripeSellerId: true,
      },
    })

    if (organization && organization.stripeSellerId) {
      try {
        const links = await stripe.accounts.createLoginLink(organization.stripeSellerId, {
          redirect_url: returnUrl
        })
        return {
          redirect: {
            destination: links.url,
            permanent: false,
          },
        }
      } catch (error) {
        if (error.type === "StripeInvalidRequestError") {
          const rawMessage = error.raw.message
          if (
            rawMessage ===
            "Cannot create a login link for an account that has not completed onboarding."
          ) {
            const links = await stripe.accountLinks.create({
              account: organization.stripeSellerId,
              type: "account_onboarding",
              return_url: returnUrl,
              refresh_url: returnUrl,
            })
            return {
              redirect: {
                destination: links.url,
                permanent: false,
              },
            }
          }
        } else {
          console.error("Unknown error", error)
        }
      }
    }
  }

  return { props: {} }
}

const DashboardPayoutsPage: BlitzPage = () => {
  return <div>Something went wrong and we can't connect you to our payment provider.</div>
}

DashboardPayoutsPage.authenticate = true
DashboardPayoutsPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>

export default DashboardPayoutsPage
