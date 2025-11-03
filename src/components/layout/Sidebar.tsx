import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSidebar } from '../../hooks/useSidebar'
import type { SectionMetadata } from '../../types'
import '../../styles/components/sidebar.css'

interface SidebarProps {
  sections: SectionMetadata[]
  basePath: string
}

export function Sidebar({ sections, basePath }: SidebarProps) {
  const { sectionId: urlSectionId } = useParams<{ sectionId: string }>()
  const { activeSectionId } = useSidebar(sections)

  // Use URL section ID if available, otherwise use scroll-based active section
  const currentActiveId = urlSectionId || activeSectionId

  return (
    <aside className="sidebar">
      <nav className="sidebar__nav">
        <ul className="sidebar__list">
          {sections.map((section) => (
            <li key={section.id} className="sidebar__item">
              <Link
                to={`${basePath}/${section.id}`}
                className={`sidebar__link ${
                  currentActiveId === section.id ? 'sidebar__link--active' : ''
                }`}
              >
                {section.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

