import React from 'react'
import '../../styles/components/section.css'
import { ContentRenderer } from './ContentRenderer'
import type { ContentSection } from '../../types'

interface SectionProps {
  id: string
  title: string
  level?: number
  content: ContentSection[]
  children?: React.ReactNode
}

export function Section({ id, title, level = 2, content, children }: SectionProps) {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements
  const headingClass =
    level === 3
      ? 'section__heading section__heading--level-3'
      : level === 4
        ? 'section__heading section__heading--level-4'
        : 'section__heading'

  return (
    <section id={id} className="section">
      <HeadingTag className={headingClass}>{title}</HeadingTag>
      <div className="section__content">
        {content.length > 0 && <ContentRenderer sections={content} />}
        {children}
      </div>
    </section>
  )
}

