import type { ContentSection } from '../../types'

export const tableOfContents: ContentSection[] = [
  {
    type: 'list',
    items: [
      [{ type: 'link', href: '#introduction', text: 'Introduction' }],
      [{ type: 'link', href: '#quick-start', text: 'Quick Start Instructions' }],
      [{ type: 'link', href: '#search-api-details', text: 'Search API Details' }],
      [{ type: 'link', href: '#interface', text: 'Interface' }],
      [{ type: 'link', href: '#formatting-request', text: 'Formatting the Request' }],
      [{ type: 'link', href: '#search-performance', text: 'How Searches Are Performed' }],
      [{ type: 'link', href: '#search-signals', text: 'Search Signals' }],
      [{ type: 'link', href: '#search-parameters', text: 'Search Parameters' }],
      [{ type: 'link', href: '#reading-response', text: 'Reading the Response' }],
      [{ type: 'link', href: '#warnings-errors', text: 'Warnings and Errors' }],
      [{ type: 'link', href: '#rate-limits', text: 'Rate Limits' }],
      [{ type: 'link', href: '#testing-environment', text: 'Testing Environment' }],
      [
        {
          type: 'link',
          href: '#jurisdiction-info',
          text: 'Jurisdiction Participation and License Format Information',
        },
      ],
      [{ type: 'link', href: '#contact-us', text: 'Contact Us' }],
    ],
  },
]

