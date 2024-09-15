<script lang="ts">
  import { Button } from '$lib/components/ui/button'
  import { t } from '$lib/i18n/store'
</script>

<section class="flex min-h-screen flex-col items-center justify-center px-4 text-center">
  <h1 class="mb-4 text-4xl font-bold text-gray-800 dark:text-gray-200 sm:text-5xl md:text-6xl">
    {$t('home.hero.title')}
  </h1>
  <p class="mb-8 max-w-2xl text-xl text-gray-600 sm:text-2xl">
    {$t('home.hero.description')}
  </p>
  <a href="#about">
    <Button variant="outline" size="lg" class="font-semibold">{$t('home.hero.button')}</Button>
  </a>
</section>
