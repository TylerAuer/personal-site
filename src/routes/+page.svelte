<script lang="ts">
  // Self-hosted fonts (matches the tessy project): Poppins for body, Archivo for headings.
  import "@fontsource/poppins/400.css";
  import "@fontsource/poppins/700.css";
  import "@fontsource/archivo/400.css";
  import "@fontsource/archivo/700.css";
  // Handwritten font for the "like 'hour'" pronunciation note.
  import "@fontsource/caveat/600.css";

  const links = [
    { label: "GitHub", href: "https://github.com/tylerauer" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/tyler-auer-like-hour/",
    },
  ];
</script>

<svelte:head>
  <title>Tyler Auer</title>
  <meta
    name="description"
    content="Husband and dad of three near Boulder, CO · Eng at Nextdoor. Former math teacher. · Founder of tessy.fun, a site for puzzle lovers. · Lover of puzzles, board games, and long walks on exposed ridgelines"
  />
</svelte:head>

<main>
  <section class="card">
    <h1>
      Tyler <span class="last-name"
        >Auer<span class="annotation" aria-hidden="true">
          <svg class="arrow" viewBox="0 0 64 56" fill="none">
            <path
              d="M50 50 C24 46 6 40 18 11"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
            />
            <path
              d="M18 11 L7 18 M18 11 L23 23"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span class="annotation-text">like &ldquo;hour&rdquo;</span>
        </span></span
      >
    </h1>
    <div class="tagline">
      <p>Husband and dad of three near Boulder, CO</p>
      <p>
        Founder of <a href="https://tessy.fun" rel="noopener noreferrer"
          >tessy.fun</a
        >, a site for puzzle lovers.
      </p>
      <p>Eng at Nextdoor, former math teacher</p>
      <p>Lover of board games and long walks on exposed ridgelines</p>
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
    --accent: #b794f6;

    /* Font stacks mirrored from the tessy project. */
    --font-body: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    --font-display: "Archivo", Georgia, serif;
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

  /* Content stays horizontally centered with equal left/right margins.
     Vertically: ~1/3 down on desktop, near the top on mobile. */
  main {
    min-height: 100dvh;
    display: grid;
    justify-items: center;
    align-content: start;
    padding: 33vh 2rem 2rem;
  }

  @media (max-width: 640px) {
    main {
      padding: clamp(2rem, 6vh, 4rem) 1.25rem 2rem;
    }
  }

  .card {
    /* Shrink-wrap the text block so it centers with equal left/right margins
       (the text stays left-aligned within the block). */
    width: max-content;
    max-width: 100%;
    text-align: left;
  }

  h1 {
    margin: 0;
    /* Reserve space below the name for the handwritten annotation. */
    padding-bottom: 3.5rem;
    font-family: var(--font-display);
    font-weight: 700;
    font-size: clamp(2.5rem, 8vw, 4rem);
    letter-spacing: -0.02em;
  }

  .last-name {
    position: relative;
  }

  /* "like 'hour'" note + hand-drawn arrow pointing up at the last name. */
  .annotation {
    position: absolute;
    top: 100%;
    left: 0.1em;
    display: flex;
    align-items: flex-start;
    gap: 0.1rem;
    color: var(--accent);
    transform: rotate(-5deg);
    transform-origin: top left;
    pointer-events: none;
  }

  .annotation .arrow {
    width: clamp(2rem, 5vw, 2.75rem);
    height: auto;
    margin-top: -0.35em;
    /* Nudge just the arrow down/right. */
    transform: translate(4px, 4px);
    flex: none;
  }

  .annotation-text {
    font-family: "Caveat", cursive;
    font-weight: 600;
    font-size: clamp(1.25rem, 4vw, 1.85rem);
    line-height: 1;
    white-space: nowrap;
    letter-spacing: 0.01em;
  }

  .tagline {
    margin: 1rem 0 2rem;
    color: var(--muted);
    /* Smaller on phones so statements fit on fewer lines. */
    font-size: clamp(1rem, 4.5vw, 1.125rem);
    /* Tight within a wrapped line so a wrap reads as continuation... */
    line-height: 1.35;
  }

  .tagline p {
    /* ...and a clear gap between statements so they don't blur together. */
    margin: 0 0 0.85rem;
    /* Avoid awkward single-word orphans on the second wrapped line. */
    text-wrap: balance;
  }

  .tagline p:last-child {
    margin-bottom: 0;
  }

  .tagline a {
    color: var(--accent);
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: border-color 0.15s ease;
  }

  .tagline a:hover {
    border-bottom-color: currentColor;
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
