import type { ContentSection } from '../../types'

export const bestPractices: ContentSection[] = [
  {
    type: 'paragraph',
    content: 'When sending POST requests, producers should:',
  },
  {
    type: 'list',
    items: [
      'Respect 429 responses by waiting for the number of seconds specified in the Retry-After header, or using exponential backoff if the header is not present.',
      'Implement a timeout mechanism to abandon requests that exceed 15 seconds. SourceRE will respond with success or failure within this timeframe.',
      'Send events in batches of up to 1000 per-payload under heavy event volume. Even under typical event volume, it is recommended to send in batches to reduce the number of requests. Producers who do not support batching should notify SourceRE before integration.',
      'Avoid sending the same event multiple times. If an event is sent multiple times, SourceRE may reject the request with a 409 response.',
    ],
  },
  {
    type: 'paragraph',
    content: 'After receiving an event payload, clients should:',
  },
  {
    type: 'list',
    items: [
      'Track for deduplication (if batch is enabled):',
      {
        type: 'list',
        items: [
          'Resource name',
          'Resource record key',
        ],
      },
      'Pull changed records using the SourceRE RESO Web API.',
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
          'Respond with 200 OK on success on maximum 15 seconds or timeout will occur. For this reason, it is recommended to use asynchronous processing.',
        ],
      },
    ],
  },
]