import { z } from "zod"

export const organizationName = z.string().transform((str) => str.trim())

export const email = z
  .string()
  .email()
  .transform((str) => str.toLowerCase().trim())

export const inviteCode = z.string().transform((str) => str.toUpperCase().trim())

export const password = z
  .string()
  .min(8)
  .max(100)
  .transform((str) => str.trim())

export const Signup = z.object({
  email,
  password,
})


export const SsoWithClerkInput = z.object({
  sessionId: z.string(),
})

export const SyncWithClerkInput = z.object({
  clerkUserId: z.string(),
})

export const Login = z.object({
  email,
  password,
})

export const ForgotPassword = z.object({
  email,
})

export const ResetPassword = z
  .object({
    password: password,
    passwordConfirmation: password,
    token: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords don't match",
    path: ["passwordConfirmation"], // set the path of the error
  })

export const ChangePassword = z.object({
  currentPassword: z.string(),
  newPassword: password,
})
