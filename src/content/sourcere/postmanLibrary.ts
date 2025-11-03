import type { ContentSection } from '../../types'

export const postmanLibrary: ContentSection[] = [
  {
    type: 'paragraph',
    content: [
      'A Postman library is available at this link: ',
      {
        type: 'link',
        href: 'https://documenter.getpostman.com/view/21580732/2sB3B8qsiw#8f584668-163c-464f-81e8-86a1555a3962',
        text: 'SourceRE Postman Library',
      },
    ],
  },
  {
    type: 'paragraph',
    content:
      'It contains examples of how to retrieve metadata, lookup values, and data from the SourceRE RESO Web API.',
  },
  {
    type: 'paragraph',
    content: [
      'For questions pertaining to the API, contact: ',
      { type: 'link', href: 'mailto:support@sourceredb.com', text: 'support@sourceredb.com' },
      '. For any other inquiries, please reach out to the MLS.',
    ],
  },
]

