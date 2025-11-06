import type { ContentSection } from '../../types'

export const replication: ContentSection[] = [
  {
    type: 'subsection',
    title: 'Initial Bulk Load',
    level: 3,
    content: [
      {
        type: 'paragraph',
        content:
          'Clients must replicate feed data locally. SourceRE recommends the following strategy for each parent resource you wish to replicate:',
      },
      {
        type: 'list',
        items: [
          [
            'Request data using the resource endpoint, including any ',
            { type: 'code', text: '$filter' },
            ' and ',
            { type: 'code', text: '$select' },
            ' options you wish to use, as well as ',
            { type: 'code', text: '$expand' },
            ' for any sub-resources you wish to replicate (e.g. ',
            { type: 'code', text: '$expand=Rooms' },
            ').',
          ],
          [
            'Follow ',
            { type: 'code', text: '@odata.nextLink' },
            ' until it no longer appears in the response.',
          ],
          'If interrupted, restart replication from the beginning.',
        ],
      },
    ],
  },
  {
    type: 'subsection',
    title: 'Ongoing Updates',
    level: 3,
    content: [
      {
        type: 'paragraph',
        content: [
          'After replicating the entire dataset as required, poll for new/updated records using ',
          { type: 'code', text: 'APIModificationTimestamp' },
          ' filters. Start with the newest ',
          { type: 'code', text: 'APIModificationTimestamp' },
          ' value you have in your local system, and continue pulling until you have caught up to the current ',
          { type: 'code', text: 'APIModificationTimestamp' },
          ' value in SourceRE. We recommend a filter window of no larger than 1 hour. For example:',
        ],
      },
      {
        type: 'code',
        content:
          '$filter=APIModificationTimestamp gt 2025-05-07T00:00:00Z and APIModificationTimestamp lt 2025-05-07T01:00:00Z',
      },
      {
        type: 'paragraph',
        content:
          'Pull metadata and lookup updates no more than once per day. We recommend refreshing other data at least once per hour. Within SourceRE, data updates will occur in 10-minute intervals.',
      },
    ],
  },
  {
    type: 'subsection',
    title: 'Media',
    level: 3,
    content: [
      {
        type: 'paragraph',
        content: [
          'The ',
          { type: 'code', text: 'Media' },
          ' resource contains a ',
          { type: 'code', text: 'MediaURL' },
          ' pointing to hosted images and documents. Media can be replicated as a top level resource and as a navigation property on several resources, including: ',
          { type: 'code', text: 'Property' },
          ', ',
          { type: 'code', text: 'Office' },
          ', ',
          { type: 'code', text: 'Member' },
          ', ',
          { type: 'code', text: 'Team' },
          ', and ',
          { type: 'code', text: 'OpenHouse' },
          '.',
        ],
      },
      {
        type: 'paragraph',
        content: [
          'Important: For photos and documents, do not hotlink ',
          { type: 'code', text: 'MediaURL' },
          's in production. Always replicate these media types to your own servers.',
        ],
      },
    ],
  },
]

