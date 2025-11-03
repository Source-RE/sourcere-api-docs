import type { ContentSection } from '../../types'

export const introduction: ContentSection[] = [
  {
    type: 'paragraph',
    content:
      'The ARELLO API (formerly known as the Licensee Verification Web Service) allows clients to obtain real estate licensee information in an automated fashion via a single HTTP request. When supplied with a practitioner\'s jurisdiction, license number, last name and first name in an HTTP POST request, the service returns matching records with a score indicating the degree to which each result matched the parameters.',
  },
  {
    type: 'paragraph',
    content: [
      'As of October 27, 2025, this service is provided via SourceRE, and is available upon purchasing any ARELLO API data Feed within the SourceRE Data Marketplace. ',
      {
        type: 'link',
        href: '#',
        text: 'Users of the previous version of the service, provided by ARELLO, will need to update their implementation to use the new service.',
      },
    ],
  },
  {
    type: 'paragraph',
    content: 'SourceRE offers two different Plans for ARELLO data Feeds:',
  },
  {
    type: 'list',
    items: [
      'Search - This Plan provides access to the standard "Search" API, which functions virtually identically to the previous service, with the exception of the endpoint URL and the authentication method.',
      'Enhanced (Coming Soon) - This plan allows for RESTful access to License, Jurisdiction, and Disciplinary Action data, via the SourceRE RESO Web API.',
    ],
  },
]

