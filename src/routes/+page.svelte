<script lang="ts">
  import SocialLinks from "$lib/SocialLinks.svelte";

  const projects = [
    { label: "Super Bowl Props", href: "/super-bowl-props" },
    { label: "Fruit Matrix", href: "/fruit-matrix" },
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

    <div class="social-row">
      <SocialLinks />
    </div>

    <div class="tagline">
      <p>Husband and dad of three near Boulder, CO</p>
      <p>
        Founder of <a href="https://tessy.fun" rel="noopener noreferrer"
          >tessy.fun</a
        >, a site for puzzle lovers
      </p>
      <p>Teacher turned software engineer</p>
      <p>Lover of board games and long walks on exposed ridgelines</p>
    </div>

    <nav class="links projects" aria-label="Projects">
      <span class="projects-label">Projects</span>
      {#each projects as project}
        <a href={project.href}>{project.label}</a>
      {/each}
    </nav>
  </section>
</main>

<style>
  /* Content stays horizontally centered with equal left/right margins,
     and vertically centered in the viewport. */
  main {
    min-height: 100dvh;
    display: grid;
    justify-items: center;
    align-content: center;
    padding: 2rem;
  }

  @media (max-width: 640px) {
    main {
      padding: 2rem 1.25rem;
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
    padding-bottom: 2.5rem;
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
    margin: 0 0 2rem;
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

  .links {
    display: flex;
    gap: 1.5rem;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .links a {
    font-weight: 500;
  }

  /* Social icons sit evenly spaced between the name (whose padding reserves
     room for the annotation) and the tagline text. The icons are under
     "Tyler" while the annotation is under "Auer", so equal top/bottom gaps
     here read as balanced. */
  .social-row {
    margin: 0 0 2.5rem;
  }

  /* "Projects:" label above its links, each project on its own line. */
  .projects {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .projects-label {
    color: var(--fg);
    font-weight: 700;
  }
</style>
