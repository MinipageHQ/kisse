import { BlitzApiHandler } from "blitz"

const handler: BlitzApiHandler = (req, res) => {
  res.statusCode = 200
  res.setHeader("Content-Type", "application/json")
  res.end(JSON.stringify({ t: true }))
}
export default handler
