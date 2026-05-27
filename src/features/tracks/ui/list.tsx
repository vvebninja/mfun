import type { TrackResource } from '../model/types.d.ts'
import { useTracks } from '@/features/tracks/model/use-tracks.ts'
import { Track } from './track.tsx'

type TracksListProps = {
  onTrackClick: (id: TrackResource['id']) => void
  selectedTrackId: TrackResource['id'] | null
}

export function TracksList({ onTrackClick, selectedTrackId }: TracksListProps) {
  const { tracks, isLoading, error } = useTracks()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return (
      <div>
        Error:
        {JSON.stringify(error)}
      </div>
    )
  }

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
