import type { ContentSection } from '../../types'

export const authentication: ContentSection[] = [
  {
    type: 'paragraph',
    content: 'One or all of the following methods must be used:',
  },
  {
    type: 'list',
    items: [
      'Bearer Token using standard OAuth2.',
      'Signature verification with HMAC using algorithm SHA2-256.',
      {
        type: 'list',
        items: [
          [
            'Signature format: ',
            { type: 'code', text: "'{timestamp}.{body}'" },
          ],
          'Replay prevention: A valid signature will be considered expired after 3 minutes.',
        ],
      },
    ],
  },
]