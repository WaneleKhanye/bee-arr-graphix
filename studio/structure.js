// Document types that should only ever have one entry (page-level settings),
// shown as a single editable page instead of a list the owner could
// accidentally duplicate or delete.
export const SINGLETON_TYPES = [
  'homepage',
  'about',
  'droneSection',
  'businessInfo',
  'bookingPolicy',
]

const SINGLETON_LABELS = {
  homepage: 'Homepage',
  about: 'About',
  droneSection: 'Drone Section',
  businessInfo: 'Business Information',
  bookingPolicy: 'Booking Policy',
}

export const structure = (S) =>
  S.list()
    .title('Bee arR Graphix')
    .items([
      S.listItem()
        .title('Portfolio')
        .schemaType('portfolioPhoto')
        .child(S.documentTypeList('portfolioPhoto').title('Portfolio')),
      S.listItem()
        .title('Services')
        .schemaType('service')
        .child(S.documentTypeList('service').title('Services')),
      S.divider(),
      ...SINGLETON_TYPES.map((type) =>
        S.listItem()
          .title(SINGLETON_LABELS[type])
          .id(type)
          .child(
            S.document().schemaType(type).documentId(type).title(SINGLETON_LABELS[type]),
          ),
      ),
    ])
