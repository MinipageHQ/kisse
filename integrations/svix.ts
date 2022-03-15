import { Svix } from "svix"

const svixAuthToken = process.env.SVIX_AUTH_TOKEN

if (!svixAuthToken) {
  throw new Error("SVIX_AUTH_TOKEN is not set")
}

const svix = new Svix(svixAuthToken)

export default svix
