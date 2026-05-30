<script lang="ts">
	// Edit these to make the site yours.
	const name = 'Tyler Auer';
	const tagline = 'Software engineer. Builder of small, sharp tools.';

	const links = [
		{ label: 'Email', href: 'mailto:tyler.auer@gmail.com' },
		{ label: 'GitHub', href: 'https://github.com/TylerAuer' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/' }
	];
</script>

<svelte:head>
	<title>{name}</title>
	<meta name="description" content={tagline} />
</svelte:head>

<main>
	<section class="card">
		<h1>{name}</h1>
		<p class="tagline">{tagline}</p>

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
	}

	:global(html, body) {
		margin: 0;
		height: 100%;
	}

	:global(body) {
		background: var(--bg);
		color: var(--fg);
		font-family:
			ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
	}

	main {
		min-height: 100dvh;
		display: grid;
		place-items: center;
		padding: 2rem;
	}

	.card {
		max-width: 32rem;
		text-align: center;
	}

	h1 {
		margin: 0;
		font-size: clamp(2.5rem, 8vw, 4rem);
		letter-spacing: -0.02em;
	}

	.tagline {
		margin: 0.75rem 0 2rem;
		color: var(--muted);
		font-size: 1.125rem;
		line-height: 1.5;
	}

	.links {
		display: flex;
		gap: 1.5rem;
		justify-content: center;
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
