export default {
  name: 'droneSection',
  title: 'Drone Section',
  type: 'document',
  fields: [
    {
      name: 'intro',
      title: 'Introduction text',
      type: 'text',
      rows: 3,
      description: 'The short paragraph shown under the "See it from above" heading.',
    },
    {
      name: 'offerings',
      title: 'What we offer',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'The checklist of drone services shown on the website, e.g. "Aerial Photography". Drag items to reorder.',
    },
  ],
}
