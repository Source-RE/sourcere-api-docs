import React, { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { DocumentationLayout } from '../components/layout/DocumentationLayout'
import { Section } from '../components/ui/Section'
import { sourcereContent } from '../content/sourcere'

export function SourceREPage() {
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
    <DocumentationLayout title={sourcereContent.title} sections={sourcereContent.sections}>
      {sourcereContent.sections.map((section) => {
        const content = sourcereContent.content[section.id as keyof typeof sourcereContent.content]
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

