import React, { useEffect } from 'react'
import { useLocation, useParams, useNavigate } from 'react-router-dom'
import { DocumentationLayout } from '../components/layout/DocumentationLayout'
import { Section } from '../components/ui/Section'
import { sourcereContent } from '../content/sourcere'

export function SourceREPage() {
  const location = useLocation()
  const { sectionId } = useParams<{ sectionId: string }>()
  const navigate = useNavigate()

  useEffect(() => {
    // If accessing via old path-based URL, redirect to hash-based
    if (sectionId) {
      navigate(`/sourcere#${sectionId}`, { replace: true })
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

