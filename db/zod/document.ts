import * as z from "zod"
import { CompleteOrganization, RelatedOrganizationModel } from "./index"

export const DocumentModel = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  organizationId: z.string(),
})

export interface CompleteDocument extends z.infer<typeof DocumentModel> {
  organization: CompleteOrganization
}

/**
 * RelatedDocumentModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedDocumentModel: z.ZodSchema<CompleteDocument> = z.lazy(() => DocumentModel.extend({
  organization: RelatedOrganizationModel,
}))
