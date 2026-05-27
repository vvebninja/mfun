import type { ApiPaths } from '../schemas'
import { createOpenApiHttp } from 'openapi-msw'
import { CONFIG } from '@/shared/model/config.ts'

export const openApiHttp = createOpenApiHttp<ApiPaths>({
  baseUrl: CONFIG.API_BASE_URL,
})
