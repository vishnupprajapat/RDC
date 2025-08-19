// ./schemas/sections/focusedAgenciesSection.ts

import { defineType, defineField } from 'sanity';

export const focusedAgenciesSection = defineType({
  name: "focusedAgenciesSection",
  title: "Focused Agencies Section",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Section Heading",
      type: "string",
      validation: Rule => Rule.required().max(100),
    }),
    defineField({
      name: "agencies",
      title: "Agency Cards",
      type: "array",
      validation: Rule => Rule.required().min(2).max(4),
      of: [
        defineField({
          name: "agencyCard",
          title: "Agency Card",
          type: "object",
          fields: [
            defineField({
              name: "logo",
              title: "Agency Logo",
              type: "image",
              options: { hotspot: true },
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: "name",
              title: "Agency Name",
              type: "string",
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: "tagline",
              title: "Tagline",
              type: "string",
              description: "A short subtitle or tagline",
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 4,
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: "url",
              title: "Agency Website URL",
              type: "url",
              validation: Rule => Rule.uri({
                scheme: ["http", "https"],
              }).required(),
            }),
          ],
          preview: {
            select: {
              title: "name",
              subtitle: "tagline",
              media: "logo",
            },
            prepare({ title, subtitle, media }) {
              return {
                title,
                subtitle,
                media,
              };
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "heading",
    },
    prepare({ title }) {
      return {
        title: `Focused Agencies: ${title}`,
      };
    },
  },
});
