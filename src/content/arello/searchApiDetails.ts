import type { ContentSection } from '../../types'

export const searchApiDetails: ContentSection[] = [
  {
    type: 'subsection',
    title: 'Interface',
    level: 3,
    id: 'interface',
    content: [
      {
        type: 'paragraph',
        content:
          'The ARELLO Search API expects an HTTP POST request with URL-encoded form parameters. The service returns results in JSON format. TLS encryption is required.',
      },
      {
        type: 'paragraph',
        content: [
          'The web service endpoint URL is: ',
          { type: 'code', text: 'https://api.sourceredb.com/Search' },
          '. The same URL is used for live and testing environments; use the "searchMode" parameter to switch.',
        ],
      },
    ],
  },
  {
    type: 'subsection',
    title: 'Formatting the Request',
    level: 3,
    id: 'formatting-request',
    content: [
      {
        type: 'paragraph',
        content:
          "The web service expects to receive an HTTP POST request with URL-encoded form parameters. This is a standard POST request just like you'd make through a web browser.",
      },
      {
        type: 'paragraph',
        content: [
          'The JWT Bearer Token for your ARELLO data Feed must be included in the ',
          { type: 'code', text: 'Authorization' },
          ' header. This token may be copied from your Feed card within the Data Marketplace.',
        ],
      },
      {
        type: 'code',
        content:
          'POST /Search HTTP/1.1\nHost: api.sourceredb.com\nContent-Type: application/x-www-form-urlencoded\nAuthorization: Bearer <your_token>\n\njurisdiction=AL&licenseNumber=12345&lastName=doe&firstName=johnny',
      },
      {
        type: 'paragraph',
        content:
          'The following parameters are accepted in the request body as URL-encoded form fields:',
      },
      {
        type: 'table',
        headers: ['Property', 'Type', 'Required', 'Default', 'Description'],
        rows: [
          [
            'jurisdiction',
            'String',
            'Yes',
            '',
            'Two-letter postal abbreviation of the jurisdiction in which to search.',
          ],
          ['licenseNumber', 'String', 'No*', '', 'License number to search for.'],
          ['lastName', 'String', 'No*', '', 'Last name to search for.'],
          ['firstName', 'String', 'No', '', 'First name to search for.'],
          [
            'minScore',
            'Numeric (0-100)',
            'No',
            '0',
            'Lowest acceptable score for results (inclusive). Results with a score less than this value will not be returned.',
          ],
          ['maxResults', 'Numeric (1-100)', 'No', '10', 'Maximum number of results to return.'],
          [
            'searchMode',
            'String',
            'No',
            'live',
            'Whether to conduct the search in the live or test environment. (Valid values are "live" or "test".)',
          ],
        ],
      },
      {
        type: 'paragraph',
        content: [{ type: 'code', text: '* one of licenseNumber OR lastName is required' }],
      },
    ],
  },
  {
    type: 'subsection',
    title: 'How Searches Are Performed',
    level: 3,
    id: 'search-performance',
    content: [
      {
        type: 'paragraph',
        content:
          'In order to get the best and most reliable results from the Licensee Verification Web Service, it is important to understand how the web service searches the database. Understanding the search routine will help you to know what data to provide, what is most important and what is least important in getting meaningful results.',
      },
      {
        type: 'subsection',
        title: 'Search Signals',
        level: 4,
        id: 'search-signals',
        content: [
          {
            type: 'paragraph',
            content:
              'In order to provide the best matches possible, we calculate and compare a variety of search signals in addition to searching for exact matches. This means that an exact match to licensee data is not required to get meaningful results.',
          },
          {
            type: 'list',
            items: [
              [
                {
                  type: 'code',
                  text: 'License number numeric reduction',
                },
                ' – we maintain license number formatting information for all participating jurisdictions, and we use that information to calculate a numeric reduction of the license number for comparison. For example, some jurisdictions use character prefixes (REB. 12345) and some use leading zeroes (0012345). The numeric reduction of both examples is 12345. When you search and provide a license number parameter, the value you provide is numerically reduced and compared to this signal.',
              ],
              [
                {
                  type: 'code',
                  text: 'Soundex pattern matching',
                },
                ' – names are often misspelled, or spelling is inferred from phonetics. Soundex is a method of encoding the phonetic form of a name for comparison. For example, while McAlister and McCallister are spelled differently, their Soundex encoding is identical.',
              ],
              [
                {
                  type: 'code',
                  text: 'Alternate names',
                },
                ' – often, people choose to be called by less formal versions of their first name, but on official records the more formal version is used. We maintain a database of alternate names which are used in the search. For example, if you search for Bill Jones, we also search for alternate first names like Will and William.',
              ],
            ],
          },
        ],
      },
      {
        type: 'subsection',
        title: 'Search Parameters',
        level: 4,
        id: 'search-parameters',
        content: [
          {
            type: 'paragraph',
            content:
              'Searches can only be performed on data that you provide. If you omit any of the search parameters, the likelihood of erroneous results increases. It is to your advantage to provide all the search parameters. For each parameter you provide, one of the signals must match in order for a result to be returned.',
          },
          {
            type: 'list',
            items: [
              'For License Number, there must be an exact match or numeric reduction match',
              'For Last Name, there must be an exact match or Soundex match',
              'For First Name, there must be an exact match, alternate name match, or Soundex match',
            ],
          },
          {
            type: 'paragraph',
            content:
              'If you provide multiple parameters, all parameters must return a match for a result to be included. Think "AND" logic as opposed to "OR."',
          },
          {
            type: 'paragraph',
            content:
              'After the search results are selected from the database, they are assigned a score based on the quality of the match. The maximum possible score is 100, if all 3 search parameters return an exact match. White space is ignored for exact matches ("Aaron" is an exact match of "Aaron ").',
          },
          {
            type: 'table',
            headers: ['Parameter', 'Match Type', 'Score'],
            rows: [
              ['License Number', 'Exact', '40'],
              ['License Number', 'Numeric Reduction', '30'],
              ['Last Name', 'Exact', '40'],
              ['Last Name', 'Soundex', '20'],
              ['First Name', 'Exact', '20'],
              ['First Name', 'Alternate Name', '15'],
              ['First Name', 'Soundex', '10'],
            ],
          },
          {
            type: 'paragraph',
            content: [
              "Note that it is to your advantage to provide all the search parameters when searching. If a parameter is not included in the request, the score for the parameter is automatically 0. For example, if you don't include a first name, the maximum possible score you can get is 80 (License Number exact + Last Name exact).",
            ],
          },
        ],
      },
    ],
  },
  {
    type: 'subsection',
    title: 'Reading the Response',
    level: 3,
    id: 'reading-response',
    content: [
      {
        type: 'paragraph',
        content: 'The response from the web service is a JSON structure with 4 top-level keys:',
      },
      {
        type: 'list',
        items: [
          [
            {
              type: 'code',
              text: '"request" (struct)',
            },
            ' - The request information that produced the response.',
          ],
          [
            {
              type: 'code',
              text: '"results" (array of struct)',
            },
            ' - The results of the search.',
          ],
          [
            {
              type: 'code',
              text: '"warnings" (array of string)',
            },
            ' - Any warnings that may have occurred.',
          ],
          [
            {
              type: 'code',
              text: '"errors" (array of struct)',
            },
            ' - Any errors that may have occurred.',
          ],
        ],
      },
      {
        type: 'paragraph',
        content: 'The response is formatted as follows:',
      },
      {
        type: 'code',
        content:
          '{\n  "request": {\n    ...Request parameters...\n  },\n  "warnings": [ ...Warning messages... ],\n  "errors": [ ...Error messages... ],\n  "results": [\n    {\n      ...License record data...\n    }\n  ]\n}',
      },
      {
        type: 'paragraph',
        content:
          'In the payload of the response, "results" is an array of structs with the following keys:',
      },
      {
        type: 'table',
        headers: ['Property', 'Type', 'Description'],
        rows: [
          ['addrLine1', 'String', "Licensee's Office address - line 1."],
          ['addrLine2', 'String', "Licensee's Office address - line 2."],
          ['city', 'String', "Licensee's Office address - city."],
          ['country', 'String', "Licensee's Office address - 3-letter country code"],
          ['email', 'String', "Licensee's email address."],
          ['fax', 'String', "Licensee's fax number."],
          ['firstName', 'String', 'First name of the licensee.'],
          [
            'jurisdiction',
            'String',
            'Two-letter postal abbreviation of the jurisdiction in which the licensee is registered.',
          ],
          ['lastName', 'String', 'Last name of the licensee.'],
          [
            'licenseExpirationDate',
            'Date',
            'Expiration date of the license, formatted as yyyy-mm-dd.',
          ],
          ['licenseIssueDate', 'Date', 'Issue date of the license, formatted as yyyy-mm-dd.'],
          ['licenseNumber', 'String', 'License number of the licensee.'],
          [
            'licenseStatus',
            'String',
            'License status of the licensee. Values differ among jurisdictions.',
          ],
          ['licenseType', 'String', "Licensee's license type. Values differ among jurisdictions."],
          ['middleName', 'String', 'Middle name of the licensee.'],
          ['officeName', 'String', "Licensee's office name."],
          ['postalCode', 'String', 'Office address - postal code.'],
          ['score', 'Numeric', "The result's score (see Search Parameters for possible scores)."],
          ['stateProv', 'String', 'Office address - state/province.'],
          ['suffix', 'String', 'Suffix of the licensee (such as "Jr" or "Sr")'],
          ['telephone', 'String', "Licensee's telephone number."],
        ],
      },
    ],
  },
  {
    type: 'subsection',
    title: 'Warnings and Errors',
    level: 3,
    id: 'warnings-errors',
    content: [
      {
        type: 'paragraph',
        content:
          'The web service may produce warnings and errors if it encounters a problem with a request.',
      },
      {
        type: 'paragraph',
        content:
          'In cases where the issue is minor, the web service may be able to recover and still produce a usable result. These are called "warnings." A warning indicates that something went wrong while processing the request, but the service was able to correct the problem and still produce results. Examples of events that produce warnings include:',
      },
      {
        type: 'list',
        items: [
          'Failure to provide optional parameters (the warning indicates the default value used).',
          'Providing a minScore or maxResults value that is out of range.',
        ],
      },
      {
        type: 'paragraph',
        content:
          'In the case of warnings, the service simply corrects the erroneous value to an acceptable value, and continues to perform the search. Searches that produce warnings will still return results, and therefore they are logged to the database, just like a normal search.',
      },
      {
        type: 'paragraph',
        content: [
          'The ',
          { type: 'code', text: '"warnings"' },
          ' key in the response is an array of strings. Each string is a human-readable warning message.',
        ],
      },
      {
        type: 'paragraph',
        content:
          'In other cases, the service may be unable to process a request and produce usable results. These are called errors. An error indicates that the service could not continue executing. Examples of events that produce errors include:',
      },
      {
        type: 'list',
        items: [
          'Failing to provide required search parameters, like "jurisdiction" and "lastName"',
          'Providing an incorrect jurisdiction abbreviation',
          'Searching within a jurisdiction that does not participate in the program',
          'Searching in "live" mode when your account is only enabled for "test" mode',
          'Performing too many requests in a short amount of time (see "Rate Limits" for more information)',
          'Searching using a disabled or expired account.',
        ],
      },
      {
        type: 'paragraph',
        content: [
          'The ',
          { type: 'code', text: '"errors"' },
          ' key in the response is an array of structs:',
        ],
      },
      {
        type: 'table',
        headers: ['Property', 'Type', 'Description'],
        rows: [
          ['error', 'String', 'The error code generated by the web service.'],
          [
            'message',
            'String',
            'A human-readable message with information about what caused the error (and possibly how to fix it).',
          ],
          ['type', 'String', 'Always "Fatal"'],
        ],
      },
      {
        type: 'paragraph',
        content:
          'Multiple warnings may be present in the response. No more than one "Fatal" error will exist.',
      },
    ],
  },
  {
    type: 'subsection',
    title: 'Testing Environment',
    level: 3,
    id: 'testing-environment',
    content: [
      {
        type: 'paragraph',
        content:
          'When developing your application to interface with the Search API, we provide a testing API with some known records to search for.',
      },
      {
        type: 'paragraph',
        content:
          'The testing database is comprised of a random 1% of the records from the live database. There are also several records of bogus data that can be used for assuring that the web service returns expected results.',
      },
      {
        type: 'table',
        headers: ['First', 'MI', 'Last', 'Lic. #', 'City', 'Juris.', 'Type', 'Status'],
        rows: [
          ['JOHN', 'Q', 'DOE', '000012345', 'Montgomery', 'AL', 'T', 'A'],
          ['WILLIAM', 'R', 'JONES', '0099487', 'Anchorage', 'AK', 'BROKER', 'ACTIVE'],
          ['MARY', 'V', 'RICHARDSON', '0089487', 'Juneau', 'AK', 'BROKER', 'ACTIVE'],
        ],
      },
      {
        type: 'paragraph',
        content:
          'Users can enter any of the above as is and get a score of 100. One can also obtain different confidences by using specifically formatted requests.',
      },
      {
        type: 'list',
        items: [
          'Searching for license number "12345" in AL gives one result with a score of 30 (license number numeric reduction).',
          'Searching for license number "000012345" and last name "doe" in AL gives a score of 80 (exact license number and last name).',
          'Searching for first name = "bill" and last name = "jones" in AK gives one result with a score of 55 (exact last name and alternate first name).',
          'Searching for first name = "marie" and last name = "richardson" in AK gives one result with a score of 50 (exact last name and Soundex first name).',
        ],
      },
    ],
  },
]

