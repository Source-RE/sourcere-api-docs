import type { DocumentationContent } from '../../types'
import { introduction } from './introduction'
import { quickStart } from './quickStart'
import { searchApiDetails } from './searchApiDetails'
import { rateLimits } from './rateLimits'
import { jurisdictionInfo } from './jurisdictionInfo'
import { contactUs } from './contactUs'

export const arelloContent: DocumentationContent = {
  title: 'ARELLO API via SourceRE',
  sections: [
    { id: 'table-of-contents', title: 'Table of Contents' },
    { id: 'introduction', title: 'Introduction' },
    { id: 'quick-start', title: 'Quick Start Instructions for the Search API' },
    { id: 'search-api-details', title: 'Search API Details' },
    { id: 'rate-limits', title: 'Rate Limits & Tokens' },
    { id: 'jurisdiction-info', title: 'Jurisdiction Participation and License Format Information' },
    { id: 'contact-us', title: 'Contact Us' },
  ],
  content: {
    'table-of-contents': [],
    introduction,
    'quick-start': quickStart,
    'search-api-details': searchApiDetails,
    'rate-limits': rateLimits,
    'jurisdiction-info': jurisdictionInfo,
    'contact-us': contactUs,
  },
}

