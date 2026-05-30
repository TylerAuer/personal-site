import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV !== 'production';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		// Fully prerendered static output (no server runtime).
		adapter: adapter({
			fallback: undefined
		}),
		// GitHub Pages serves a project repo under /<repo>/.
		// Empty in dev so local URLs stay at the root.
		paths: {
			base: dev ? '' : '/personal-site'
		}
	}
};

export default config;
