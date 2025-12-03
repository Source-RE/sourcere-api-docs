import type { ContentSection } from '../../types'

export const paginationAndFiltering: ContentSection[] = [
  {
    type: 'subsection',
    title: 'Pagination',
    level: 3,
    content: [
      {
        type: 'paragraph',
        content: [
          'All endpoints support pagination via ',
          { type: 'code', text: '@odata.nextLink' },
          '. This is a URL returned in the response that can be used to retrieve the next page of results. If any query options are passed, such as ',
          { type: 'code', text: '$top' },
          ' or ',
          { type: 'code', text: '$filter' },
          ', they will be accounted for in the nextLink URL.',
        ],
      },
      {
        type: 'paragraph',
        content: [
          'If no ',
          { type: 'code', text: '$top' },
          ' value is passed, the default page size will be 10 records. The maximum value for ',
          { type: 'code', text: '$top' },
          ' is 1000, unless only the primary key of the resource is selected, in which case the maximum value is 100,000. For example:',
        ],
      },
      {
        type: 'code',
        content: 'https://api.sourceredb.com/odata/Property?$select=ListingKey&$top=100000',
      },
    ],
  },
  {
    type: 'subsection',
    title: 'Filtering',
    level: 3,
    content: [
      {
        type: 'paragraph',
        content:
          'OData filters are supported on all fields. The operators available may differ based on the field type. Here are some examples:',
      },
      {
        type: 'code',
        content: "https://api.sourceredb.com/odata/Property?$filter=Appliances eq 'Refrigerator'",
      },
      {
        type: 'paragraph',
        content: 'With bounds:',
      },
      {
        type: 'code',
        content:
          'https://api.sourceredb.com/odata/Property?$filter=BathroomsTotalInteger gt 0 and BathroomsTotalInteger lt 3',
      },
    ],
  },
]

