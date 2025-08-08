import { stegaClean } from 'next-sanity'

export default function resolveHomeUrl({
	slug,
	base = true,
	params,
}: {
	slug?: string
	base?: boolean
	params?: string
}): string {
	const path = slug === 'index' ? '' : `/${slug}`

	return [
		base && process.env.NEXT_PUBLIC_BASE_URL,
		path,
		stegaClean(params),
	]
		.filter(Boolean)
		.join('')
}
