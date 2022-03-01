import { z } from "zod"
import blockedUsernames from "data/blocked-usernames.json"
import { OrganizationModel } from "db/zod"

export const username = z
  .string()
  .min(3)
  .max(24)
  .transform((str) => str.toLowerCase().trim())
  .refine((val) => blockedUsernames.includes(val) === false, {
    message: "This username unfortunately is not allowed.",
  })

export const organizationName = z.string().transform((str) => str.trim())

export const ProfileMedia = z.object({
  type: z.enum(["IMAGE", "VIDEO", "GIF"]),
  path: z.string(),
})

export const Organization = z.object({
  name: z.string().min(1).max(24),
  slug: username,
  description: z.string().min(10).max(240).optional(),
  profileMedia: ProfileMedia.optional(),
  defaultDomainId: z.string().cuid(),
})

export const CreateOrganizationWithInviteCodeSchema = Organization.extend({
  inviteCode: z.string().min(1).max(24),
})

export const OnboardedOrganizationSchema = OrganizationModel.pick({
  name: true,
  description: true,
  profileMedia: true,
  defaultDomainId: true,
})
  .extend({
    slug: username,
    // inviteCode: z.string().min(1).max(24),
  })
  .partial({
    profileMedia: true,
  })
