import clerkEventRecievedQueue from "app/api/queues/clerk-event-recieved"
import { BlitzApiRequest, BlitzApiResponse } from "blitz"

const handler = async (req: BlitzApiRequest, res: BlitzApiResponse) => {
  const { id } = await clerkEventRecievedQueue.enqueue({
    ...req.body,
  })
  console.log(`Queued a Clerk event: ${JSON.stringify({ id }, null, 2)}`)
  res.statusCode = 200
  res.setHeader("Content-Type", "application/json")
  res.end(JSON.stringify({ status: "success" }))
}

export default handler
