import type { ContentSection } from '../../types'

export const errorHandling: ContentSection[] = [
  {
    type: 'table',
    headers: ['Status Code', 'Meaning'],
    rows: [
      [
        '400',
        'Valid request, but validation failed (e.g., wrong enum, missing required field)',
      ],
      ['403', 'Attempted to modify unauthorized resource or field'],
      ['404', 'Entity not found or not in vendor scope'],
      ['409', 'ETag mismatch or concurrent modification'],
      ['500', 'Internal error, retry later'],
    ],
  },
]
