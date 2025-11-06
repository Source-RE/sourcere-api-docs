import React from 'react'
import { useSidebar } from '../../hooks/useSidebar'
import type { SectionMetadata } from '../../types'
import '../../styles/components/sidebar.css'

interface SidebarProps {
  sections: SectionMetadata[]
}

export function Sidebar({ sections }: SidebarProps) {
  const { activeSectionId, scrollToSection } = useSidebar(sections)

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    scrollToSection(sectionId)
  }

  return (
    <aside className="sidebar">
      <nav className="sidebar__nav">
        <ul className="sidebar__list">
          {sections.map((section) => (
            <li key={section.id} className="sidebar__item">
              <a
                href={`#${section.id}`}
                onClick={(e) => handleLinkClick(e, section.id)}
                className={`sidebar__link ${
                  activeSectionId === section.id ? 'sidebar__link--active' : ''
                }`}
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

