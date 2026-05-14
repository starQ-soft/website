import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Lsc from './pages/Lsc.tsx'
import { translations } from './pages/translations.tsx'
import AppRouter from './router.tsx'

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}
window.scrollTo(0, 0)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter />
    {/* <App /> */}
  </StrictMode>,
)
