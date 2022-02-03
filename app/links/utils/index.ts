import assert from "app/core/utils"

export const PLATFORM_DOMAINS = (process.env.NEXT_PUBLIC_PLAFORM_DOMAINS as string).split(",")

assert(
  PLATFORM_DOMAINS.length > 0,
  "no default platform domains set (env: NEXT_PUBLIC_PLAFORM_DOMAINS)"
)
