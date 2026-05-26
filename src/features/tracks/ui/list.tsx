import type { TrackResource } from '../model/types'
import { useState } from 'react'
import { Track } from './track.tsx'

interface TracksListProps {
  onTrackClick: (id: TrackResource['id']) => void
  selectedTrackId: TrackResource['id'] | null
}

export function TracksList({ onTrackClick, selectedTrackId }: TracksListProps) {
  // const { tracks, isLoading, error } = useTracks()
  const [tracks] = useState<TrackResource[]>(() => {
    return JSON.parse(localStorage.getItem('tracks')!)
  })

  // if (isLoading) {
  //   return (
  //     <div>Loading...</div>
  //   )
  // }
  //
  // if (error) {
  //   return (
  //     <div>
  //       Error:
  //       {error.errors[0]?.detail}
  //     </div>
  //   )
  // }

  return (
    <ul>
      {tracks?.map(track => (
        <li key={track.id}>
          <Track
            {...track}
            isSelected={selectedTrackId === track.id}
            onTrackClick={onTrackClick}
          />
        </li>
      ))}
    </ul>
  )
}
