"use client"
import React from "react"
import { HashRouter, Routes, Route } from 'react-router-dom'
import App from "./App"
import Lsc from "./pages/Lsc"
import { LanguageProvider } from "./LanguageContext"

const AppRouter: React.FC = () => {
  return (
    <LanguageProvider>
      <React.StrictMode>
        <HashRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/love-startup-cofounder" element={<Lsc />} />
          </Routes>
        </HashRouter>
      </React.StrictMode>
    </LanguageProvider>
  )
}

export default AppRouter
