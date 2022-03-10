import getCurrentOrganization from "app/organizations/queries/getCurrentOrganization"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import { useQuery } from "blitz"

export const useCurrentOrganization = () => useQuery(getCurrentOrganization, {})
