import type { ContentSection } from '../../types'

export const validationNotes: ContentSection[] = [
  {
    type: 'list',
    items: [
      [
        'You must POST media within one hour after creating the Media record, otherwise the MediaStatus will transition to "Rejected" and the Media record will be deleted (first through application of the ',
        { type: 'code', text: 'DeletedInSource' },
        ' flag, then through removal).',
      ],
      "SourceRE places a 1MB size limit on uploaded files. If a Vendor needs to upload larger images or documents and cannot fit the requirement using image compression, they should reach out to SourceRE's API support team.",
      {
        type: 'list',
        items: [
          'MLSs may enforce:',
          {
            type: 'list',
            items: [
              'MediaType and Content Type restrictions',
              'Total media count limit per record',
            ],
          },
        ],
      },
    ],
  },
]
