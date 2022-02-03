import * as z from "zod"
import { ExternalProfileService } from "@prisma/client"
import { CompleteOrganization, RelatedOrganizationModel } from "./index"

export const ExternalProfilesModel = z.object({
  id: z.string(),
  externalId: z.string(),
  service: z.nativeEnum(ExternalProfileService),
  createdAt: z.date(),
  updatedAt: z.date(),
  verificationLastCheckedAt: z.date(),
  verificationPassed: z.string(),
  verificationEntity: z.string(),
  organizationId: z.string(),
})

export interface CompleteExternalProfiles extends z.infer<typeof ExternalProfilesModel> {
  organization: CompleteOrganization
}

/**
 * RelatedExternalProfilesModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedExternalProfilesModel: z.ZodSchema<CompleteExternalProfiles> = z.lazy(() => ExternalProfilesModel.extend({
  organization: RelatedOrganizationModel,
}))
