import type { ContentSection } from '../../types'

export const payloads: ContentSection[] = [
  {
    type: 'paragraph',
    content: 'All webhook calls will be HTTPS POST requests.',
  },
  {
    type: 'subsection',
    title: 'Push Event(s)',
    level: 3,
    id: 'push-events',
    content: [
      {
        type: 'paragraph',
        content: [
          'Body: JSON array of ',
          { type: 'code', text: 'EntityEvent' },
          ' objects',
        ],
      },
      {
        type: 'paragraph',
        content: 'Headers:',
      },
      {
        type: 'list',
        items: [
          [{ type: 'code', text: 'Content-Type: application/json' }],
          [{ type: 'code', text: 'X-SourceRe-Publisher-Name' }, ': Producer\'s name'],
          [{ type: 'code', text: 'EntityEventSource' }, ': Data context name, which is  the MLS the events belong to'],
          [{ type: 'code', text: 'X-SourceRe-Hmac-Signature-SHA2-256' }, ': Value used as a signature in the HMAC algorithm applied to the payload.'],
          [{ type: 'code', text: 'X-SourceRe-Hmac-Timestamp' }, ': Value used as a timestamp in the HMAC algorithm applied to the payload.'],
          [{ type: 'code', text: 'Authorization: Bearer {Bearer Token Value}' }],
        ],
      },
      {
        type: 'paragraph',
        content: 'Sample Payload:',
      },
      {
        type: 'code',
        content:
          '{\n  "@reso.context": "urn:reso:metadata:2.0:resource:entityevent",\n  "value": [\n    {\n      "ResourceRecordKey": "1145847398",\n      "EntityEventSequence": 80213556,\n      "ResourceName": "Property",\n      "EventTypes": [\n        "Insert"\n      ]\n    }\n    ...\n  ]\n}',
      },
    ],
  },
  {
    type: 'subsection',
    title: 'Event Object Fields',
    level: 3,
    id: 'object-fields',
    content: [
      {
        type: 'list',
        items: [
          [
            { type: 'code', text: '@reso.context' },
            ': RESO entityevent version.',
          ],
          [
            { type: 'code', text: 'ResourceRecordKey' },
            ': Primary key for the record.',
          ],
          [
            { type: 'code', text: 'EntityEventSequence' },
            ': Logical timestamp of a given event.',
          ],
          [
            { type: 'code', text: 'ResourceName' },
            ': RESO entity name (e.g. Property, Media...).',
          ],
          [
            { type: 'code', text: 'EventTypes' },
            ': Event types of that specific event, such as Insert, Update or Bulk.',
          ],
        ],
      },
    ],
  },
  {
    type: 'subsection',
    title: 'Receive Event(s)',
    level: 3,
    id: 'receive-events',
    content: [
      {
        type: 'paragraph',
        content: [
          'The structure for Receive events is identical to Push events, except instead of ',
          { type: 'code', text: 'X-SourceRe-Publisher-Name' },
          ' header ',
          { type: 'code', text: 'X-SourceRe-Application-Name' },
          ' is used:',
        ],
      },
      {
        type: 'list',
        items: [
          [{ type: 'code', text: 'X-SourceRe-Application-Name' }, ': Application\'s name'],
        ],
      }
    ],
  }
]