<script lang="ts">
  // Self-hosted fonts (matches the tessy project): Poppins for body, Archivo for headings.
  import "@fontsource/poppins/400.css";
  import "@fontsource/poppins/700.css";
  import "@fontsource/archivo/400.css";
  import "@fontsource/archivo/700.css";
  // Handwritten font for the "like 'hour'" pronunciation note.
  import "@fontsource/caveat/600.css";

  let { children } = $props();
</script>

{@render children()}

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

  /* Base link style for the whole site: accent colored, no underline, with a
     bottom border that fades in on hover. Pages only override deviations
     (e.g. muted "back" links, icon links). */
  :global(a) {
    color: var(--accent);
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: border-color 0.15s ease;
  }

  :global(a:hover) {
    border-bottom-color: currentColor;
  }
</style>
