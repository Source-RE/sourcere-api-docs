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
          // 'Client: The client the producer belongs to.',
          'Application name: The application the producer belongs to.',
          // 'Data context name: The data context the producer belongs to.',
          'Producer Name: Each producer must have a unique name, used to identify the producer in webhook payloads It should have no spaces or special characters and must be between 8 and 32 characters long.',
          // 'Is active: A producer can be enabled or disabled.',
          'Entities: The entity types that for which events will be sent (Property, Media, Member, Office, OpenHouse, PropertyRooms, PropertyUnitTypes).',
          'Event types: The event types that will be sent by this producer (Insert, Update, Delete, Bulk).',
          // 'HMAC secret: Value used as a signature in the HMAC algorithm applied to the payload.',
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
          'Application name: The application the consumer belongs to.',
          // 'Data context name: The data context the consumer belongs to.',
          'Consumer Name: Each consumer must have a unique name.It should have no spaces or special characters and must be between 8 and 32 characters long.',
          // 'Is active: A consumer can be enabled or disabled.',
          'Entities: The entity types whose changes the consumer will process (Property, Media, Member, Office, OpenHouse, PropertyRooms, PropertyUnitTypes).',
          'Event types: The event types that the consumer will process (Insert, Update, Delete, Bulk).',
          'Webhook URL: The vendor\'s service that will receive the webhook events.',
          'BatchYN: If the consumer accepts batches (Y) or single events (N).',
          // 'HMAC secret: Value used as a signature in the HMAC algorithm applied to the payload.',
          // 'Bearer token: Value must be sent on the Authorization header of each request to the consumer service (Eg: Bearer XXXX).',
        ],
      },
    ],
  },
  { type: 'paragraph', content: 'SourceRE will provide unique credentials for each consumer and producer using the preferred authentication method(s).' },
]