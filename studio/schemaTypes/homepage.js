export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  description: 'The introductory text shown at the top of the website.',
  fields: [
    {
      name: 'badgeText',
      title: 'Small badge text',
      type: 'string',
      description: 'The short highlighted label above the main heading, e.g. "Now booking — aerial drone photography & videography".',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'introText',
      title: 'Introduction paragraph',
      type: 'text',
      rows: 3,
      description: 'The short paragraph under the main heading introducing the business.',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    prepare() {
      return { title: 'Homepage' }
    },
  },
}
