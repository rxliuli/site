<script lang="ts">
  import { t } from '$lib/i18n/store'

  $: works = [
    {
      name: 'Joplin VSCode Plugin',
      description: $t('home.works.joplin-vscode-plugin.description'),
      link: 'https://marketplace.visualstudio.com/items?itemName=rxliuli.joplin-vscode-plugin',
    },
    {
      name: 'Mark Magic',
      description: $t('home.works.mark-magic.description'),
      link: 'https://mark-magic.rxliuli.com',
    },
    {
      name: 'TypeScript Console',
      description: $t('home.works.typescript-console.description'),
      link: 'https://github.com/rxliuli/typescript-console',
    },
    {
      name: 'Clean Twitter',
      description: $t('home.works.clean-twitter.description'),
      link: 'https://chrome.google.com/webstore/detail/lbbfmkbgembfbohdadeggdcgdkmfdmpb',
    },
    {
      name: $t('home.works.tts.title'),
      description: $t('home.works.tts.description'),
      link: 'https://tts.liuli.moe',
    },
    {
      name: 'Liuli Tools',
      description: $t('home.works.liuli-tools.description'),
      link: 'https://dev.rxliuli.com/',
    },
  ]
</script>

<section class="dark:bg-gray-900 py-20" id={'work'}>
  <div class={'container mx-auto'}>
    <h2 id={'work'} class={'text-4xl font-bold text-center mb-16'}>
      {$t('home.footer.works.title')}
    </h2>
    <div
      class={'grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-3 lg:gap-16 px-4 md:px-0'}
    >
      {#each works as it}
        <a href={it.link} target="_blank" class="opacity-60 hover:opacity-100">
          <h3 class={'text-2xl font-bold mb-2'}>{it.name}</h3>
          <p>{it.description}</p>
        </a>
      {/each}
    </div>
  </div>
</section>
