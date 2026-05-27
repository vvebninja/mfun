import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { enableMocking } from '@/shared/api/mocks'
import { App } from './app'
import { Providers } from './providers.tsx'
import './index.css'

enableMocking().then(() => {
  const root = createRoot(document.getElementById('root')!)
  root.render(
    <StrictMode>
      <Providers>
        <App />
      </Providers>
    </StrictMode>,
  )
})
