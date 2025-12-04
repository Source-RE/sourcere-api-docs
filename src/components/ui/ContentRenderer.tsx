import type { ContentSection, LinkContent } from '../../types'
import { CodeBlock } from './CodeBlock'
import { Table } from './Table'
import { InlineCodeContent } from '../../types/content'

interface ContentRendererProps {
  sections: ContentSection[]
}

export function ContentRenderer({ sections }: ContentRendererProps) {
  const renderListItem = (item: any, itemIndex: number) => {
    if (item && typeof item === 'object' && item.type === 'list') {
        const ListTag = item.ordered ? 'ol' : 'ul'
        return (
            <ListTag key={itemIndex}>
                {item.items.map((subItem: any, subIndex: number) => 
                    renderListItem(subItem, subIndex)
                )}
            </ListTag>
        )
    }

    if (typeof item === 'string') {
      return <li key={itemIndex}>{item}</li>
    }

    if (Array.isArray(item)) {
        return (
          <li key={itemIndex}>
            {item.map((part, partIndex) => {
              if (typeof part === 'string') {
                return <span key={partIndex}>{part}</span>
              }
              if (part.type === 'code') {
                return <code key={partIndex}>{part.text}</code>
              }
              if (part.type === 'link') {
                const link = part as LinkContent
                return (
                  <a
                    key={partIndex}
                    href={link.href}
                    target={link.href.startsWith('#') ? undefined : "_blank"}
                    rel={link.href.startsWith('#') ? undefined : "noopener noreferrer"}
                    onClick={(e) => {
                        if (link.href.startsWith('#')) {
                            e.preventDefault()
                            const element = document.getElementById(link.href.replace('#', ''))
                            if (element) {
                                const offset = element.offsetTop - 60
                                window.scrollTo({
                                    top: offset,
                                    behavior: 'smooth',
                                })
                            }
                        }
                    }}
                  >
                    {link.text}
                  </a>
                )
              }
              return null
            })}
          </li>
        )
    }
    
    return null;
  }

  const renderSection = (section: ContentSection, key: string | number) => {
    switch (section.type) {
      case 'paragraph':
        if (Array.isArray(section.content)) {
          return (
            <p key={key}>
              {section.content.map((part, partIndex) => {
                if (typeof part === 'string') {
                  return <span key={partIndex}>{part}</span>
                }
                if (part.type === 'link') {
                  const link = part as LinkContent
                  return (
                    <a
                      key={partIndex}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.text}
                    </a>
                  )
                }
                if (part.type === 'code') {
                  const inlineCode = part as InlineCodeContent
                  return <code key={partIndex}>{inlineCode.text}</code>
                }
                return null
              })}
            </p>
          )
        }
        return <p key={key}>{section.content}</p>

      case 'code':
        return (
          <CodeBlock key={key} className={section.language}>
            {section.content}
          </CodeBlock>
        )

      case 'list':
        const ListTag = section.ordered ? 'ol' : 'ul'
        return (
          <ListTag key={key}>
            {section.items.map((item, itemIndex) => renderListItem(item, itemIndex))}
          </ListTag>
        )

      case 'subsection':
        const HeadingTag = `h${section.level || 3}` as keyof JSX.IntrinsicElements
        const subsectionId = section.id || section.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
        return (
          <div key={key} id={subsectionId}>
            <HeadingTag>{section.title}</HeadingTag>
            {section.content.map((subSection, subIndex) =>
              renderSection(subSection, `${key}-${subIndex}`)
            )}
          </div>
        )

      case 'table':
        return (
          <Table key={key} headers={section.headers} rows={section.rows} />
        )

      default:
        return null
    }
  }

  return <>{sections.map((section, index) => renderSection(section, index))}</>
}

