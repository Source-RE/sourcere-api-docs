import type { ContentSection } from '../../types'

export const rateLimits: ContentSection[] = [
  {
    type: 'paragraph',
    content: 'Unless otherwise noted, the following rate limits apply per Feed:',
  },
  {
    type: 'list',
    items: [
      'No concurrent requests',
      'Max 3 requests per second',
      'Max 5,000 requests per hour',
    ],
  },
  {
    type: 'paragraph',
    content: [
      'Violations result in HTTP ',
      { type: 'code', text: '429' },
      ' responses.',
    ],
  },
  {
    type: 'paragraph',
    content: [
      'The Rate Limits do not apply to the JWT Bearer Token, but to your Feed. Every time you press "Copy Bearer Token" on the Feed within the Data Marketplace, a new token is generated. This does not invalidate previous tokens. Every token is valid for 1 year.',
    ],
  },
]

