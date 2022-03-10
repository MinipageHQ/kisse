import { useCurrentUser } from "app/core/hooks/useCurrentUser"

export const useCurrentOrganization = () => {
  const [user, result] = useCurrentUser()
  const organization = user?.memberships[0]?.organization
  return [organization, result]
}
