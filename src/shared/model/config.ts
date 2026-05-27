export function getRequiredEnv<K extends keyof ImportMetaEnv>(
  name: K,
): ImportMetaEnv[K] {
  const value = import.meta.env[name]

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }
  return value
}

export const CONFIG = {
  API_BASE_URL: getRequiredEnv('VITE_MOCK_API_BASE_URL'),
  API_KEY: getRequiredEnv('VITE_API_KEY'),
}
