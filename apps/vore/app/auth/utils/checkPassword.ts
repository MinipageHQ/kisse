import { pwnedPassword } from "hibp"

const unsafeCheckPwnedPassword = (password: string): Promise<number> => {
  return pwnedPassword(password)
}

export const isPasswordSafe = async (password: string): Promise<boolean> => {
  try {
    const numberOfPwned = await unsafeCheckPwnedPassword(password)
    return !numberOfPwned
  } catch (error) {
    return true
  }
}
