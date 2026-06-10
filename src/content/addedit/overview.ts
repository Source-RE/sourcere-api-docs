import type { ContentSection } from '../../types'

export const overview: ContentSection[] = [
  {
    type: 'paragraph',
    content:
      'SourceRE supports RESO Web API Add/Edit functionality, enabling authorized partners to create, update, and delete data in participating MLSs. This capability is available only to vendors explicitly approved by each MLS.',
  },
  {
    type: 'paragraph',
    content:
      "All Add/Edit operations follow the RESO Add/Edit specification, with extension to support media streaming uploads as outlined in the OData stream property spec, aligning with RESO's own In-Progress specification for Add/Edit with Media.",
  },
]
