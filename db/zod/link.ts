import * as z from "zod"
import { LinkType, LinkProvider } from "@prisma/client"
import {
  CompleteOrganization,
  RelatedOrganizationModel,
  CompleteDomain,
  RelatedDomainModel,
} from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() =>
  z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)])
)

export const LinkModel = z.object({
  id: z.string().cuid().optional(),
  slug: z.string(),
  type: z.nativeEnum(LinkType),
  target: z.string().url({ message: "Target must be a valid URL" }),
  provider: z.nativeEnum(LinkProvider).nullish(),
  organizationId: z.string(),
  domainId: z.string(),
  metadata: jsonSchema,
  privateMetadata: jsonSchema,
  statsSnapshot: jsonSchema,
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteLink extends z.infer<typeof LinkModel> {
  organization: CompleteOrganization
  domain: CompleteDomain
}

/**
 * RelatedLinkModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedLinkModel: z.ZodSchema<CompleteLink> = z.lazy(() =>
  LinkModel.extend({
    organization: RelatedOrganizationModel,
    domain: RelatedDomainModel,
  })
)
