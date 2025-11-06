import React from 'react'
import '../../styles/components/main.css'
import { Sidebar } from './Sidebar'
import type { SectionMetadata } from '../../types'

interface DocumentationLayoutProps {
  title: string
  sections: SectionMetadata[]
  children: React.ReactNode
}

export function DocumentationLayout({ title, sections, children }: DocumentationLayoutProps) {
  return (
    <>
      <Sidebar sections={sections} />
      <main className="main">
        <div className="main__content">
          <h1 className="main__title">{title}</h1>
          {children}
        </div>
      </main>
    </>
  )
}

