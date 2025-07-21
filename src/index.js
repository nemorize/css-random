// noinspection ExceptionCaughtLocallyJS

const headers = {
	'content-type': 'text/css',
	'cache-control': 'no-store',
}

export default {
	async fetch(request) {
		try {
			const url = new URL(request.url)
			const identifiers = (url.pathname.substring(1) || 'random')
				.split(',')
				.map((v) => v.trim())
			for (const identifier of identifiers) {
				if (!/^[a-zA-Z0-9-_]+$/.test(identifier)) {
					throw new Error('identifier must be a valid CSS variable name')
				}
			}
			return new Response(
				':root{' + identifiers.map((v) => `--${v}:${Math.random().toFixed(4)};`).join('') + '}',
				{ headers }
			)
		} catch (e) {
			return new Response(
				`/** Error: ${e.message} **/`,
				{ status: 400, headers }
			)
		}
	},
}
