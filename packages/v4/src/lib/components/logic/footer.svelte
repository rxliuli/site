<script lang="ts">
  import { t } from '$lib/i18n/store'

  const links = [
    {
      name: $t('home.footer.social.title'),
      links: [
        {
          name: 'Twitter',
          url: 'https://x.com/rxliuli',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/rxliuli',
        },
      ],
    },
    {
      name: $t('home.footer.works.title'),
      links: [
        {
          name: 'ProductHunt',
          url: 'https://producthunt.com/posts/rxliuli',
        },
        {
          name: 'Chrome Extension',
          url: 'https://chromewebstore.google.com/search/rxliuli',
        },
        {
          name: 'Blog',
          url: 'https://blog.rxliuli.com',
        },
      ],
    },
    {
      name: $t('home.footer.life.title'),
      links: [
        {
          name: 'Youtube Channel',
          url: 'https://www.youtube.com/playlist?list=PL73MTIn8vOLDZLFOc2uX-5R0n_uKpLISM',
        },
      ],
    },
  ]
</script>

<footer id="footer">
  <hr class="w-11/12 mx-auto" />

  <section class="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8" id="contact">
    <div class="col-span-full xl:col-span-2 font-bold text-xl flex">{$t('home.footer.title')}</div>

    {#each links as group}
      <div class="flex flex-col gap-2">
        <h3 class="font-bold text-lg">{group.name}</h3>
        {#each group.links as link}
          <a href={link.url} class="opacity-60 hover:opacity-100">{link.name}</a>
        {/each}
      </div>
    {/each}
  </section>

  <section class="container pb-14 text-center">
    <h3>&copy; 2024 rxliuli</h3>
  </section>
</footer>
