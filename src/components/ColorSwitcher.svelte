<script>
  import { onMount } from "svelte";
  import { IconMoon, IconFlare } from "@tabler/icons-svelte";
  let theme = "light";

  onMount(() => {
    const userPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (userPrefersDark) {
      theme = "dark";
    }
  });

  function toggleTheme() {
    theme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", theme !== "light");
  }
</script>

<button
  class="flex-row flex items-center space-x-2 hover:text-primary-500 p-1"
  on:click={toggleTheme}
>
  {#if theme === "dark"}
    <IconMoon />
  {:else}
    <IconFlare />
  {/if}
</button>
