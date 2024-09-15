<script lang="ts">
  import { t } from '$lib/i18n/store'

  const lifes = [
    {
      name: '貴船神社',
      cover:
        'https://image-proxy.rxliuli.com?url=https://lh3.googleusercontent.com/pw/ABLVV85QrNKm-gLaGZJU89L6-Wg2U91w0fyYOFrfCcpWxbJlHWJ2UMhxbBOwDOaBHl0NkGM0VdXOS17bmva3yyQYT4QLtK-Sg3CrlLjuBpLLHcUTIknIYL7Ah7r0IVhpXRXAe0m9l2YYdKCu-NbeZipHqua-Aw=w2554-h1916-s-no-gm',
      link: 'https://photos.app.goo.gl/XvsDmu2t7axRU8fFA',
    },
    {
      name: '天橋立',
      cover:
        'https://image-proxy.rxliuli.com?url=https://lh3.googleusercontent.com/pw/ABLVV85Hlm7fsHdBCo_jz02FEbvyfQ-Qv-Ns_uGFPXs2PQFVi5pDloBcF14ieZxputFjGJBzIH9HD1NsvR3q_ed2ZBVO7WFc3IdG3lUZbcK4UmTLOkZWf_KZjYWBM-1cpVAOK_ykmrlc_Ww0IZYgKDy7YQkT=w2554-h1916-s-no-gm',
      link: 'https://photos.app.goo.gl/Mmw8Ghjt5XvK7yv39',
    },
    {
      name: '鳥取砂丘',
      cover:
        'https://image-proxy.rxliuli.com?url=https://lh3.googleusercontent.com/pw/ABLVV848uhoIy-HaOhJZ1k8M9vWYkJDoYOAHOje_nEGdHqYAtZ-p36FgBW0pw7g3jC5uYSTHr9Gt-9yfsXs29xUJ8AKwbbqVBREzdJEbxkZWcMBGlVU39mOw6QSSpUc6Vz-BDW3ArLLt7Fu0du7znjz9lR6y=w2554-h1916-s-no-gm',
      link: 'https://photos.app.goo.gl/KyWX9o9WatrqVvYu6',
    },
    {
      name: '岡山城',
      cover:
        'https://image-proxy.rxliuli.com?url=https://lh3.googleusercontent.com/pw/ABLVV87IH1sqJN7NOS9sOk9xsWy3GuOkSOvdOh06g_s3yfPEfvvDTtJOQody64Ln-rWbOYotUM3b8KeIjujXgUdN-eRjGGCqUxtsilMLU7xK_kmFZCy0yzanhpOTyNTsPbUAL3ySMUvLtcsriMTcuQgdeBK6=w2554-h1916-s-no-gm',
      link: 'https://photos.app.goo.gl/1qnzpDPrCAWJktUi6',
    },
    {
      name: '姫路城',
      cover:
        'https://image-proxy.rxliuli.com?url=https://lh3.googleusercontent.com/pw/ABLVV85bzlGBk0iC9iac5b4ddekJcgBsrt4d1cJgPnirSWMl6F1B5UH82Gtle9TMv9wUiFKu-1d0I_gSFKDAwmHGJZb2oE8JMfP4nXh-fjY1-Gn3LZyPcXQSjbSScq34ySolVZat1y0YZvzPxmfbFKco073I=w2554-h1916-s-no-gm',
      link: 'https://photos.app.goo.gl/9rJD5EvkF4EWYu9B7',
    },
    {
      name: '神戸 波止場町',
      cover:
        'https://image-proxy.rxliuli.com?url=https://lh3.googleusercontent.com/pw/ABLVV85uwigja5-zK2JqYI7PvAOSs6cQ2Y09lm0nRQV1xmeUANr88Kxt7ixfLwxL6hXKEwpgYj2gjxWOw2ZPahEIxeg_pSAHVwp1M19uB5PLJHnE8Y28j_khEOyk0iCcG_0Nv53vc-BVFrt1vgwOpwjqYWgA=w2554-h1916-s-no-gm',
      link: 'https://photos.app.goo.gl/LxroX4gxiXE5hsTXA',
    },
    {
      name: '大阪 通天阁',
      cover:
        'https://image-proxy.rxliuli.com?url=https://lh3.googleusercontent.com/pw/ABLVV85NUlil2S39WB7WJA9SmUDlimd3fdcMQVF1ByCZ9k6sprG8ol5RYVmdpHpfhn2emiRNqqsUKLl3Epn2MQC7TIIYdj14h0G79Yf8gnSYvYq-UG5CgUlcxlpKj3vz0vpto7sLOrE9m0gKPS9Cz9E9x_KO=w2554-h1916-s-no-gm',
      link: 'https://photos.app.goo.gl/2khgj32pW175pEta8',
    },
    {
      name: '京都 鴨川',
      cover:
        'https://image-proxy.rxliuli.com?url=https://lh3.googleusercontent.com/pw/ABLVV85Rtp8XbeR2sHzvh_7Rsl8-SC-b3hurskiBusVEmMtHiYQjktWhHsgeJ3d0INX0Zt0Fo-fY1NBZyzruYaVxXvfJ-Bnvd4-IKwDJc6GUHMzgs2KSh07kzjVXsj3KHF8rKHt8kp5xxSAVKxfffAhO5q7b=w2554-h1916-s-no-gm',
      link: 'https://photos.app.goo.gl/kaiempVe5LsU64Gw5',
    },
    {
      name: '奈良',
      cover:
        'https://image-proxy.rxliuli.com?url=https://lh3.googleusercontent.com/pw/ABLVV84bZ8_WOS87gkbT2eyRTNZB2Yay7e7dg8Peb9SM8D7yZYCly3FTazv8fpatiNZo1CqEdWYNlR37MQC15Rz9OzN9oXGlSuO88EweozKpNCjf6gqKkPnJJnQmWwUCUcmIMqSjk9s-WKXCYYilA7FWSNPY=w2554-h1916-s-no-gm',
      link: 'https://photos.app.goo.gl/1rj3qHz8K8DhzBQN7',
    },
  ]
</script>

<section class="dark:bg-gray-800 py-20" id={'life'}>
  <div class={'container mx-auto'}>
    <h2 id={'life'} class={'text-4xl font-bold text-center mb-16'}>{$t('home.life.title')}</h2>
    <p class={'font-bold text-center mb-16'}>{$t('home.life.description')}</p>
    <ul
      class={'grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-3 lg:gap-16 px-4 md:px-0'}
    >
      {#each lifes as it}
        <li>
          <a href={it.link} target="_blank" class="group">
            <img src={it.cover} alt={''} class={'rounded-lg w-full'} />
            <footer class={'font-bold mb-2 text-center opacity-60 group-hover:opacity-100'}>
              {it.name}
            </footer>
          </a>
        </li>
      {/each}
    </ul>
  </div>
</section>
