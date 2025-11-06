import type { ContentSection } from '../../types'

export const updatedRecords: ContentSection[] = [
  {
    type: 'paragraph',
    content:
      'The ModificationTimestamp indicates the time in UTC at which the record was last updated in the MLS source system. The APIModificationTimestamp indicates the time in UTC at which the record was last updated in SourceRE.',
  },
  {
    type: 'code',
    content:
      '{ "ModificationTimestamp": "2025-04-01T12:34:56Z", "APIModificationTimestamp": "2025-04-01T12:39:49Z" }',
  },
]

