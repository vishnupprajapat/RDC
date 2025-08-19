import { defineType, defineField } from 'sanity'
import { HomeIcon } from '@sanity/icons'

export const heroSection = defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  icon: HomeIcon,
  fields: [
    // Badge (semantic + visual)
    defineField({
      name: 'badge',
      title: 'Badge Text',
      type: 'string',
      description: 'Short text above the heading, e.g., "Welcome to"',
      validation: (Rule) => Rule.max(50),
    }),
    // defineField({
    //   name: 'badgeOptions',
    //   title: 'Badge Settings',
    //   type: 'object',
    //   fields: [
    //     defineField({
    //       name: 'semanticTag',
    //       title: 'Semantic Tag',
    //       type: 'string',
    //       options: {
    //         list: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    //         layout: 'radio',
    //         direction: 'horizontal',
    //       },
    //       initialValue: 'h1',
    //     }),
    //     defineField({
    //       name: 'visualStyle',
    //       title: 'Visual Style',
    //       type: 'string',
    //       options: {
    //         list: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    //         layout: 'radio',
    //         direction: 'horizontal',
    //       },
    //       initialValue: 'h6',
    //     }),
    //   ],
    // }),

    // Main Heading (semantic + visual)
    defineField({
      name: 'heading',
      title: 'Main Heading',
      type: 'string',
      description: 'Primary title of the hero section',
      validation: (Rule) => Rule.required().max(100),
    }),
    // defineField({
    //   name: 'headingOptions',
    //   title: 'Main Heading Settings',
    //   type: 'object',
    //   fields: [
    //     defineField({
    //       name: 'semanticTag',
    //       title: 'Semantic Tag',
    //       type: 'string',
    //       options: {
    //         list: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    //         layout: 'radio',
    //         direction: 'horizontal',
    //       },
    //       initialValue: 'h2',
    //     }),
    //     defineField({
    //       name: 'visualStyle',
    //       title: 'Visual Style',
    //       type: 'string',
    //       options: {
    //         list: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    //         layout: 'radio',
    //         direction: 'horizontal',
    //       },
    //       initialValue: 'h1',
    //     }),
    //   ],
    // }),

    // Subheading
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
      description: 'Secondary title or tagline',
      validation: (Rule) => Rule.max(120),
    }),

    // Description
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Supporting description below the subheading',
      validation: (Rule) => Rule.max(300),
    }),

    // Background
    defineField({
      name: 'background',
      title: 'Background',
      type: 'image',
      description: 'Background image for the hero section',
      options: { hotspot: true },
    }),

    // Scroll indicator
    defineField({
      name: 'showScrollIndicator',
      title: 'Show Scroll Indicator',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'badge',
      media: 'background',
    },
  },
})
