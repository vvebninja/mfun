import { delay, http, HttpResponse } from 'msw'
import { openApiHttp } from './http.ts'
import tracks from './tracks.json'

export const handlers = [
  http.all('*', async () => {
    await delay(1500)
  }),
  openApiHttp.get('/playlists/tracks', () => {
    return HttpResponse.json({
      // @ts-expect-error TODO: mock data shape does not exactly match generated OpenAPI response type
      data: tracks,
    })
  }),
]
