import type { ContentSection } from '../../types'

export const dataAccessAndStructure: ContentSection[] = [
  {
    type: 'subsection',
    title: 'Endpoints',
    level: 3,
    content: [
      {
        type: 'paragraph',
        content: 'All entity types are exposed as OData resources at their corresponding endpoint:',
      },
      {
        type: 'code',
        content: 'https://api.sourceredb.com/odata/{EntityType}',
      },
      {
        type: 'paragraph',
        content:
          'These endpoints support OData query options as defined in the RESO Web API specification. Here is a brief overview of the available query options:',
      },
      {
        type: 'list',
        items: [
          [{ type: 'code', text: '$expand' }, ' - Expand related entities from another resource'],
          [{ type: 'code', text: '$filter' }, ' - Filter records based on field values'],
          [{ type: 'code', text: '$orderby' }, ' - Sort results by field values, ascending or descending'],
          [{ type: 'code', text: '$top' }, ' - Limit results to a specific number of records'],
          [{ type: 'code', text: '$skip' }, ' - Skip a specific number of records in the resulting set'],
          [{ type: 'code', text: '$count' }, ' - Include count of resulting records'],
          [{ type: 'code', text: '$select' }, ' - Select specific fields to include in the response'],
        ],
      },
      {
        type: 'paragraph',
        content: 'For example, here is a query to the Property resource which makes use of each query option:',
      },
      {
        type: 'code',
        content:
          'GET https://api.sourceredb.com/odata/Property?$expand=ListAgent&$filter=PropertyType eq \'Residential\'&$orderby=APIModificationTimestamp desc&$top=100&$skip=100&$count=true&$select=APIModificationTimestamp,PropertyType',
      },
      {
        type: 'paragraph',
        content: [
          'This query will return 100 residential properties, sorting by the ',
          { type: 'code', text: 'APIModificationTimestamp' },
          ' field in descending order and skipping the first 100 properties. The response will include an ',
          { type: 'code', text: '@odata.count' },
          ' of resulting records, and each record will include the ',
          { type: 'code', text: 'APIModificationTimestamp' },
          ' and ',
          { type: 'code', text: 'PropertyType' },
          ' fields, as well as the ',
          { type: 'code', text: 'ListAgent' },
          ' navigation property.',
        ],
      },
    ],
  },
  {
    type: 'subsection',
    title: 'Sub-Resources',
    level: 3,
    content: [
      {
        type: 'paragraph',
        content: [
          'Certain entity types are scoped to a single parent resource, and are exposed as top-level resources with a prefix of the parent, in addition to being available as navigation properties. For example, individual rooms associated with a property are exposed as the ',
          { type: 'code', text: 'PropertyRooms' },
          ' resource, in addition to being available as the ',
          { type: 'code', text: 'Rooms' },
          ' navigation on the ',
          { type: 'code', text: 'Property' },
          ' resource:',
        ],
      },
      {
        type: 'code',
        content: 'GET https://api.sourceredb.com/odata/Property?$expand=Rooms',
      },
    ],
  },
]

