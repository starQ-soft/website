"use client"
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import Lsc from "./pages/Lsc"
import { LanguageProvider } from "./LanguageContext"

const AppRouter: React.FC = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/love-startup-cofounder" element={<Lsc />} />
        </Routes>
      </BrowserRouter >
    </LanguageProvider>
  )
}

export default AppRouter
