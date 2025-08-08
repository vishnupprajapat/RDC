/**
 * This config is used to configure your Sanity Studio.
 * Learn more: https://www.sanity.io/docs/configuration
 */

import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './src/schemaTypes'
import {structure} from './src/structure'
import {unsplashImageAsset} from 'sanity-plugin-asset-source-unsplash'
import {
  presentationTool,
  defineDocuments,
  defineLocations,
  type DocumentLocation,
} from 'sanity/presentation'
import {assist} from '@sanity/assist'

// Environment variables for project configuration
const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'your-projectID'
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'

// URL for preview functionality, defaults to localhost:3000 if not set
const SANITY_STUDIO_PREVIEW_URL = process.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:3000'

// path for different document types and used in the presentation tool.
function resolveHref(documentType?: string, slug?: string): string | undefined {
  switch (documentType) {
    case 'home':
      return slug ? `/` : undefined
    default:
      console.warn('Invalid document type:', documentType)
      return undefined
  }
}

// Main Sanity configuration
export default defineConfig({
  name: 'default',
  title: 'RDI',

  projectId,
  dataset,

  plugins: [
    // Presentation tool configuration for Visual Editing
    presentationTool({
      previewUrl: {
        origin: SANITY_STUDIO_PREVIEW_URL,
        previewMode: {
          enable: '/api/draft-mode/enable',
        },
      },
      resolve: {
        // The Main Document Resolver API provides a method of resolving a main document from a given route or route pattern. https://www.sanity.io/docs/presentation-resolver-api#57720a5678d9
        mainDocuments: defineDocuments([
          {
            route: '/',
            filter: `_type == "home" && slug.current == "index" || _id == "home"`,
          },
        ]),
        // Locations Resolver API allows you to define where data is being used in your application. https://www.sanity.io/docs/presentation-resolver-api#8d8bca7bfcd7
        locations: {
          home: defineLocations({
            select: {
              name: 'name',
              slug: 'slug.current',
            },
            resolve: (doc) => ({
              locations: [
                {
                  title: doc?.name || 'Untitled',
                  href: resolveHref('home', doc?.slug)!,
                },
              ],
            }),
          }),
        },
      },
    }),
    structureTool({
      structure, // Custom studio structure configuration, imported from ./src/structure.ts
    }),
    // Additional plugins for enhanced functionality
    unsplashImageAsset(),
    assist(),
    visionTool(),
  ],

  // Schema configuration, imported from ./src/schemaTypes/index.ts
  schema: {
    types: schemaTypes,
  },
})
