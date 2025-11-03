import type { ContentSection } from '../../types'

export const deletedRecords: ContentSection[] = [
  {
    type: 'paragraph',
    content: 'Deleted records appear for 48 hours after deletion with:',
  },
  {
    type: 'code',
    content:
      '{ "DeletedInSource": true, "DeletionTimestamp": "2025-04-01T12:34:56Z" }',
  },
  {
    type: 'paragraph',
    content:
      'Updates to the DeletionTimestamp will also coincide with updates to the APIModificationTimestamp field. If a client stops pulling records for 48 hours or longer, they must reconcile deletions for a resource using the following process:',
  },
  {
    type: 'list',
    items: [
      'Pull all primary keys for the resource',
      'Compare against the primary keys in their local system',
      'Purge records from their local system whose keys are no longer found in SourceRE',
    ],
  },
]

