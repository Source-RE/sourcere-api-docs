import type { ContentSection } from '../../types'

export const authentication: ContentSection[] = [
  {
    type: 'paragraph',
    content: [
      'The JWT bearer token must be included in the ',
      { type: 'code', text: 'Authorization' },
      ' header for all API requests.',
    ],
  },
  {
    type: 'code',
    content: 'Authorization: Bearer <your_token>',
  },
  {
    type: 'paragraph',
    content:
      'These tokens are long-lived and should be stored securely. Tokens are scoped to a specific Feed and can only access data from that feed.',
  },
]

