import type { ApiSchemas } from '../shared/api/schemas'
import { useEffect, useState } from 'react'
import { fetchClient } from '../shared/api/instances.ts'
import { getErrorMessage } from '../shared/fetchJSON.ts'

export function useTracks() {
  const [tracks, setTracks] = useState<ApiSchemas['TrackListItemResource'][] | undefined>()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<null | string>(null)

  useEffect(() => {
    fetchClient.GET('/playlists/tracks').then((response) => {
      setTracks(response.data?.data)
    }).catch((error: unknown) => setError(getErrorMessage(error))).finally(() => setIsLoading(false))
  }, [])

  return {
    tracks,
    isLoading,
    error,
  }
}

export function App() {
  const { tracks, isLoading, error } = useTracks()

  if (isLoading) {
    return (
      <div className="fixed h-2 w-full bg-blue-700 animate-pulse" />
    )
  }

  if (error) {
    return (
      <div className="fixed h-2 w-full border-t-4 border-t-red-700 animate-pulse">{error}</div>
    )
  }

  return (
    <div>
      <ul className="grid gap-2">
        {
          tracks?.map(track => (
            <li key={track.id}>
              <figure className="flex flex-col">
                <figcaption>{track.attributes.title}</figcaption>
                <audio controls src={track.attributes.attachments[0]?.url} />
              </figure>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
