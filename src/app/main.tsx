import { createRoot } from 'react-dom/client'
import { App } from './app'
import { Providers } from './providers.tsx'
import './index.css'

const root = createRoot(document.getElementById('root')!)
root.render(
  <Providers>
    <App />
  </Providers>,
)
