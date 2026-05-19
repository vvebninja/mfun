import { useEffect, useState } from 'react'
import { tracksApi } from '../shared/api/tracksApi.ts'
import { getErrorMessage } from '../shared/fetchJSON.ts'

export function App() {
  const [tracks, setTracks] = useState(() => {
    const storedTracks = localStorage.getItem('tracks')
    return storedTracks ? JSON.parse(storedTracks) : []
  })

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<null | string>(null)

  useEffect(() => {
    tracksApi.getAll().then((tracks) => {
      setTracks(tracks)
      localStorage.setItem('tracks', JSON.stringify(tracks))
    }).catch((error) => {
      setError(getErrorMessage(error))
    }).finally(() => setIsLoading(false))
  }, [])

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
    <div>{JSON.stringify(tracks)}</div>
  )
}
