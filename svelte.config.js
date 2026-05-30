import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		// Fully prerendered static output (no server runtime).
		adapter: adapter({
			fallback: undefined
		})
		// Served at the root of the custom domain (tylerauer.com),
		// so no `paths.base` is needed.
	}
};

export default config;
