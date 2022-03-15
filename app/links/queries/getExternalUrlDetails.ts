const metascraper = require("metascraper")([
  require("metascraper-author")(),
  require("metascraper-date")(),
  require("metascraper-description")(),
  require("metascraper-image")(),
  require("metascraper-logo")(),
  require("metascraper-clearbit")(),
  require("metascraper-publisher")(),
  require("metascraper-title")(),
  require("metascraper-url")(),
])

import got from "got"
import { resolver, NotFoundError } from "blitz"
import { z } from "zod"

const GetExternalUrlDetailsSchema = z.object({
  // This accepts type of undefined, but is required at runtime
  targetUrl: z.string().url(),
})

export default resolver.pipe(
  resolver.zod(GetExternalUrlDetailsSchema),

  async ({ targetUrl }) => {
    const { body: html, url } = await got(targetUrl)
    const metadata = await metascraper({ html, url })

    if (!metadata) throw new NotFoundError()

    return metadata
  }
)
