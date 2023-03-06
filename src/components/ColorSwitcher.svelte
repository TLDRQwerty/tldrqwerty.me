<script>
  import { onMount } from "svelte";
  import { IconMoon, IconFlare } from "@tabler/icons-svelte";
  const STORAGE_KEY = "PREFERRED_COLOR_THEME";

  let theme = localStorage.getItem(STORAGE_KEY) ?? "light";

  onMount(() => {
    const userPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const storageTheme = localStorage.getItem(STORAGE_KEY);
    if (storageTheme != null) {
      theme = storageTheme;
    } else if (userPrefersDark) {
      theme = "dark";
    }
  });

  function toggleTheme() {
    theme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", theme !== "light");
    localStorage.setItem(STORAGE_KEY, theme);
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
