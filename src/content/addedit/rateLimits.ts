import type { ContentSection } from '../../types'

export const rateLimits: ContentSection[] = [
  {
    type: 'paragraph',
    content: [
      "SourceRE's standard Feed-based rate limits apply for all requests to the Add/Edit API, and further constraints are in place for write (",
      { type: 'code', text: 'POST' },
      ', ',
      { type: 'code', text: 'PATCH' },
      ', and ',
      { type: 'code', text: 'DELETE' },
      ') requests, which also apply per Feed:',
    ],
  },
  {
    type: 'list',
    items: [
      'No concurrent requests',
      'Maximum 1 write request per second',
      'Max 1,000 write requests per hour',
      'Max 10 GB uploaded per 24-hour period',
    ],
  },
  {
    type: 'paragraph',
    content: [
      'Violations result in HTTP ',
      { type: 'code', text: '429' },
      ' responses. Clients must respect back-off strategies and avoid retry storms.',
    ],
  },
]
