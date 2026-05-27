import type { TrackResource } from '../model/types.d.ts'
import { cn } from '@/shared/lib/css.ts'
import { useTrackDetails } from '../model/use-track-details.ts'

type TrackDetailsProps = {
  id: TrackResource['id']
  className?: string
}

export function TrackDetails({ id, className }: TrackDetailsProps) {
  const { trackDetails, isLoading, error } = useTrackDetails(id)

  return (
    <div className={cn(className)}>
      <div>Track Details</div>
      {!error && isLoading && <div>Loading details...</div>}

      {error && (
        <div>
          Error:
          {JSON.stringify(error)}
        </div>
      )}

      {!error && !isLoading && (
        <span>{trackDetails?.attributes?.lyrics || 'No lyrics'}</span>
      )}
    </div>
  )
}
