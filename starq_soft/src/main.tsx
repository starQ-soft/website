import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Lsc from './pages/Lsc.tsx'
import { translations } from './pages/translations.tsx'
import AppRouter from './router.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter />
    {/* <App /> */}
  </StrictMode>,
)
