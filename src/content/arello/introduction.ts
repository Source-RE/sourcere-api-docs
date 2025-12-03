import type { ContentSection } from '../../types'

export const introduction: ContentSection[] = [
  {
    type: 'paragraph',
    content:
      'The ARELLO API (formerly known as the Licensee Verification Web Service) allows clients to obtain real estate licensee information in an automated fashion via a single HTTP request. When supplied with a practitioner\'s jurisdiction, license number, last name and first name in an HTTP POST request, the service returns matching records with a score indicating the degree to which each result matched the parameters.',
  },
  {
    type: 'paragraph',
    content:
      'As of October 27, 2025, this service is provided via SourceRE, and is available upon purchasing any ARELLO API data Feed within the SourceRE Data Marketplace. Users of the previous version of the service, provided by ARELLO, will need to update their implementation to use the new service.',
  },
  {
    type: 'paragraph',
    content: 'SourceRE offers two different Plans for ARELLO data Feeds:',
  },
  {
    type: 'list',
    items: [
      [
        {
          type: 'code',
          text: 'Search',
        },
        ' - This Plan provides access to the standard "Search" API, which functions virtually identically to the previous service, with the exception of the endpoint URL and the authentication method. Whereas the previous service required a username and password, the new service requires a JWT bearer token. More information about the authentication method and Search functionality is provided below.',
      ],
      [
        {
          type: 'code',
          text: 'Enhanced (Coming Soon)',
        },
        ' - This plan allows for RESTful access to License, Jurisdiction, and Disciplinary Action data, via the SourceRE RESO Web API. Purchasers of this Plan have full access to the Search API as well. Full information about the Enhanced Plan will be provided upon release.',
      ],
    ],
  },
  {
    type: 'paragraph',
    content: [
      'Both of these Plans are priced on a ',
      { type: 'code', text: 'per-jurisdiction' },
      ' model, meaning that the cost of the Feed is based on the number of jurisdictions you wish to access data for. You may add/remove jurisdictions to your Feed at any time. At least one jurisdiction is required for an Active Feed.',
    ],
  },
]

