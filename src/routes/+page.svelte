<script lang="ts">
	// Self-hosted fonts (matches the tessy project): Poppins for body, Archivo for headings.
	import '@fontsource/poppins/400.css';
	import '@fontsource/poppins/700.css';
	import '@fontsource/archivo/400.css';
	import '@fontsource/archivo/700.css';

	// Edit these to make the site yours.
	const name = 'Tyler Auer';
	const lines = [
		'Husband and 3x Dad near Boulder, CO',
		'Eng at Nextdoor. Former math teacher.',
		'Lover of puzzles, board games, and long walks on exposed ridgelines'
	];
	const description = lines.join(' · ');

	const links = [
		{ label: 'GitHub', href: 'https://github.com/tylerauer' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/tyler-auer-like-hour/' }
	];
</script>

<svelte:head>
	<title>{name}</title>
	<meta name="description" content={description} />
</svelte:head>

<main>
	<section class="card">
		<h1>{name}</h1>
		<div class="tagline">
			{#each lines as line}
				<p>{line}</p>
			{/each}
		</div>

		<nav class="links" aria-label="Social links">
			{#each links as link}
				<a href={link.href} rel="noopener noreferrer">{link.label}</a>
			{/each}
		</nav>
	</section>
</main>

<style>
	:global(:root) {
		--bg: #0f1115;
		--fg: #e7e9ee;
		--muted: #9aa3b2;
		--accent: #6ea8fe;

		/* Font stacks mirrored from the tessy project. */
		--font-body:
			'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		--font-display: 'Archivo', Georgia, serif;
	}

	:global(html, body) {
		margin: 0;
		height: 100%;
	}

	:global(body) {
		background: var(--bg);
		color: var(--fg);
		font-family: var(--font-body);
		-webkit-font-smoothing: antialiased;
	}

	main {
		min-height: 100dvh;
		display: grid;
		place-items: center;
		padding: 2rem;
	}

	.card {
		width: 100%;
		max-width: 1000px;
		text-align: left;
	}

	h1 {
		margin: 0;
		font-family: var(--font-display);
		font-weight: 700;
		font-size: clamp(2.5rem, 8vw, 4rem);
		letter-spacing: -0.02em;
	}

	.tagline {
		margin: 1rem 0 2rem;
		color: var(--muted);
		font-size: 1.125rem;
		line-height: 1.5;
	}

	.tagline p {
		margin: 0.15rem 0;
	}

	.links {
		display: flex;
		gap: 1.5rem;
		justify-content: flex-start;
		flex-wrap: wrap;
	}

	.links a {
		color: var(--accent);
		text-decoration: none;
		font-weight: 500;
		border-bottom: 1px solid transparent;
		transition: border-color 0.15s ease;
	}

	.links a:hover {
		border-bottom-color: currentColor;
	}
</style>
