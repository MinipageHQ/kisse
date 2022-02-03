import * as z from "zod"
import { DomainProvider } from "@prisma/client"
import { CompleteOrganization, RelatedOrganizationModel, CompleteLink, RelatedLinkModel } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const DomainModel = z.object({
  id: z.string(),
  domain: z.string(),
  vercelId: z.string().nullish(),
  status: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
  organizationId: z.string().nullish(),
  provider: z.nativeEnum(DomainProvider),
  vercelDataSnapshot: jsonSchema,
})

export interface CompleteDomain extends z.infer<typeof DomainModel> {
  organization?: CompleteOrganization | null
  links: CompleteLink[]
  organizations: CompleteOrganization[]
}

/**
 * RelatedDomainModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedDomainModel: z.ZodSchema<CompleteDomain> = z.lazy(() => DomainModel.extend({
  organization: RelatedOrganizationModel.nullish(),
  links: RelatedLinkModel.array(),
  organizations: RelatedOrganizationModel.array(),
}))
