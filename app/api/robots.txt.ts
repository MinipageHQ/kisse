import { BlitzApiHandler } from "blitz"

const handler: BlitzApiHandler = (req, res) => {
  res.statusCode = 200
  res.setHeader("Content-Type", "plain/text")
  res.end(JSON.stringify({ t: true }))
}
export default handler
