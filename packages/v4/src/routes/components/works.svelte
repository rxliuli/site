<script lang="ts">
  const works = [
    {
      name: 'Joplin VSCode Plugin',
      description:
        '基于 Joplin 的社区工具，提供在 VSCode 中管理 Joplin 笔记的功能，结合 VSCode 现有的强大编辑器及其生态。',
      link: 'https://marketplace.visualstudio.com/items?itemName=rxliuli.joplin-vscode-plugin',
    },
    {
      name: 'Mark Magic',
      description: '一个基于 Markdown 的数据连接与转换工具，解决不同工具之间数据转换以及部分常用工具之间的协调。',
      link: 'https://mark-magic.rxliuli.com',
    },
    {
      name: 'TypeScript Console',
      description: '在 DevTools 中运行 TypeScript 代码，支持 TypeScript 的在线编译和运行。',
      link: 'https://github.com/rxliuli/typescript-console',
    },
    {
      name: 'Clean Twitter',
      description: '一个 Chrome 插件，清理 Twitter 上烦人的内容或功能，让 Twitter 体验更加干净。',
      link: 'https://chrome.google.com/webstore/detail/lbbfmkbgembfbohdadeggdcgdkmfdmpb',
    },
    {
      name: '魔法少女小圆 飞向星空',
      description: '维护同人小说 飞向星空 的翻译工作，基于 mark-magic 提供了在线网站和 epub 版本。',
      link: 'https://tts.liuli.moe',
    },
    {
      name: 'Liuli Tools',
      description:
        '一个 JavaScript 工具库的 Monroepo，包含绝大部分我常用的自行实现的函数库，像是 vite-plugin-node 用来打包 VSCode 插件和 JavaScript Lib 的 vite 插件。',
      link: 'https://dev.rxliuli.com/',
    },
  ]
</script>

<section class="dark:bg-gray-900 py-20" id={'work'}>
  <div class={'container mx-auto'}>
    <h2 id={'work'} class={'text-4xl font-bold text-center mb-16'}>作品</h2>
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
