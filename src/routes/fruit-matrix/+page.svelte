<svelte:head>
  <title>Fruit Matrix · Tyler Auer</title>
  <meta
    name="description"
    content="Fruit Matrix — a grid-based puzzle game about arranging fruit."
  />
</svelte:head>

<main>
  <section class="card">
    <a class="back" href="/">&larr; Tyler Auer</a>
    <h1>Fruit Matrix</h1>
    <p class="body">
      Place fruit on a grid according to how tasty and easy to eat they are.
      Then see how your ratings compare to everyone else&rsquo;s.
    </p>
    <p class="body">
      This was my first project when I was teaching myself to code. Inspired by <a
        href="https://xkcd.com/388/"
        rel="noopener noreferrer">xkcd</a
      >.
    </p>
    <nav class="links" aria-label="Project links">
      <a href="https://fruit.tylerauer.com" rel="noopener noreferrer"
        >Visit the project &rarr;</a
      >
    </nav>
  </section>
</main>

<style>
  main {
    min-height: 100dvh;
    display: grid;
    justify-items: center;
    align-content: start;
    padding: clamp(3rem, 8vh, 5rem) 2rem 4rem;
  }

  @media (max-width: 640px) {
    main {
      padding: 2rem 1.25rem 3rem;
    }
  }

  .card {
    width: min(36rem, 100%);
    text-align: left;
  }

  /* Uses the site-wide accent link style; only layout differs here. */
  .back {
    display: inline-block;
    margin-bottom: 1.5rem;
    font-size: 0.95rem;
  }

  h1 {
    margin: 0;
    font-family: var(--font-display);
    font-weight: 700;
    font-size: clamp(2.5rem, 8vw, 4rem);
    letter-spacing: -0.02em;
  }

  .body {
    margin: 1rem 0 2rem;
    color: var(--muted);
    font-size: clamp(1rem, 4.5vw, 1.125rem);
    line-height: 1.5;
  }

  /* Slightly tighter gap between consecutive paragraphs. */
  .body:not(:last-of-type) {
    margin-bottom: 1.5rem;
  }

  .links {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  .links a {
    font-weight: 500;
  }
</style>
