import * as z from "zod"
import { CompleteOrganization, RelatedOrganizationModel } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() =>
  z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)])
)

export const DocumentModel = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  organizationId: z.string(),
  content: jsonSchema,
  metadata: jsonSchema,
  privateMetadata: jsonSchema,
})

export interface CompleteDocument extends z.infer<typeof DocumentModel> {
  organization: CompleteOrganization
}

/**
 * RelatedDocumentModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedDocumentModel: z.ZodSchema<CompleteDocument> = z.lazy(() =>
  DocumentModel.extend({
    organization: RelatedOrganizationModel,
  })
)
