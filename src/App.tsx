import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Header } from './components/layout/Header'
import { SourceREPage } from './pages/SourceREPage'
import { ARELLOPage } from './pages/ARELLOPage'
import './index.css'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/sourcere" replace />} />
          <Route path="/sourcere" element={<Navigate to="/sourcere/overview" replace />} />
          <Route path="/sourcere/:sectionId" element={<SourceREPage />} />
          <Route path="/arello-api" element={<Navigate to="/arello-api/table-of-contents" replace />} />
          <Route path="/arello-api/:sectionId" element={<ARELLOPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

