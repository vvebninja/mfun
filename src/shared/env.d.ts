/// <reference types="vite/client" />

type ImportMetaEnv = {
  readonly VITE_MOCK_API_BASE_URL: string
  readonly VITE_MUSICFUN_API_BASE_URL: string
  readonly VITE_API_KEY: string
}

type ImportMeta = {
  readonly env: ImportMetaEnv
}
