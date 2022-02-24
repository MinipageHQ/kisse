import { z } from "zod"

export const domain = z
  .string()
  .regex(
    /^(?:[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.)?[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}/
  )
  .transform((str) => str.toLowerCase().trim())

export const CreateDomain = z.object({
  domain,
})
