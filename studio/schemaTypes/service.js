export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Service name',
      type: 'string',
      description: 'e.g. "Wedding Photography" or "Studio & Portrait Photography".',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Short description',
      type: 'text',
      rows: 2,
      description: 'One short sentence shown under the service name.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'photo',
      title: 'Upload a service photo',
      type: 'image',
      description: 'A photo that represents this service.',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'available',
      title: 'Currently offered?',
      type: 'boolean',
      description: 'Turn off to hide this service from the website without deleting it.',
      initialValue: true,
    },
    {
      name: 'order',
      title: 'Display order',
      type: 'number',
      description: 'Lower numbers appear first.',
    },
  ],
  preview: {
    select: { title: 'title', available: 'available', media: 'photo' },
    prepare({ title, available, media }) {
      return { title, subtitle: available === false ? 'Hidden' : 'Visible', media }
    },
  },
}
