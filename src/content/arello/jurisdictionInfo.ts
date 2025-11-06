import type { ContentSection } from '../../types'

export const jurisdictionInfo: ContentSection[] = [
  {
    type: 'paragraph',
    content:
      'ARELLO is constantly working with its jurisdictions to get the latest information as frequently as possible, but unfortunately, there still is not 100% participation. Some jurisdictions are unable to participate for legal reasons, and some are simply not ARELLO members.',
  },
  {
    type: 'paragraph',
    content:
      'Additionally, jurisdictions which do participate have varying license number formats, and it can be difficult to get an exact match without knowing something about the format before conducting a search. To help you perform better searches, ARELLO provides information about jurisdiction participation, update frequency and license number format in several formats which you can access and use in your client application.',
  },
  {
    type: 'paragraph',
    content: [{ type: 'code', text: 'Endpoints and available formats:' }],
  },
  {
    type: 'list',
    items: [
      [
        'JSON: ',
        { type: 'code', text: 'https://www.arello.com/api/participants.cfm?format=json' },
      ],
      [
        'XML: ',
        { type: 'code', text: 'https://www.arello.com/api/participants.cfm?format=xml' },
      ],
      [
        'CSV: ',
        { type: 'code', text: 'https://www.arello.com/api/participants.cfm?format=csv' },
      ],
    ],
  },
  {
    type: 'paragraph',
    content: 'These resources include the following information for each jurisdiction:',
  },
  {
    type: 'table',
    headers: ['Property', 'Type', 'Description'],
    rows: [
      ['JurisdictName', 'String', 'The full name of the jurisdiction.'],
      ['Country', 'String', 'Country abbreviation.'],
      [
        'IsParticipant',
        'Boolean',
        'Whether the jurisdiction participates in the program. This field is manually set by ARELLO staff.',
      ],
      [
        'Status',
        'String',
        '"Active" or "Inactive". Jurisdictions become Inactive if no data is received from them in over 6 months.',
      ],
      [
        'SubmissionInterval',
        'String',
        '"Daily", "Weekly", "Monthly", or "Intermittent". Value is set manually and may be approximate.',
      ],
      [
        'dtLastProcAction',
        'Datetime',
        'Timestamp of last processing action (last attempted data import).',
      ],
      [
        'CurrentProcStatus',
        'String',
        '"Success" or "Error" depending on the result of the last data processing action.',
      ],
      [
        'NumRecords',
        'Integer',
        'Total number of licensee records in the database for this jurisdiction.',
      ],
      [
        'LicNumFormat_Regex',
        'String',
        'A regular expression describing the expected license number format for this jurisdiction. Regular expressions can be used by software applications to validate user input.',
      ],
      [
        'LicNumFormat_Desc',
        'String',
        'A "human readable" description of the jurisdiction\'s license number format, which you may display to assist with data entry',
      ],
      [
        'LicNumFormat_PercentMatch',
        'Float',
        'A numeric value (0-100) indicating what percentage of license records for this jurisdiction matched the regular expression on file during the most recent data import.',
      ],
    ],
  },
]

