import { useLocation, useParams, useNavigate } from 'react-router-dom'
import { DocumentationLayout } from '../components/layout/DocumentationLayout'
import { Section } from '../components/ui/Section'
import { addeditContent } from '../content/addedit'
import { useEffect } from 'react'

export function AddEditPage() {
  const location = useLocation()
  const { sectionId } = useParams<{ sectionId: string }>()
  const navigate = useNavigate()

  useEffect(() => {
    if (sectionId) {
      navigate(`/addedit#${sectionId}`, { replace: true })
      return
    }

    if (location.hash) {
      const hashSectionId = location.hash.substring(1)
      const element = document.getElementById(hashSectionId)
      if (element) {
        setTimeout(() => {
          const offset = element.offsetTop - 60
          window.scrollTo({
            top: offset,
            behavior: 'smooth',
          })
        }, 100)
      }
    }
  }, [sectionId, location.hash, navigate])

  return (
    <DocumentationLayout title={addeditContent.title} sections={addeditContent.sections}>
      {addeditContent.sections.map((section) => {
        if (section.id === 'table-of-contents') {
          const tocContent = addeditContent.content['table-of-contents']
          return (
            <Section
              key={section.id}
              id={section.id}
              title={section.title}
              content={tocContent}
            />
          )
        }

        const content = addeditContent.content[section.id as keyof typeof addeditContent.content]
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
