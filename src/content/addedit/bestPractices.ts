import type { ContentSection } from '../../types'

export const bestPractices: ContentSection[] = [
  {
    type: 'list',
    items: [
      [
        'Always use the latest ',
        { type: 'code', text: '@odata.etag' },
        ' in the ',
        { type: 'code', text: 'If-Match' },
        ' header when updating records. It is not applicable for Media uploads.',
      ],
      [
        'Use ',
        { type: 'code', text: 'Prefer: odata.metadata=full' },
        ' to debug errors during development',
      ],
      [
        'Contact the MLS if receiving ',
        { type: 'code', text: '403' },
        ' errors — permissions are MLS-controlled',
      ],
      [
        'Retry temporary failures (',
        { type: 'code', text: '500/503' },
        ') with exponential backoff',
      ],
      [
        'Pull updated metadata from ',
        { type: 'code', text: '$metadata' },
        ' if field definitions change',
      ],
    ],
  },
]
