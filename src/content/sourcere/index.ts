import type { DocumentationContent } from '../../types'
import { overview } from './overview'
import { authentication } from './authentication'
import { metadataAndLookups } from './metadataAndLookups'
import { dataAccessAndStructure } from './dataAccessAndStructure'
import { fieldAndRecordRestrictions } from './fieldAndRecordRestrictions'
import { paginationAndFiltering } from './paginationAndFiltering'
import { updatedRecords } from './updatedRecords'
import { deletedRecords } from './deletedRecords'
import { replication } from './replication'
import { rateLimits } from './rateLimits'
import { postmanLibrary } from './postmanLibrary'

export const sourcereContent: DocumentationContent = {
  title: 'SourceRE RESO Web API',
  sections: [
    { id: 'overview', title: 'Overview' },
    { id: 'authentication', title: 'Authentication' },
    { id: 'metadata-and-lookups', title: 'Metadata & Lookups' },
    { id: 'data-access-and-structure', title: 'Data Access and Structure' },
    { id: 'field-and-record-restrictions', title: 'Field & Record-Level Restrictions' },
    { id: 'pagination-and-filtering', title: 'Pagination & Filtering' },
    { id: 'updated-records', title: 'Updated Records' },
    { id: 'deleted-records', title: 'Deleted Records' },
    { id: 'replication', title: 'Replication' },
    { id: 'rate-limits', title: 'Rate Limits' },
    { id: 'postman-library', title: 'Postman Library' },
  ],
  content: {
    overview,
    authentication,
    'metadata-and-lookups': metadataAndLookups,
    'data-access-and-structure': dataAccessAndStructure,
    'field-and-record-restrictions': fieldAndRecordRestrictions,
    'pagination-and-filtering': paginationAndFiltering,
    'updated-records': updatedRecords,
    'deleted-records': deletedRecords,
    replication,
    'rate-limits': rateLimits,
    'postman-library': postmanLibrary,
  },
}

