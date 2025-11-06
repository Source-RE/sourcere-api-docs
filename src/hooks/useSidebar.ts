import { useEffect, useState } from 'react'
import type { SectionMetadata } from '../types'

/**
 * Custom hook to manage sidebar navigation based on section metadata
 * This replaces DOM manipulation with React patterns
 */
export function useSidebar(sections: SectionMetadata[]) {
  const [activeSectionId, setActiveSectionId] = useState<string>('')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 60 // Account for header
      let currentId = ''

      // Find which section is currently in view
      sections.forEach((section) => {
        const element = document.getElementById(section.id)
        if (element) {
          const offset = element.offsetTop
          if (scrollPos >= offset) {
            currentId = section.id
          }
        }
      })

      // If near bottom, highlight last section
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const isNearBottom = scrollPos + windowHeight >= documentHeight - 100

      if (isNearBottom && sections.length > 0) {
        const lastSection = sections[sections.length - 1]
        currentId = lastSection.id
      }

      setActiveSectionId(currentId)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = element.offsetTop - 60 // Account for header
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      })
    }
  }

  return { sections, activeSectionId, scrollToSection }
}

