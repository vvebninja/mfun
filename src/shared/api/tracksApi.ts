import { fetchJSON } from '../fetchJSON.ts'

export function getRequiredEnv<K extends keyof ImportMetaEnv>(name: K): ImportMetaEnv[K] {
  const value = import.meta.env[name]

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }
  return value
}

const publicTracksEndpoints = {
  all: '/playlists/tracks', // Get list of all tracks in all playlists.
  trackDetailsById(trackId: string) { // Get track details by ID
    return `/playlists/tracks/${encodeURIComponent(trackId)}`
  },
}

function buildUrl(baseUrl: string, endpoint: string) {
  const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint

  return new URL(cleanEndpoint, cleanBase).toString()
}

export async function fetchTracksJSON<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  return fetchJSON(buildUrl(getRequiredEnv('VITE_API_BASE_URL'), endpoint), {
    ...options,
    headers: {
      ...options.headers,
      'api-key': '9235fd4a-2acf-4edd-af3c-b9c79722000d',
    },
  })
}

export const tracksApi = {
  async getAll() {
    return fetchTracksJSON(publicTracksEndpoints.all)
  },
  async getTrackDetailsById(trackId: string) {
    return fetchTracksJSON(publicTracksEndpoints.trackDetailsById(trackId))
  },
}
