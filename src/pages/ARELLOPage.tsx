import React, { useEffect } from 'react'
import { useLocation, useParams, useNavigate } from 'react-router-dom'
import { DocumentationLayout } from '../components/layout/DocumentationLayout'
import { Section } from '../components/ui/Section'
import { arelloContent } from '../content/arello'

export function ARELLOPage() {
  const location = useLocation()
  const { sectionId } = useParams<{ sectionId: string }>()
  const navigate = useNavigate()

  useEffect(() => {
    // If accessing via old path-based URL, redirect to hash-based
    if (sectionId) {
      navigate(`/arello-api#${sectionId}`, { replace: true })
      return
    }

    // Handle hash-based navigation for deep linking
    if (location.hash) {
      const hashSectionId = location.hash.substring(1) // Remove the '#'
      const element = document.getElementById(hashSectionId)
      if (element) {
        setTimeout(() => {
          const offset = element.offsetTop - 60 // Account for header
          window.scrollTo({
            top: offset,
            behavior: 'smooth',
          })
        }, 100)
      }
    }
  }, [sectionId, location.hash, navigate])

  return (
    <DocumentationLayout title={arelloContent.title} sections={arelloContent.sections}>
      <p>
        <em>Last Revision: 10/26/2025</em>
      </p>
      {arelloContent.sections.map((section) => {
        // Special handling for table of contents
        if (section.id === 'table-of-contents') {
          const tocContent = arelloContent.content['table-of-contents']
          return (
            <Section
              key={section.id}
              id={section.id}
              title={section.title}
              content={tocContent}
            />
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

