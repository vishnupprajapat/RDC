import resolveHomeUrl from './/resolveUrl'
import { BASE_URL, vercelPreview } from './env'
import type { Metadata } from 'next'

export default async function processHomeMetadata(

		metadata: {
			title: string
			description: string
			slug: { current: string }
			ogimage?: string
			noIndex?: boolean
		}
): Promise<Metadata> {
	const url = resolveHomeUrl({ slug: metadata.slug.current })

	const { title, description, ogimage, noIndex } = metadata

	return {
		metadataBase: new URL(BASE_URL),
		title,
		description,
		openGraph: {
			type: 'website',
			url,
			title,
			description,
			images:
				ogimage || `${BASE_URL}/api/og?title=${encodeURIComponent(title)}`,
		},
		robots: {
			index: noIndex || vercelPreview ? false : undefined,
		},
		alternates: {
			canonical: url,
		},
	}
}
