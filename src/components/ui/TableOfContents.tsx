import React from 'react'
import type { SectionMetadata } from '../../types'
import '../../styles/components/ui.css'

interface TableOfContentsProps {
  sections: SectionMetadata[]
}

export function TableOfContents({ sections }: TableOfContentsProps) {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = element.offsetTop - 60
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      })
    }
  }

  return (
    <ul>
      {sections.map((section) => (
        <li key={section.id}>
          <a href={`#${section.id}`} onClick={(e) => handleLinkClick(e, section.id)}>
            {section.title}
          </a>
        </li>
      ))}
    </ul>
  )
}

