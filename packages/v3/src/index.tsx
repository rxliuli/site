import { hydrate, prerender as ssr } from 'preact-iso'
import './style.css'
import logo from './assets/avatar.jpg'
import twitter from './assets/twitter.svg?raw'
import github from './assets/github.svg?raw'
import telegram from './assets/telegram.svg?raw'
import blog from './assets/blog.svg?raw'
import pixiv from './assets/pixiv.svg?raw'

export function App() {
  return (
    <div class="dark:bg-gray-900 leading-relaxed">
      <section class={'h-screen container mx-auto flex flex-col px-4 md:px-0'}>
        <header class="w-full flex items-center justify-between py-2">
          <img src={logo} alt={'logo'} className="h-8 w-8 rounded-full" />
          <nav>
            <ul class={'flex items-center gap-4'}>
              {[
                {
                  name: '关于',
                  link: '#about',
                },
                {
                  name: '作品',
                  link: '#work',
                },
                {
                  name: '生活',
                  link: '#life',
                },
                {
                  name: '联系',
                  link: '#contact',
                },
              ].map((it) => (
                <li key={it.name}>
                  <a class={'font-bold hover:text-yellow-100'} href={it.link}>
                    {it.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <div className={'grow flex flex-col justify-center gap-6'}>
          <h1 className={'text-4xl font-bold text-center'}>吾辈是琉璃</h1>
          <p className={'text-center text-2xl text-gray-300'}>
            喜欢创造有趣的东西，使用编程和写作作为工具。
          </p>
          <div class={'flex items-center justify-center gap-4'}>
            {[
              {
                name: 'github',
                link: 'https://github.com/rxliuli',
                icon: github,
              },
              {
                title: 'twitter',
                link: 'https://twitter.com/rxliuli',
                icon: twitter,
              },
              {
                title: 'blog',
                link: 'https://blog.rxliuli.com/',
                icon: blog,
              },
              {
                title: 'telegram',
                link: 'https://t.me/rxliuli',
                icon: telegram,
              },
              {
                title: 'pixiv',
                link: 'https://www.pixiv.net/users/16247572',
                icon: pixiv,
              },
            ].map((it) => (
              <a
                href={it.link}
                target="_blank"
                dangerouslySetInnerHTML={{
                  __html: it.icon,
                }}
                class={'icon'}
                aria-label={it.title}
              ></a>
            ))}
          </div>
        </div>
      </section>
      <section class="dark:bg-gray-800 py-20" id={'about'}>
        <div class={'container mx-auto px-4 md:px-0'}>
          <h2 id={'about'} class={'text-4xl font-bold text-center mb-16'}>
            关于
          </h2>
          <div className={'flex flex-col md:flex-row'}>
            <section className={'flex-1 flex flex-col gap-2'}>
              <p>
                你好，吾辈是
                rxliuli，中文名是琉璃。吾辈喜欢创造、喜欢做不一样的事情。目前处于
                gap year 在日本留学，希望能让波澜不惊的生活有一些变化。
              </p>
              <p>
                之前工作了 5 年，第一份工作中做过 Java 后端，2019
                年时对前端日新月异的变化更感兴趣，便转向了前端工作。见证过公司从{' '}
                {'Vue2 => React => Vue3'} 的迁移过程。
              </p>
              <p>
                工作之余，吾辈也会写一些开源项目，大多数都是自用。像是
                Chrome、VSCode 插件、网站，JavaScript Lib/CLI
                等等。偶尔也会参与一些社区项目，但直到现在，仍然是远远不足的。
              </p>
              <p>
                兴趣一直在变化，从古早的网文和三国杀，到后来的动画和漫画，再到现在的编程和旅行。吾辈喜欢尝试新鲜事物，也喜欢分享自己的经历和感受。
              </p>
            </section>
            <section className={'flex-1 flex items-center justify-center'}>
              <img
                src={logo}
                alt={'profile photo'}
                className={'w-full md:w-8/12 rounded-lg mt-4 max-w-80'}
              />
            </section>
          </div>
        </div>
      </section>
      <section class="dark:bg-gray-900 py-20" id={'work'}>
        <div class={'container mx-auto'}>
          <h2 id={'work'} class={'text-4xl font-bold text-center mb-16'}>
            作品
          </h2>
          <ul
            className={
              'grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-3 lg:gap-16 px-4 md:px-0'
            }
          >
            {[
              {
                name: 'Mark Magic',
                description:
                  '一个基于 Markdown 的数据连接与转换工具，解决不同工具之间数据转换以及部分常用工具之间的协调。',
                link: 'https://mark-magic.rxliuli.com',
              },
              {
                name: 'Joplin VSCode Plugin',
                description:
                  '基于 Joplin 的社区工具，提供在 VSCode 中管理 Joplin 笔记的功能，结合 VSCode 现有的强大编辑器及其生态。',
                link: 'https://marketplace.visualstudio.com/items?itemName=rxliuli.joplin-vscode-plugin',
              },
              {
                name: 'Bilibili Markdown',
                description:
                  '为 bilibili 专栏的新版编辑器增加粘贴 markdown 的功能，将 markdown 内容导入到专栏的编辑器中。',
                link: 'https://chromewebstore.google.com/detail/gnhfnomkebeabllbfnodhhhebnieehoe',
              },
              {
                name: 'Clean Twitter',
                description:
                  '一个 Chrome 插件，清理 Twitter 上烦人的内容或功能，让 Twitter 体验更加干净。',
                link: 'https://chrome.google.com/webstore/detail/lbbfmkbgembfbohdadeggdcgdkmfdmpb',
              },
              {
                name: '魔法少女小圆 飞向星空',
                description:
                  '维护同人小说 飞向星空 的翻译工作，基于 mark-magic 提供了在线网站和 epub 版本。',
                link: 'https://tts.liuli.moe',
              },
              {
                name: 'Liuli Tools',
                description:
                  '一个 JavaScript 工具库的 Monroepo，包含绝大部分吾辈常用的自行实现的函数库，像是 vite-plugin-node 用来打包 VSCode 插件和 JavaScript Lib 的 vite 插件。',
                link: 'https://dev.rxliuli.com/',
              },
            ].map((it) => (
              <li>
                <a
                  href={it.link}
                  target="_blank"
                  class={'hover:text-yellow-100'}
                >
                  <h3 className={'text-2xl font-bold mb-2'}>{it.name}</h3>
                  <p>{it.description}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section class="dark:bg-gray-800 py-20" id={'life'}>
        <div class={'container mx-auto'}>
          <h2 id={'work'} class={'text-4xl font-bold text-center mb-16'}>
            生活
          </h2>
          <p class={'text-2xl font-bold text-center mb-16'}>
            目前住在京都，有空的时候喜欢写点代码，或者出去看各种各样的风景，长假时喜欢出去旅行，之前在寒假时在关西转了一圈。
          </p>
          <ul
            className={
              'grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-3 lg:gap-16 px-4 md:px-0'
            }
          >
            {[
              {
                name: '貴船神社',
                cover:
                  'https://lh3.googleusercontent.com/pw/ABLVV85QrNKm-gLaGZJU89L6-Wg2U91w0fyYOFrfCcpWxbJlHWJ2UMhxbBOwDOaBHl0NkGM0VdXOS17bmva3yyQYT4QLtK-Sg3CrlLjuBpLLHcUTIknIYL7Ah7r0IVhpXRXAe0m9l2YYdKCu-NbeZipHqua-Aw=w2554-h1916-s-no-gm',
                link: 'https://photos.app.goo.gl/XvsDmu2t7axRU8fFA',
              },
              {
                name: '天橋立',
                cover:
                  'https://lh3.googleusercontent.com/pw/ABLVV85Hlm7fsHdBCo_jz02FEbvyfQ-Qv-Ns_uGFPXs2PQFVi5pDloBcF14ieZxputFjGJBzIH9HD1NsvR3q_ed2ZBVO7WFc3IdG3lUZbcK4UmTLOkZWf_KZjYWBM-1cpVAOK_ykmrlc_Ww0IZYgKDy7YQkT=w2554-h1916-s-no-gm',
                link: 'https://photos.app.goo.gl/Mmw8Ghjt5XvK7yv39',
              },
              {
                name: '鳥取砂丘',
                cover:
                  'https://lh3.googleusercontent.com/pw/ABLVV848uhoIy-HaOhJZ1k8M9vWYkJDoYOAHOje_nEGdHqYAtZ-p36FgBW0pw7g3jC5uYSTHr9Gt-9yfsXs29xUJ8AKwbbqVBREzdJEbxkZWcMBGlVU39mOw6QSSpUc6Vz-BDW3ArLLt7Fu0du7znjz9lR6y=w2554-h1916-s-no-gm',
                link: 'https://photos.app.goo.gl/KyWX9o9WatrqVvYu6',
              },
              {
                name: '岡山城',
                cover:
                  'https://lh3.googleusercontent.com/pw/ABLVV87IH1sqJN7NOS9sOk9xsWy3GuOkSOvdOh06g_s3yfPEfvvDTtJOQody64Ln-rWbOYotUM3b8KeIjujXgUdN-eRjGGCqUxtsilMLU7xK_kmFZCy0yzanhpOTyNTsPbUAL3ySMUvLtcsriMTcuQgdeBK6=w2554-h1916-s-no-gm',
                link: 'https://photos.app.goo.gl/1qnzpDPrCAWJktUi6',
              },
              {
                name: '姫路城',
                cover:
                  'https://lh3.googleusercontent.com/pw/ABLVV85bzlGBk0iC9iac5b4ddekJcgBsrt4d1cJgPnirSWMl6F1B5UH82Gtle9TMv9wUiFKu-1d0I_gSFKDAwmHGJZb2oE8JMfP4nXh-fjY1-Gn3LZyPcXQSjbSScq34ySolVZat1y0YZvzPxmfbFKco073I=w2554-h1916-s-no-gm',
                link: 'https://photos.app.goo.gl/9rJD5EvkF4EWYu9B7',
              },
              {
                name: '神戸 波止場町',
                cover:
                  'https://lh3.googleusercontent.com/pw/ABLVV85uwigja5-zK2JqYI7PvAOSs6cQ2Y09lm0nRQV1xmeUANr88Kxt7ixfLwxL6hXKEwpgYj2gjxWOw2ZPahEIxeg_pSAHVwp1M19uB5PLJHnE8Y28j_khEOyk0iCcG_0Nv53vc-BVFrt1vgwOpwjqYWgA=w2554-h1916-s-no-gm',
                link: 'https://photos.app.goo.gl/LxroX4gxiXE5hsTXA',
              },
              {
                name: '大阪 通天阁',
                cover:
                  'https://lh3.googleusercontent.com/pw/ABLVV85NUlil2S39WB7WJA9SmUDlimd3fdcMQVF1ByCZ9k6sprG8ol5RYVmdpHpfhn2emiRNqqsUKLl3Epn2MQC7TIIYdj14h0G79Yf8gnSYvYq-UG5CgUlcxlpKj3vz0vpto7sLOrE9m0gKPS9Cz9E9x_KO=w2554-h1916-s-no-gm',
                link: 'https://photos.app.goo.gl/2khgj32pW175pEta8',
              },
              {
                name: '京都 鴨川',
                cover:
                  'https://lh3.googleusercontent.com/pw/ABLVV85Rtp8XbeR2sHzvh_7Rsl8-SC-b3hurskiBusVEmMtHiYQjktWhHsgeJ3d0INX0Zt0Fo-fY1NBZyzruYaVxXvfJ-Bnvd4-IKwDJc6GUHMzgs2KSh07kzjVXsj3KHF8rKHt8kp5xxSAVKxfffAhO5q7b=w2554-h1916-s-no-gm',
                link: 'https://photos.app.goo.gl/kaiempVe5LsU64Gw5',
              },
              {
                name: '奈良',
                cover:
                  'https://lh3.googleusercontent.com/pw/ABLVV84bZ8_WOS87gkbT2eyRTNZB2Yay7e7dg8Peb9SM8D7yZYCly3FTazv8fpatiNZo1CqEdWYNlR37MQC15Rz9OzN9oXGlSuO88EweozKpNCjf6gqKkPnJJnQmWwUCUcmIMqSjk9s-WKXCYYilA7FWSNPY=w2554-h1916-s-no-gm',
                link: 'https://photos.app.goo.gl/1rj3qHz8K8DhzBQN7',
              },
            ].map((it) => (
              <li>
                <a
                  href={it.link}
                  target="_blank"
                  class={'text-gray-300 hover:text-yellow-100'}
                >
                  <img
                    src={it.cover}
                    alt={''}
                    className={'rounded-lg w-full'}
                  />
                  <footer className={'font-bold mb-2 text-center'}>
                    {it.name}
                  </footer>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section class="dark:bg-gray-900 py-20" id={'contact'}>
        <div class={'container mx-auto'}>
          <h2 id={'work'} class={'text-4xl font-bold text-center mb-16'}>
            联系
          </h2>
          <p class={'text-2xl font-bold text-center mb-16'}>
            目前没有找工作的打算，但如果要起来出去约饭或出去玩，请联系吾辈。
          </p>
        </div>
      </section>
      <footer class={'dark:bg-gray-800 py-4'}>
        <div class={'container mx-auto px-4 md:px-0'}>
          <p class={'text-center text-gray-300'}>
            © 2021{' '}
            <a
              href="https://github.com/rxliuli"
              target="_blank"
              class={'hover:text-yellow-100'}
            >
              rxliuli
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

if (typeof window !== 'undefined') {
  hydrate(<App />, document.getElementById('app'))
}

export async function prerender(data) {
  return await ssr(<App {...data} />)
}
