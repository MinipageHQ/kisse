import stripeEventRecievedQueue from "app/api/queues/stripe-event-recieved"
import { BlitzApiRequest, BlitzApiResponse } from "blitz"

const handler = async (req: BlitzApiRequest, res: BlitzApiResponse) => {
  const { id } = await stripeEventRecievedQueue.enqueue({ ...req.body })
  console.log(`Queued a Stripe event: ${JSON.stringify({ id }, null, 2)}`)
  res.statusCode = 200
  res.setHeader("Content-Type", "application/json")
  res.end(JSON.stringify({ status: "success" }))
}

export default handler
