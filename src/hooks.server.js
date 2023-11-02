/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	// UnoCSS
	const response = await resolve(event, {
		transformPageChunk: ({ html }) =>
			html.replace('%unocss-svelte-scoped.global%', 'unocss_svelte_scoped_global_styles')
	});
	// UnoCSS end
	return response;
}
