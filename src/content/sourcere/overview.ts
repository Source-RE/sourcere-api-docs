import type { ContentSection } from '../../types'

export const overview: ContentSection[] = [
  {
    type: 'paragraph',
    content:
      'SourceRE is a platform designed for real estate software vendors to access standardized data feeds. It enables vendors to purchase access to MLS data based on Plans defined by the MLS, which are provisioned for the vendor\'s specific Products. When a vendor purchases a Plan for one of their Products, they receive an API feed. Feeds are accessed via feed-specific JWT bearer tokens. Each token is active for 1 year, and a new token can be retrieved at any time by pressing "Copy Bearer Token" on the feed within the Data Marketplace.',
  },
  {
    type: 'paragraph',
    content:
      "Data access, structure, and enumerations are tailored per Plan. Every Feed reflects its Plan's specific metadata, field-level permissions, and record-level access rules, ensuring the MLS retains granular control over how its data is consumed.",
  },
  {
    type: 'paragraph',
    content: [
      'MLS Data is available via the SourceRE RESO Web API, and it is standardized according to the RESO Data Dictionary. For more information about the RESO Web API specification, please visit the ',
      {
        type: 'link',
        href: 'https://www.reso.org/reso-web-api/',
        text: 'RESO Website',
      },
      '. A guide to authenticating, querying, and replicating data from the SourceRE RESO Web API is provided below.',
    ],
  },
]

