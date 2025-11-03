import React, { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { DocumentationLayout } from '../components/layout/DocumentationLayout'
import { Section } from '../components/ui/Section'
import { TableOfContents } from '../components/ui/TableOfContents'
import { arelloContent } from '../content/arello'

export function ARELLOPage() {
  const { sectionId } = useParams<{ sectionId: string }>()
  const previousSectionId = useRef<string | undefined>()

  useEffect(() => {
    if (sectionId) {
      // Only scroll if navigating from one section to another (not on initial load)
      const isNavigation = previousSectionId.current !== undefined && previousSectionId.current !== sectionId
      
      if (isNavigation) {
        setTimeout(() => {
          const element = document.getElementById(sectionId)
          if (element) {
            const offset = element.offsetTop - 60 // Account for header
            window.scrollTo({
              top: offset,
              behavior: 'smooth',
            })
          }
        }, 100)
      }
      
      previousSectionId.current = sectionId
    }
  }, [sectionId])

  return (
    <DocumentationLayout title={arelloContent.title} sections={arelloContent.sections}>
      <p>
        <em>Last Revision: 10/26/2025</em>
      </p>
      {arelloContent.sections.map((section) => {
        // Special handling for table of contents
        if (section.id === 'table-of-contents') {
          return (
            <Section
              key={section.id}
              id={section.id}
              title={section.title}
              content={[]}
            >
              <TableOfContents sections={arelloContent.sections.filter((s) => s.id !== 'table-of-contents')} />
            </Section>
          )
        }

        const content = arelloContent.content[section.id as keyof typeof arelloContent.content]
        if (!content || content.length === 0) return null

        return (
          <Section
            key={section.id}
            id={section.id}
            title={section.title}
            content={content}
          />
        )
      })}
    </DocumentationLayout>
  )
}

