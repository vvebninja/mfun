/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MOCK_API_BASE_URL: string
  readonly VITE_MUSICFUN_API_BASE_URL: string
  readonly VITE_API_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
