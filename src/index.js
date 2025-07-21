// noinspection ExceptionCaughtLocallyJS

const headers = {
	'content-type': 'text/css',
	'cache-control': 'no-store',
}

export default {
	async fetch(request) {
		try {
			const url = new URL(request.url)
			let identifier = url.pathname.substring(1) || 'random'
			if (!/^[a-zA-Z0-9-_]+$/.test(identifier)) {
				throw new Error('identifier must be a valid CSS variable name')
			}
			return new Response(
				`:root{--${identifier}: ${Math.random().toFixed(4)};}`,
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
