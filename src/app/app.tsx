import { rqc } from '../shared/api/instances.ts'

function useTracks() {
  const { data, isLoading, error } = rqc.useQuery('get', '/playlists/tracks')

  return {
    tracks: data?.data,
    isLoading: !data || isLoading,
    error,
  }
}

export function App() {
  const { tracks, isLoading, error } = useTracks()

  if (isLoading) {
    return <div className="fixed h-2 w-full animate-pulse bg-blue-700" />
  }

  if (error) {
    return (
      <div className="fixed h-2 w-full animate-pulse border-t-4 border-t-red-700">
        {JSON.stringify(error)}
      </div>
    )
  }

  return (
    <div>
      <ul className="grid gap-2">
        {tracks?.map(track => (
          <li key={track.id}>
            <figure className="flex flex-col">
              <figcaption>{track.attributes.title}</figcaption>
              <audio controls src={track.attributes.attachments[0]?.url} />
            </figure>
          </li>
        ))}
      </ul>
    </div>
  )
}
