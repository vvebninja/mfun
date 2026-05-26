import { rqc } from '../../../shared/api/instances.ts'

export function useTracks() {
  const { data, isLoading, error } = rqc.useQuery('get', '/playlists/tracks')

  return {
    tracks: data?.data,
    isLoading: isLoading || !data,
    error,
  }
}
