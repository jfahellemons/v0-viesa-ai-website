import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'

// Define the singleton document types
const singletonActions = new Set(["publish", "discardChanges", "restore"])
const singletonTypes = new Set(["homepage", "footerSettings"])

export default defineConfig({
  name: 'default',
  title: 'VIESA-automations',

  projectId: 'mfhudqb1',
  dataset: 'production',

  plugins: [structureTool({structure}), visionTool()],

  schema: {
    types: schemaTypes,
  },
  
  document: {
    // For singleton types, filter out actions that are not explicitly allowed
    // in the `singletonActions` list array
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
})
