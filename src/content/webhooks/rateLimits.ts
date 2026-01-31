import type { ContentSection } from '../../types'

export const rateLimits: ContentSection[] = [
  {
    type: 'paragraph',
    content: 'Webhook event Producers have their own rate limits, separate from the SourceRE RESO Web API. The following rate limits apply:',
  },
  {
    type: 'list',
    items: [
      'No more than 4 requests per second',
      'No more than 10,000 requests per hour',
    ],
  },
  {
    type: 'paragraph',
    content: 'Violations result in HTTP 429 responses. A 429 response may include a Retry-After header with the number of seconds to wait before retrying the request.',
  },
]