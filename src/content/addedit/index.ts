import type { DocumentationContent } from '../../types'
import { tableOfContents } from './tableOfContents'
import { overview } from './overview'
import { authentication } from './authentication'
import { permissionsAndScopes } from './permissionsAndScopes'
import { operations } from './operations'
import { rateLimits } from './rateLimits'
import { errorHandling } from './errorHandling'
import { mediaUploads } from './mediaUploads'
import { validationNotes } from './validationNotes'
import { bestPractices } from './bestPractices'
import { questions } from './questions'

export const addeditContent: DocumentationContent = {
  title: 'Add/Edit API (RESO Web API Compliant)',
  sections: [
    { id: 'table-of-contents', title: 'Table of Contents' },
    { id: 'overview', title: 'Overview' },
    { id: 'authentication', title: 'Authentication' },
    { id: 'permissions-and-scopes', title: 'Permissions & Scopes' },
    { id: 'operations', title: 'Performing Add/Edit Operations' },
    { id: 'rate-limits', title: 'Rate Limits' },
    { id: 'error-handling', title: 'Error Handling' },
    { id: 'media-uploads', title: 'Media Uploads (OData Stream Properties)' },
    { id: 'validation-notes', title: 'Validation Notes' },
    { id: 'best-practices', title: 'Best Practices' },
    { id: 'questions', title: 'Questions?' },
  ],
  content: {
    'table-of-contents': tableOfContents,
    overview,
    authentication,
    'permissions-and-scopes': permissionsAndScopes,
    operations,
    'rate-limits': rateLimits,
    'error-handling': errorHandling,
    'media-uploads': mediaUploads,
    'validation-notes': validationNotes,
    'best-practices': bestPractices,
    questions,
  },
}
