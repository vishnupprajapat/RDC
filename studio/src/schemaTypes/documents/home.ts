import {defineField, defineType} from 'sanity'
import {DocumentIcon} from '@sanity/icons'

/**
 * Page schema.  Define and edit the fields for the 'page' content type.
 * Learn more: https://www.sanity.io/docs/schema-types
 */

export const home = defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  groups: [{ name: 'content', default: true }, { name: 'metadata' }],
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'The name of the home page, used for display purposes',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'heroSection',
      group: 'content',
    }),
    defineField({
      name: "focusedAgencies",
      title: "Focused Agencies Section",
      type: "focusedAgenciesSection",
      group: 'content',
    }),
    defineField({
			name: 'metadata',
			type: 'metadata',
			group: 'metadata',
		}),
  ],
})
