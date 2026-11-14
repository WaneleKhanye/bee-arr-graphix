export default {
  name: 'about',
  title: 'About',
  type: 'document',
  description: 'The introductory text shown in the About section.',
  fields: [
    {
      name: 'introText',
      title: 'Introduction paragraph',
      type: 'text',
      rows: 3,
      description: 'The first paragraph, introducing the business and where it is based.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'secondaryText',
      title: 'Second paragraph',
      type: 'text',
      rows: 3,
      description: 'The paragraph describing the range of work (weddings, graduations, events, studio portraits, etc.).',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    prepare() {
      return { title: 'About' }
    },
  },
}
