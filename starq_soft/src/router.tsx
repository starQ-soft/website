"use client"
import React, { useLayoutEffect } from "react"
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import App from "./App"
import Lsc from "./pages/Lsc"
import NotFound from "./pages/NotFound"
import { LanguageProvider } from "./LanguageContext"

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [pathname])

  return null
}

const AppRouter: React.FC = () => {
  return (
    <LanguageProvider>
      <React.StrictMode>
        <HashRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/love-startup-cofounder" element={<Lsc />} />
            <Route path="/lsc" element={<Lsc />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </React.StrictMode>
    </LanguageProvider>
  )
}

export default AppRouter
