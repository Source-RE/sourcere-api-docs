import type { ContentSection } from '../../types'

export const metadataAndLookups: ContentSection[] = [
  {
    type: 'paragraph',
    content:
      'SourceRE provides metadata discovery in accordance with the RESO Web API standard:',
  },
  {
    type: 'subsection',
    title: 'Service Endpoint',
    level: 4,
    content: [
      {
        type: 'code',
        content: 'GET https://api.sourceredb.com/odata/',
      },
      {
        type: 'paragraph',
        content: 'Describes the available entity types (resources) for the given feed.',
      },
    ],
  },
  {
    type: 'subsection',
    title: 'Metadata Endpoint',
    level: 4,
    content: [
      {
        type: 'code',
        content: 'GET https://api.sourceredb.com/odata/$metadata',
      },
      {
        type: 'paragraph',
        content:
          'Describes the available fields for each entity type, including navigation properties.',
      },
      {
        type: 'paragraph',
        content: [
          'Enumeration fields in the metadata are typed as ',
          { type: 'code', text: 'Edm.String' },
          ' or ',
          { type: 'code', text: 'Collection(Edm.String)' },
          ' and include a ',
          { type: 'code', text: 'RESO.OData.Metadata.LookupName' },
          ' annotation identifying the Lookup name. For example, the ',
          { type: 'code', text: 'PropertyType' },
          ' field has the following annotation:',
        ],
      },
      {
        type: 'code',
        content:
          '<Annotation Term="RESO.OData.Metadata.LookupName" String="PropertyType" />',
      },
    ],
  },
  {
    type: 'subsection',
    title: 'Lookup Endpoint',
    level: 4,
    content: [
      {
        type: 'code',
        content:
          "GET https://api.sourceredb.com/odata/Lookup?$filter=LookupName eq 'PropertyType'",
      },
      {
        type: 'paragraph',
        content: [
          'Returns enumeration values for fields annotated with ',
          { type: 'code', text: 'RESO.OData.Metadata.LookupName' },
          ', according to the RESO Web API specification.',
        ],
      },
    ],
  },
]

