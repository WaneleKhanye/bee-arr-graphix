import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { structure, SINGLETON_TYPES } from './structure'

export default defineConfig({
  name: 'bee-arr-graphix',
  title: 'Bee arR Graphix',

  projectId: 'zjf1ihve',
  dataset: 'production',

  plugins: [structureTool({ structure }), visionTool()],

  schema: {
    types: schemaTypes,
    // Singleton pages (Homepage, About, Drone Section, Business Information,
    // Booking Policy) should never be duplicated or deleted — there is only
    // ever one of each.
    templates: (templates) =>
      templates.filter(({ schemaType }) => !SINGLETON_TYPES.includes(schemaType)),
  },

  document: {
    actions: (input, context) =>
      SINGLETON_TYPES.includes(context.schemaType)
        ? input.filter(
            ({ action }) => action && !['delete', 'duplicate'].includes(action),
          )
        : input,
  },
})
