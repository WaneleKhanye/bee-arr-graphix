export default {
  name: 'portfolioPhoto',
  title: 'Portfolio Photo',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'A short title shown when a visitor views this photo full-screen, e.g. "Garden Ceremony".',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'photo',
      title: 'Upload a portfolio photo',
      type: 'image',
      description: 'Choose a high-quality photo. You can drag the focal point marker to control which part stays visible when the photo is cropped.',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'alt',
      title: 'Photo description (for accessibility & search engines)',
      type: 'string',
      description: 'Describe what is in the photo, e.g. "Bride and groom smiling together outdoors". Screen readers and search engines use this.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Which gallery section this photo appears in on the website.',
      options: {
        list: [
          { title: 'Weddings', value: 'Weddings' },
          { title: 'Studio & Portraits', value: 'Portraits' },
          { title: 'Graduations', value: 'Graduations' },
          { title: 'Events', value: 'Events' },
          { title: 'Drone', value: 'Drone' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Display order',
      type: 'number',
      description: 'Lower numbers appear first in the gallery. Leave blank to show newest photos first.',
    },
  ],
  preview: {
    select: { title: 'title', category: 'category', media: 'photo' },
    prepare({ title, category, media }) {
      return { title, subtitle: category, media }
    },
  },
}
