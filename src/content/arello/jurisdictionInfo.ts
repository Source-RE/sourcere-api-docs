import type { ContentSection } from '../../types'

export const jurisdictionInfo: ContentSection[] = [
  {
    type: 'paragraph',
    content:
      'ARELLO is constantly working with its jurisdictions to get the latest information as frequently as possible, but unfortunately, there still is not 100% participation.',
  },
  {
    type: 'paragraph',
    content: 'Endpoints and available formats:',
  },
  {
    type: 'list',
    items: [
      ['JSON: ', { type: 'code', text: 'https://www.arello.com/api/participants.cfm?format=json' }],
      ['XML: ', { type: 'code', text: 'https://www.arello.com/api/participants.cfm?format=xml' }],
      ['CSV: ', { type: 'code', text: 'https://www.arello.com/api/participants.cfm?format=csv' }],
    ],
  },
]

