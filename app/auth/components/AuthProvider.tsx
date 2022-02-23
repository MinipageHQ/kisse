import { ClerkProvider, useSession as useClerkSession, useClerk, ClerkLoaded } from "@clerk/nextjs"
import { useMutation, useSession as useBlitzSession } from "blitz"
import { useEffect } from "react"


export default function WrappedAuthProvider({
  children,
}: {
  children: React.ReactNode
}): React.ReactNode {
  return (
    <ClerkProvider>
      {children}
    </ClerkProvider>
  )
}
