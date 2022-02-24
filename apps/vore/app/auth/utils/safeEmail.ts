import normalize from "normalize-email"

/**
 * Converts an email address to a unqiue, safe email
 * @param email - Valid email address
 */
const safeEmail = (input: string) => {
  // return normalize(input.toLowerCase().trim()) // this is hostile, wtf was i thinking
  return input.toLowerCase().trim()
}

export default safeEmail
