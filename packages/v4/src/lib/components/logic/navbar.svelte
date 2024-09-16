<script lang="ts">
  import { t } from '$lib/i18n/store'
  import Sun from 'svelte-radix/Sun.svelte'
  import Moon from 'svelte-radix/Moon.svelte'
  import { toggleMode } from 'mode-watcher'
  import { Button } from '$lib/components/ui/button'
</script>

<header class="sticky top-0 z-40 w-full border-b-[1px] py-2 dark:border-b-slate-700 bg-white dark:bg-black">
  <div class="container flex items-center justify-between gap-4">
    <a href="/" class="mr-auto">
      <img src="/favicon.jpg" alt="logo" class="h-8 w-8 rounded-full" />
    </a>
    <div class="flex items-center gap-4">
      <slot />
    </div>
    <Button on:click={toggleMode} variant="outline" size="icon">
      <Sun class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span class="sr-only">{$t('home.navbar.toggleTheme')}</span>
    </Button>
  </div>
</header>
