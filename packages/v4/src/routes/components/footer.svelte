<script lang="ts">
  const links = [
    {
      name: '社交网络',
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
      name: '工作',
      links: [
        {
          name: 'ProductHunt',
          url: 'https://producthunt.com/posts/rxliuli',
        },
        {
          name: 'Chrome 插件',
          url: 'https://chromewebstore.google.com/search/rxliuli',
        },
        {
          name: '博客',
          url: 'https://blog.rxliuli.com',
        },
      ],
    },
    {
      name: '生活',
      links: [
        {
          name: 'Youtube 频道',
          url: 'https://www.youtube.com/playlist?list=PL73MTIn8vOLDZLFOc2uX-5R0n_uKpLISM',
        },
      ],
    },
  ]
</script>

<footer id="footer">
  <hr class="w-11/12 mx-auto" />

  <section class="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8" id="contact">
    <div class="col-span-full xl:col-span-2">
      <a href="/" class="font-bold text-xl flex">关注我</a>
    </div>

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
