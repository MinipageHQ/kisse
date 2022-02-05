import { useCurrentUser } from "app/core/hooks/useCurrentUser"

export const useCurrentOrganization = () => {
  const user = useCurrentUser()
  const organization = user?.memberships[0]?.organization
  return organization
}
