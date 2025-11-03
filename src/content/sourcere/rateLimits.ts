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
]

