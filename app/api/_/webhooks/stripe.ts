import { BlitzApiRequest, BlitzApiResponse } from "blitz"
import { stripeWebhooksQueue } from "bull/queues"

const handler = async (req: BlitzApiRequest, res: BlitzApiResponse) => {
  const { id } = await stripeWebhooksQueue.add(req.body.type, req.body)
  console.log(`Queued a Stripe event: ${JSON.stringify({ id }, null, 2)}`)
  res.statusCode = 200
  res.setHeader("Content-Type", "application/json")
  res.end(JSON.stringify({ status: "success" }))
}

export default handler
