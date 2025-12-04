import type { DocumentationContent } from '../../types'
import { tableOfContents } from './tableOfContents'
import { overview } from './overview'
import { authentication } from './authentication'
import { configuration } from './configuration'
import { payloads } from './payloads'
import { bestPractices } from './bestPractices'
import { resources } from './resources'
import { registration } from './registration'

export const webhooksContent: DocumentationContent = {
  title: 'Push Replication Using Webhooks',
  sections: [
    { id: 'table-of-contents', title: 'Table of Contents' },
    { id: 'overview', title: 'Overview' },
    { id: 'authentication', title: 'Authentication' },
    { id: 'configuration', title: 'Producer/Consumer Configuration' },
    { id: 'payloads', title: 'Push/Receive Events' },
    { id: 'best-practices', title: 'Best Practices & Processing' },
    { id: 'resources', title: 'Resources' },
    { id: 'registration', title: 'Registration' },
  ],
  content: {
    'table-of-contents': tableOfContents,
    overview: overview,
    authentication: authentication,
    configuration: configuration,
    payloads: payloads,
    'best-practices': bestPractices,
    resources: resources,
    'registration': registration,
  },
}