import type { ContentSection } from '../../types'

export const fieldAndRecordRestrictions: ContentSection[] = [
  {
    type: 'paragraph',
    content:
      'Permissions are defined per Plan by the MLS and enforced automatically. This may include:',
  },
  {
    type: 'list',
    items: ['Which fields are included', 'Which records are visible'],
  },
  {
    type: 'paragraph',
    content:
      'The MLS may also define display and usage restrictions for specific fields and entities. Clients must consult the MLS for display and usage guidelines.',
  },
]

