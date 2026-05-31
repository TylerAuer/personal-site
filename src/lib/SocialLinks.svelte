<script lang="ts">
  import IconGitHub from "~icons/mdi/github";
  import IconLinkedIn from "~icons/mdi/linkedin";

  const links = [
    { label: "GitHub", href: "https://github.com/tylerauer", icon: IconGitHub },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/tyler-auer-like-hour/",
      icon: IconLinkedIn,
    },
  ];
</script>

<nav class="social" aria-label="Social links">
  {#each links as link}
    <a
      href={link.href}
      rel="noopener noreferrer"
      aria-label={link.label}
      title={link.label}
    >
      <link.icon class="icon" aria-hidden="true" />
    </a>
  {/each}
</nav>

<style>
  .social {
    display: flex;
    gap: 1.25rem;
    align-items: center;
    flex-wrap: wrap;
  }

  /* Muted by default, accent on hover. Override the site's base link border
     so icons never get the underline. */
  .social a {
    display: inline-flex;
    color: var(--muted);
    border-bottom: none;
    transition: color 0.15s ease;
  }

  .social a:hover {
    color: var(--accent);
  }

  /* Icons render inside the unplugin-icons component, so reach them globally. */
  .social :global(.icon) {
    width: 1.5rem;
    height: 1.5rem;
  }
</style>
