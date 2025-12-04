export interface LinkContent {
  type: 'link'
  href: string
  text: string
}

export interface InlineCodeContent {
  type: 'code'
  text: string
}

export interface ParagraphContent {
  type: 'paragraph'
  content: string | (string | LinkContent | InlineCodeContent)[]
}

export interface CodeContent {
  type: 'code'
  language?: string
  content: string
}

export interface ListContent {
  type: 'list'
  ordered?: boolean
  items: (string | (string | InlineCodeContent | LinkContent)[] | ListContent)[]
}

export interface SubSectionContent {
  type: 'subsection'
  title: string
  level?: number
  id?: string
  content: ContentSection[]
}

export interface TableContent {
  type: 'table'
  headers: string[]
  rows: string[][]
}

export type ContentSection =
  | ParagraphContent
  | CodeContent
  | ListContent
  | SubSectionContent
  | TableContent

export interface SectionMetadata {
  id: string
  title: string
}

export interface DocumentationContent {
  title: string
  sections: SectionMetadata[]
  content: Record<string, ContentSection[]>
}

