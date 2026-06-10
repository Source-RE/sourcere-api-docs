import type { ContentSection } from '../../types'

export const authentication: ContentSection[] = [
  {
    type: 'paragraph',
    content: 'SourceRE uses OAuth 2.0 Client Credentials for Add/Edit access.',
  },
  {
    type: 'paragraph',
    content: [
      'Before setting up an integration, Add/Edit Partners will log into the SourceRE Vendor portal and access the Add/Edit Feeds. Here they will see their unique client Id and client secret, as well as a list of MLSs who have approved them as an Add/Edit partner, and the available scopes for each MLS. The scopes are strings in the format ',
      { type: 'code', text: '{MLS Identifier}:{Resource Name}' },
      ' which relate to entity types for a given MLS. The Vendor will use the provided credentials and scopes to generate JWTs which can be used as Bearer tokens in Add/Edit requests to the SourceRE API. The Vendor is encouraged to request only the scopes necessary within the context of a given area of their system. The Vendor may have multiple tokens active at once. Each token may only contain scopes for one MLS.',
    ],
  },
  {
    type: 'subsection',
    title: 'Token Endpoint',
    level: 3,
    id: 'token-endpoint',
    content: [
      {
        type: 'paragraph',
        content: [
          'POST to: ',
          { type: 'code', text: 'https://api.sourceredb.com/token' },
        ],
      },
      {
        type: 'paragraph',
        content: [
          'Headers: ',
          { type: 'code', text: 'Content-Type: application/x-www-form-urlencoded' },
        ],
      },
      {
        type: 'paragraph',
        content: 'Body Example:',
      },
      {
        type: 'code',
        content:
          'client_id=your_client_id\nclient_secret=your_client_secret\ngrant_type=client_credentials\nscope=hivemls:property hivemls:media',
      },
      {
        type: 'paragraph',
        content: 'Note: All scopes per a given request must be for the same MLS.',
      },
    ],
  },
  {
    type: 'subsection',
    title: 'Refreshing Tokens',
    level: 3,
    id: 'refreshing-tokens',
    content: [
      {
        type: 'paragraph',
        content: 'Tokens are valid for 8 hours. Refresh them using:',
      },
      {
        type: 'code',
        content: 'POST to:\nhttps://api.sourceredb.com/refresh',
      },
      {
        type: 'paragraph',
        content: 'Include your refresh token in the request body.',
      },
    ],
  },
]
