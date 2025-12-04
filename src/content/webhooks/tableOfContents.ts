import type { ContentSection } from '../../types'

export const tableOfContents: ContentSection[] = [
  {
    type: 'list',
    items: [
      [{ type: 'link', href: '#overview', text: 'Overview' }],
      [{ type: 'link', href: '#authentication', text: 'Authentication' }],
      [{ type: 'link', href: '#configuration', text: 'Producer & Consumer Configuration' }],
      [{ type: 'link', href: '#payloads', text: 'Push/Receive Events' }],
      [{ type: 'link', href: '#best-practices', text: 'Best Practices & Processing' }],
      [{ type: 'link', href: '#resources', text: 'Resources' }],
      [{ type: 'link', href: '#registration', text: 'Registration' }],
    ],
  },
]