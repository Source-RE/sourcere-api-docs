import type { ContentSection } from '../../types'

export const searchApiDetails: ContentSection[] = [
  {
    type: 'subsection',
    title: 'Interface',
    level: 3,
    content: [
      {
        type: 'paragraph',
        content:
          'The ARELLO Search API expects an HTTP POST request with URL-encoded form parameters. The service returns results in JSON format. TLS encryption is required.',
      },
      {
        type: 'paragraph',
        content: [
          'The web service endpoint URL is: ',
          { type: 'code', text: 'https://api.sourceredb.com/Search' },
          '. The same URL is used for live and testing environments; use the "searchMode" parameter to switch.',
        ],
      },
    ],
  },
  {
    type: 'subsection',
    title: 'Formatting the Request',
    level: 3,
    content: [
      {
        type: 'paragraph',
        content:
          'The web service expects to receive an HTTP POST request with URL-encoded form parameters. This is a standard POST request just like you\'d make through a web browser.',
      },
      {
        type: 'paragraph',
        content: [
          'The JWT Bearer Token for your ARELLO data Feed must be included in the ',
          { type: 'code', text: 'Authorization' },
          ' header. This token may be copied from your Feed card within the Data Marketplace.',
        ],
      },
      {
        type: 'code',
        content:
          'POST /Search HTTP/1.1\nHost: api.sourceredb.com\nContent-Type: application/x-www-form-urlencoded\nAuthorization: Bearer <your_token>\n\njurisdiction=AL&licenseNumber=12345&lastName=doe&firstName=johnny',
      },
    ],
  },
]

