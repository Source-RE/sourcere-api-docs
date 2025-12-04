import type { ContentSection } from '../../types'

export const resources: ContentSection[] = [
  {
    type: 'paragraph',
    content:
      'The resource coverage of Webhooks can be made for any top-level RESO resource supported by the Feed, including:',
  },
  {
    type: 'list',
    items: [
      'Property',
      'Media',
      'Member',
      'Office',
      'Teams',
      'Contacts',
      '...and more, depending on your metadata',
    ],
  },
  {
    type: 'paragraph',
    content: 'You may specify a subset of entity types to reduce delivery volume.',
  },
]