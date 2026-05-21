import type { ApiPaths } from './schemas'
import createFetchClient from 'openapi-fetch'
import { CONFIG } from '../model/config.ts'

export const fetchClient = createFetchClient<ApiPaths>({
  baseUrl: CONFIG.API_BASE_URL,
  headers: {
    'api-key': CONFIG.API_KEY,
  },
})
