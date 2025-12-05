import type { ContentSection } from '../../types'

export const bestPractices: ContentSection[] = [
  {
    type: 'paragraph',
    content: 'After receiving an event, clients should:',
  },
  {
    type: 'list',
    items: [
      'Track for deduplication:',
      {
        type: 'list',
        items: [
          'Resource name',
          'Resource record key',
          'Entity event sequence',
        ],
      },
      'Pull records using the Web API as needed because webhooks only notify of changes not the change itself.',
      'Acknowledge POSTs quickly, even if full processing is deferred.',
    ],
  },
  {
    type: 'subsection',
    title: 'Recommendations for Clients',
    level: 3,
    id: 'client-recs',
    content: [
      {
        type: 'paragraph',
        content: 'The consumer webhook service must:',
      },
      {
        type: 'list',
        items: [
          'Be secured via HTTPS.',
          'Respond with 200 OK on success on maximum 10 seconds or timeout will occur.',
          'Queue or asynchronously process events.',
        ],
      },
    ],
  },
]