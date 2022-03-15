import Stripe from "stripe"

const stripeApiKey = process.env.STRIPE_API_KEY

if (!stripeApiKey) {
  throw new Error("STRIPE_API_KEY is not set")
}

const stripe = new Stripe(stripeApiKey, {
  apiVersion: "2020-08-27",
})

export default stripe
