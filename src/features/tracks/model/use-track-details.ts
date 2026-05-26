import type { TrackResource } from './types'
import { rqc } from '../../../shared/api/instances.ts'

export function useTrackDetails(trackId: TrackResource['id']) {
  const { data, isLoading, error } = rqc.useQuery(
    'get',
    '/playlists/tracks/{trackId}',
    {
      params: {
        path: {
          trackId,
        },
      },
    },
  )

  return {
    trackDetails: data?.data,
    isLoading: isLoading || !data,
    error,
  }
}
