export default {
  name: 'bookingPolicy',
  title: 'Booking Policy',
  type: 'document',
  description: 'The content shown in the "Booking, Cancellation & Refund Policy" popup near the booking form.',
  fields: [
    {
      name: 'title',
      title: 'Policy title',
      type: 'string',
      initialValue: 'Booking, Cancellation & Refund Policy',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'sections',
      title: 'Policy sections',
      type: 'array',
      description: 'Each section is a heading plus either a paragraph or a bullet list. Drag to reorder.',
      of: [
        {
          type: 'object',
          name: 'policySection',
          title: 'Section',
          fields: [
            {
              name: 'heading',
              title: 'Heading',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'body',
              title: 'Paragraph text',
              type: 'text',
              rows: 3,
              description: 'Use this for a single paragraph, or leave blank and use the bullet list below instead.',
            },
            {
              name: 'items',
              title: 'Bullet list',
              type: 'array',
              of: [{ type: 'string' }],
              description: 'Use this for a bullet list, or leave blank and use the paragraph above instead.',
            },
          ],
          preview: {
            select: { title: 'heading' },
          },
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return { title: 'Booking Policy' }
    },
  },
}
