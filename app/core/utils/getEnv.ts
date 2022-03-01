export default function getEnv(key: string) {
  const value = process.env[key]

  if (value === null || value === undefined || value === "") {
    throw new Error(`MISSING_ENV_VARIABLE: ${key}`)
  }

  return value
}
