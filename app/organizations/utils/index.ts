import { Organization } from "db"

/**
 * Checks if an organization has finished onboarding
 * @param organization
 * @returns
 */
export function hasFinishedOnboarding(organization: Organization) {
  if (organization.description === null) {
    return false
  }

  if (organization.name === null) {
    return false
  }

  if (organization.slug === null) {
    return false
  }

  return true
}
