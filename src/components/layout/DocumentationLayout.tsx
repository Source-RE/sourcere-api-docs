import React from 'react'
import { useLocation } from 'react-router-dom'
import '../../styles/components/main.css'
import { Sidebar } from './Sidebar'
import type { SectionMetadata } from '../../types'

interface DocumentationLayoutProps {
  title: string
  sections: SectionMetadata[]
  children: React.ReactNode
}

export function DocumentationLayout({ title, sections, children }: DocumentationLayoutProps) {
  const location = useLocation()
  const basePath = location.pathname.split('/').slice(0, -1).join('/') || '/sourcere'

  return (
    <>
      <Sidebar sections={sections} basePath={basePath} />
      <main className="main">
        <div className="main__content">
          <h1 className="main__title">{title}</h1>
          {children}
        </div>
      </main>
    </>
  )
}

