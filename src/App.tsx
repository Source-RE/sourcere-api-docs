import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Header } from './components/layout/Header'
import { SourceREPage } from './pages/SourceREPage'
import { ARELLOPage } from './pages/ARELLOPage'
import './index.css'
import './App.css'
import { WebhooksPage } from './pages/WebhooksPage'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/sourcere" replace />} />
          
          <Route path="/sourcere" element={<SourceREPage />} />
          <Route path="/sourcere/:sectionId" element={<SourceREPage />} />
          
          <Route path="/arello-api" element={<ARELLOPage />} />
          <Route path="/arello-api/:sectionId" element={<ARELLOPage />} />

          <Route path="/webhooks" element={<WebhooksPage />} />
          <Route path="/webhooks/:sectionId" element={<WebhooksPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
