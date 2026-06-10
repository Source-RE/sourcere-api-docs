import type { ContentSection } from '../../types'

export const mediaUploads: ContentSection[] = [
  {
    type: 'subsection',
    title: 'Overview',
    level: 3,
    id: 'media-overview',
    content: [
      {
        type: 'paragraph',
        content: 'Uploading media (photos or documents) involves two steps:',
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Create a Media record (with metadata)',
          'Upload the binary data stream using the edit link',
        ],
      },
    ],
  },
  {
    type: 'subsection',
    title: 'Supported MediaType Values',
    level: 3,
    id: 'supported-mediatype-values',
    content: [
      {
        type: 'table',
        headers: ['MediaType', 'Description', 'Allowed Content-Types'],
        rows: [
          ['Photo', 'Images', 'image/png, image/jpeg'],
          ['Document', 'PDFs', 'application/pdf'],
        ],
      },
      {
        type: 'paragraph',
        content: 'Note: MLSs may restrict allowed types per vendor.',
      },
    ],
  },
  {
    type: 'subsection',
    title: 'Step 1: Create Media Record',
    level: 3,
    id: 'step-1-create-media-record',
    content: [
      {
        type: 'code',
        content:
          'POST https://api.sourceredb.com/OData/Media\n\nRequest Body:\n{\n  "MediaType": "Photo",\n  "ResourceName": "Property",\n  "ResourceRecordKey": "000000000000000045994159414168114",\n  "Order": 1\n}',
      },
      {
        type: 'paragraph',
        content: 'Response:',
      },
      {
        type: 'code',
        content:
          '{\n  "@odata.id": "https://api.sourceredb.com/OData/Media(92)",\n  "@odata.editLink": "Media(92)",\n  "@odata.mediaEditLink": "Media(92)/$value",\n  "@odata.etag": "W/\\"YmluYXJ5J0FBQUFBQUFCam5NPSc=\\"",\n  "MediaStatus": "Incomplete",\n  "MediaKey": 92\n}',
      },
      {
        type: 'paragraph',
        content:
          'Note: While waiting for the content to be posted, the Media record will be of MediaStatus "Incomplete". Only records with a MediaStatus of "Complete" will be shown in any MLS Feeds aside from the current Add/Edit Feed.',
      },
    ],
  },
  {
    type: 'subsection',
    title: 'Step 2: Upload Media Content',
    level: 3,
    id: 'step-2-upload-media-content',
    content: [
      {
        type: 'code',
        content:
          'POST https://api.sourceredb.com/OData/Media(92)/$value\nHeaders:\nAuthorization: Bearer <token>\nContent-Type: image/png\n\nBody: Raw binary stream (e.g., PNG or JPEG)',
      },
      {
        type: 'paragraph',
        content: 'Response: 200 OK',
      },
      {
        type: 'paragraph',
        content: [
          'After a successful content upload, the MediaStatus will transition to "Processing" and then to "Complete". Records which are complete may have their content updated using the ',
          { type: 'code', text: 'mediaEditLink' },
          ', which will cause them to transition to "Processing" again. If the content cannot be processed, the MediaStatus will transition to "Rejected" and a ',
          { type: 'code', text: 'MediaStatusDescription' },
          ' field will be applied to the record listing the reason for rejection. The record will then have the ',
          { type: 'code', text: 'DeletedInSource' },
          ' flag applied.',
        ],
      },
    ],
  },
]
