import { BlitzApiHandler } from "blitz"

const handler: BlitzApiHandler = async (req, res) => {
  res.statusCode = 200
  res.setHeader("Content-Type", "text/plain")
  res.end(JSON.stringify({ t: true }))
}
export default handler
