import type { ContentSection } from '../../types'

export const configuration: ContentSection[] = [
  {
    type: 'paragraph',
    content: 'Each vendor may configure one or more webhook producers and consumers per Feed.',
  },
  {
    type: 'subsection',
    title: 'Producer',
    level: 3,
    id: 'producer-config',
    content: [
      {
        type: 'paragraph',
        content: 'To create a new producer you must provide the following information:',
      },
      {
        type: 'list',
        items: [
          'Client: The client the producer belongs to.',
          'Application name: The application the producer belongs to.',
          'Data context name: The data context the producer belongs to.',
          'Name: Each producer must have a unique name.',
          'Is active: A producer can be enabled or disabled.',
          'Entities: The entity types that will be processed (Eg: Property, Media...).',
          'Event types: The event types that will be processed (Eg: Insert, Bulk...).',
          'HMAC secret: Value used as a signature in the HMAC algorithm applied to the payload.',
        ],
      },
    ],
  },
  {
    type: 'subsection',
    title: 'Consumer',
    level: 3,
    id: 'consumer-config',
    content: [
      {
        type: 'paragraph',
        content: 'To create a new consumer you must provide the following information:',
      },
      {
        type: 'list',
        items: [
          'Client: The client the consumer belongs to.',
          'Application name: The application the consumer belongs to.',
          'Data context name: The data context the consumer belongs to.',
          'Name: Each consumer must have a unique name.',
          'Is active: A consumer can be enabled or disabled.',
          'Entities: To which entity changes the consumer will listen for (Eg: Property, Media...).',
          'Event types: To which event types the consumer will listen for (Eg: Insert, Bulk...).',
          'Webhook url: The vendor\'s service that will receive the webhook events.',
          'Is batch: If the consumer accepts batches or single events.',
          'HMAC secret: Value used as a signature in the HMAC algorithm applied to the payload.',
          'Bearer token: Value must be sent on the Authorization header of each request to the consumer service (Eg: Bearer XXXX).',
        ],
      },
    ],
  },
]