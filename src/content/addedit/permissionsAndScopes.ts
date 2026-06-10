import type { ContentSection } from '../../types'

export const permissionsAndScopes: ContentSection[] = [
  {
    type: 'paragraph',
    content: [
      'Each MLS assigns Add/Edit scopes per resource (e.g. ',
      { type: 'code', text: 'hivemls:property' },
      '). Vendors may only perform Add/Edit operations for resources and fields explicitly permitted by the MLS.',
    ],
  },
  {
    type: 'list',
    items: [
      'Permissions are record- and field-specific',
      'Vendors may be able to read a record but not modify it',
      [
        'Unauthorized write attempts result in ',
        { type: 'code', text: '403 Forbidden' },
      ],
    ],
  },
]
