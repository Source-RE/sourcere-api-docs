import type { ContentSection } from '../../types'

export const operations: ContentSection[] = [
  {
    type: 'paragraph',
    content: [
      'You may ',
      { type: 'code', text: 'POST' },
      ', ',
      { type: 'code', text: 'PATCH' },
      ', or ',
      { type: 'code', text: 'DELETE' },
      ' to standard OData endpoints:',
    ],
  },
  {
    type: 'code',
    content: 'https://api.sourceredb.com/OData/{EntityType}',
  },
  {
    type: 'subsection',
    title: 'Headers',
    level: 3,
    id: 'headers',
    content: [
      {
        type: 'table',
        headers: ['Header', 'Description'],
        rows: [
          ['Authorization', 'Bearer <access_token>'],
          [
            'If-Match',
            "Required for updates and deletes, using the resource's @odata.etag",
          ],
          [
            'Prefer',
            'Use return=representation to return the updated entity. Use odata.metadata=full to include annotations (recommended)',
          ],
          ['Content-Type', 'application/json for entity bodies'],
        ],
      },
    ],
  },
  {
    type: 'subsection',
    title: 'Example: POST a New Property',
    level: 3,
    id: 'example-post',
    content: [
      {
        type: 'code',
        content:
          'POST https://api.sourceredb.com/OData/Property\n\nRequest Body:\n{\n  "StandardStatus": "Active",\n  "ListPrice": 350000,\n  "StreetAddress": "123 Main St",\n  "City": "Jamestown",\n  "StateOrProvince": "CO",\n  "PostalCode": "88499"\n}',
      },
      {
        type: 'paragraph',
        content: 'Headers:',
      },
      {
        type: 'code',
        content:
          'Authorization: Bearer <token>\nContent-Type: application/json\nPrefer: return=representation, odata.metadata=full',
      },
      {
        type: 'paragraph',
        content: 'Response:',
      },
      {
        type: 'code',
        content:
          '{\n  "@odata.etag": "W/\\"YmluYXJ5J0FBQUFBQUFCaHlwPSc=\\"",\n  "ListingKey": "000000000000000045994159414168114",\n  ...\n}',
      },
      {
        type: 'paragraph',
        content: [
          'Save the ',
          { type: 'code', text: '@odata.etag' },
          ' of each response, it must be passed as part of the ',
          { type: 'code', text: 'If-Match' },
          ' header for updates.',
        ],
      },
    ],
  },
  {
    type: 'subsection',
    title: 'Example: PATCH an Existing Property',
    level: 3,
    id: 'example-patch',
    content: [
      {
        type: 'code',
        content:
          "PATCH https://api.sourceredb.com/OData/Property('000000000000000045994159414168114')\nHeaders:\nIf-Match: W/\"YmluYXJ5J0FBQUFBQUFCaHlwPSc=\"\nAuthorization: Bearer <token>\nPrefer: return=representation\nContent-Type: application/json\n\nBody:\n{\n  \"ListPrice\": 345000\n}",
      },
    ],
  },
]
