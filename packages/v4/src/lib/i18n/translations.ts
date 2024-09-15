export const translations = {
  'zh-CN': {
    'home.navbar.about': '关于',
    'home.navbar.work': '工作',
    'home.navbar.life': '生活',
    'home.navbar.contact': '联系',
    'home.navbar.toggleTheme': '切换主题',
    'home.hero.title': '你好，我是琉璃',
    'home.hero.description': '喜欢创造有趣的东西，使用编程和写作作为工具',
    'home.hero.button': '关于我',
    'home.about.title': '关于',
    'home.about.section1':
      '你好，我是 rxliuli，中文名是琉璃。我喜欢创造、喜欢做不一样的事情。目前处于 gap 模式，希望能在两三年内找到自己真正喜欢的事情。',
    'home.about.section2':
      '之前工作了 5 年，第一份工作中做过 Java 后端，2019 年时对前端日新月异的变化更感兴趣，便转向了前端工作。见证过公司从 Vue2 => React => Vue3 的迁移过程。',
    'home.about.section3':
      '工作之余，我也会写一些开源项目，大多数都是自用。像是 Chrome、VSCode 插件、网站，JavaScript Lib/CLI 等等。偶尔也会参与一些社区项目，但直到现在，仍然是远远不足的。',
    'home.about.section4':
      '兴趣一直在变化，从古早的网文和三国杀，到后来的动画和漫画，再到现在的编程和旅行。我喜欢尝试新鲜事物，也喜欢分享自己学到的东西。',
    'home.works.title': '工作',
    'home.works.joplin-vscode-plugin.description':
      '基于 Joplin 的社区工具，提供在 VSCode 中管理 Joplin 笔记的功能，结合 VSCode 现有的强大编辑器及其生态。',
    'home.works.mark-magic.description':
      '一个基于 Markdown 的数据连接与转换工具，解决不同工具之间数据转换以及部分常用工具之间的协调。',
    'home.works.typescript-console.description':
      '在 DevTools 中运行 TypeScript 代码，支持 TypeScript 的在线编译和运行。',
    'home.works.clean-twitter.description':
      '一个 Chrome 插件，清理 Twitter 上烦人的内容或功能，让 Twitter 体验更加干净。',
    'home.works.tts.title': '魔法少女小圆 飞向星空',
    'home.works.tts.description': '维护同人小说 飞向星空 的翻译工作，基于 mark-magic 提供了在线网站和 epub 版本。',
    'home.works.liuli-tools.description':
      '一个 JavaScript 工具库的 Monorepo，包含绝大部分我常用的自行实现的函数库，像是 vite-plugin-node 用来打包 VSCode 插件和 JavaScript Lib 的 vite 插件。',
    'home.life.title': '生活',
    'home.life.description': '目前全国旅行中，同时寻找自己想做的事情。',
    'home.footer.title': '关注我',
    'home.footer.social.title': '社交网络',
    'home.footer.works.title': '作品',
    'home.footer.life.title': '生活',
  },
  'en-US': {
    'home.navbar.about': 'About',
    'home.navbar.work': 'Work',
    'home.navbar.life': 'Life',
    'home.navbar.contact': 'Contact',
    'home.navbar.toggleTheme': 'Toggle theme',
    'home.hero.title': 'Hello, I am Liuli',
    'home.hero.description': 'I like to create interesting things, using programming and writing as tools',
    'home.hero.button': 'About me',
    'home.about.title': 'About',
    'home.about.section1':
      'Hello, I am rxliuli, my Chinese name is Liuli. I like to create, like to do different things. Currently in a gap period, hoping to find something they really like in the next two or three years.',
    'home.about.section2':
      'I worked for 5 years before. My first job was Java backend, and in 2019, I switched to frontend development because I was more interested in the rapid changes of frontend. I witnessed the company from Vue2 => React => Vue3 migration process.',
    'home.about.section3':
      'In my spare time, I also write some open source projects, most of them are self-used. Such as Chrome, VSCode plugins, websites, JavaScript Lib/CLI tools, etc. Occasionally, I also participate in some community projects, but until now, it is still far from enough.',
    'home.about.section4':
      'My interests have changed over time, from ancient online novels and Sanguosha, to animation and comics, to programming and travel. I like to try new things, and I also like to share what I have learned.',
    'home.works.title': 'Works',
    'home.works.joplin-vscode-plugin.description':
      'A community tool based on Joplin, providing functions to manage Joplin notes in VSCode, combining the existing powerful editor and its ecosystem of VSCode.',
    'home.works.mark-magic.description':
      'A data connection and conversion tool based on Markdown, solving data conversion between different tools and some common tool coordination.',
    'home.works.clean-twitter.description':
      'A Chrome plugin that cleans up annoying content or features on Twitter, making Twitter more clean.',
    'home.works.tts.title': 'PMMM TtS Chinese Translation',
    'home.works.tts.description':
      'Translation work for the fan novel "Flying to the Sky" of the magical girl "Magic Girl Yu", based on mark-magic to provide online website and epub version.',
    'home.works.typescript-console.description':
      'Run TypeScript code in DevTools, supporting online compilation and execution of TypeScript.',
    'home.works.liuli-tools.description':
      'A JavaScript tool library Monorepo, containing most of the functions I often use myself, such as vite-plugin-node used to package VSCode plugins and JavaScript Lib.',
    'home.life.title': 'Life',
    'home.life.description': 'Currently traveling around the country, looking for what I really want to do.',
    'home.footer.title': 'Follow me',
    'home.footer.social.title': 'Social Network',
    'home.footer.works.title': 'Works',
    'home.footer.life.title': 'Life',
  },
}

export type Locale = keyof typeof translations
export type TranslationKey = keyof (typeof translations)['en-US']

