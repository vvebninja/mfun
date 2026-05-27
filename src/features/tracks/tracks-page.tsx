import type { TrackResource } from './model/types.d.ts'
import { useState } from 'react'
import { TracksList } from './ui/list.tsx'
import { TrackTitle } from './ui/title.tsx'

export function TracksPage() {
  const [selectedTrackId, setSelectedTrackId]
    = useState<TrackResource['id']>('')

  const handleTrackClick = (id: TrackResource['id']) => {
    setSelectedTrackId(id)
  }

  return (
    <div>
      <TrackTitle />
      <div className="flex gap-4">
        <TracksList
          onTrackClick={handleTrackClick}
          selectedTrackId={selectedTrackId}
        />
      </div>
    </div>
  )
}
