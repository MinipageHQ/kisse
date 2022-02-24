import * as z from "zod"
import { CompleteOrganization, RelatedOrganizationModel } from "./index"

export const WebhookModel = z.object({
  contentType: z.string(),
  createdAt: z.date(),
  event: z.string(),
  id: z.string(),
  isActive: z.boolean(),
  lastFiredAt: z.date().nullish(),
  organizationId: z.string(),
  secret: z.string().nullish(),
  updatedAt: z.date(),
  url: z.string(),
})

export interface CompleteWebhook extends z.infer<typeof WebhookModel> {
  organization: CompleteOrganization
}

/**
 * RelatedWebhookModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedWebhookModel: z.ZodSchema<CompleteWebhook> = z.lazy(() => WebhookModel.extend({
  organization: RelatedOrganizationModel,
}))
