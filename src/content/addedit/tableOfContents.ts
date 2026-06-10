import type { ContentSection } from '../../types'

export const tableOfContents: ContentSection[] = [
  {
    type: 'list',
    items: [
      [{ type: 'link', href: '#overview', text: 'Overview' }],
      [{ type: 'link', href: '#authentication', text: 'Authentication' }],
      [{ type: 'link', href: '#permissions-and-scopes', text: 'Permissions & Scopes' }],
      [{ type: 'link', href: '#operations', text: 'Performing Add/Edit Operations' }],
      [{ type: 'link', href: '#rate-limits', text: 'Rate Limits' }],
      [{ type: 'link', href: '#error-handling', text: 'Error Handling' }],
      [{ type: 'link', href: '#media-uploads', text: 'Media Uploads (OData Stream Properties)' }],
      [{ type: 'link', href: '#validation-notes', text: 'Validation Notes' }],
      [{ type: 'link', href: '#best-practices', text: 'Best Practices' }],
      [{ type: 'link', href: '#questions', text: 'Questions?' }],
    ],
  },
]
