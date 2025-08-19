import { defineField, defineType } from 'sanity'
import { CharacterCount } from 'sanitypress-utils'
import PreviewOG from '../../components/ui/PreviewOG'


export const metadata = defineType({
	name: 'metadata',
	title: 'Metadata',
	description: 'For search engines',
	type: 'object',
	fields: [
		defineField({
			name: 'slug',
			type: 'slug',
			description: 'URL path or permalink',
			options: {
				source: (doc: any) => doc.title || doc.metadata.title,
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'title',
			type: 'string',
			validation: (Rule) => Rule.max(60).warning(),
			components: {
				input: (props) => (
					<CharacterCount max={60} {...props}>
						<PreviewOG title={props.elementProps.value} />
					</CharacterCount>
				),
			},
		}),
		defineField({
			name: 'description',
			type: 'text',
			validation: (Rule) => Rule.max(160).warning(),
			components: {
				input: (props) => <CharacterCount as="textarea" max={160} {...props} />,
			},
		}),
		defineField({
			name: 'image',
			description: 'Used for social sharing previews',
			type: 'image',
			options: {
				hotspot: true,
				metadata: ['lqip'],
			},
		}),
	],
})
