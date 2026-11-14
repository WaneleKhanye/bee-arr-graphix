export default {
  name: 'businessInfo',
  title: 'Business Information',
  type: 'document',
  description: 'Contact details shown across the website — updating here updates every page at once.',
  fields: [
    {
      name: 'email',
      title: 'Business email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    },
    {
      name: 'phone',
      title: 'Phone number',
      type: 'string',
      description: 'Shown to visitors, e.g. "+27 81 553 2701".',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'whatsappNumber',
      title: 'WhatsApp number',
      type: 'string',
      description: 'Digits only with country code, no spaces or symbols, e.g. "27815532701". Used to build the "Message on WhatsApp" button.',
      validation: (Rule) =>
        Rule.required().regex(/^[0-9]+$/, { name: 'digits only' }),
    },
    {
      name: 'locationText',
      title: 'Location / address',
      type: 'string',
      description: 'e.g. "1928 Bhele Street, Daveyton".',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'instagramUrl',
      title: 'Instagram link',
      type: 'url',
    },
    {
      name: 'facebookUrl',
      title: 'Facebook link',
      type: 'url',
    },
    {
      name: 'youtubeUrl',
      title: 'YouTube link',
      type: 'url',
    },
  ],
  preview: {
    prepare() {
      return { title: 'Business Information' }
    },
  },
}
