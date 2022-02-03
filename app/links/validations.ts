import { LinkModel } from "db/zod"

export const CreateLinkInput = LinkModel.pick({
  slug: true,
  type: true,
  target: true,
  provider: true,
  metadata: true,
  domainId: true,
})
