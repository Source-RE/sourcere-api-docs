import type { ContentSection } from '../../types'

export const overview: ContentSection[] = [
  {
    type: 'paragraph',
    content: [
      'As an alternative replication method, SourceRE supports webhook notifications for delivering data change events in real time. The system implements the RESO Webhooks Push Specification ',
      {
        type: 'link',
        text: 'RCP-28',
        href: 'https://github.com/RESOStandards/transport/blob/main/proposals/webhooks-push.md',
      },
      ' with the ',
      { type: 'code', text: 'EntityEvent' },
      ' payload format.',
    ],
  },
  {
    type: 'paragraph',
    content:
      'These push-based webhooks allow vendors to automatically stay in sync with their subscribed Feeds by receiving lightweight notifications for inserts, updates and bulk changes across entities.',
  },
]