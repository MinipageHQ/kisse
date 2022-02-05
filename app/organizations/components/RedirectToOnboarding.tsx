import { Routes, useRouter } from "blitz";
import { Suspense, useEffect } from "react";
import { useCurrentOrganization } from "../hooks/useCurrentOrganization";
import { OnboardedOrganizationSchema } from "../validations";

export default function RedirectToOnboarding() {
  const { push } = useRouter();
  const organization = useCurrentOrganization()


  // useEffect(() => {
  //   try {
  //     OnboardedOrganizationSchema.parse(organization)
  //   } catch (error) {
  //     push(Routes.CreatorOnboardingPage())
  //   }
  // }, [organization, push])

  return null
}
