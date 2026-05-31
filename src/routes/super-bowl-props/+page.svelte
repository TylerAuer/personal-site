<svelte:head>
  <title>Super Bowl Props · Tyler Auer</title>
  <meta
    name="description"
    content="Super Bowl Props — a web app for running prop-bet pools with friends on the big game."
  />
</svelte:head>

<main>
  <section class="card">
    <a class="back" href="/">&larr; Tyler Auer</a>
    <h1>Super Bowl Props</h1>
    <p class="body">
      For the last 10+ Super Bowls, I&rsquo;ve run a game where dozens of people
      make predictions (props) about the game. Less likely results earn more
      points, and whoever finishes with the most wins.
    </p>
    <p class="body">
      For the last few years, we&rsquo;ve also pooled donations, and the winner
      picks a charity to send the pot to. We&rsquo;ve given over $10k so far!
    </p>
    <nav class="links" aria-label="Project links">
      <a href="https://props.tylerauer.com" rel="noopener noreferrer"
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

  .links {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  .links a {
    font-weight: 500;
  }
</style>
