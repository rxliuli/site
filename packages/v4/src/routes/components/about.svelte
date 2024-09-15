<script lang="ts">
  import { t } from '$lib/i18n/store'
</script>

<section class="dark:bg-gray-800 py-20" id={'about'}>
  <div class={'container mx-auto px-4 md:px-0'}>
    <h2 id={'about'} class={'text-4xl font-bold text-center mb-16'}>{$t('home.about.title')}</h2>
    <div class={'flex flex-col md:flex-row'}>
      <section class={'flex-1 flex flex-col gap-2'}>
        <p>
          {$t('home.about.section1')}
        </p>
        <p>
          {$t('home.about.section2')}
        </p>
        <p>
          {$t('home.about.section3')}
        </p>
        <p>
          {$t('home.about.section4')}
        </p>
      </section>
      <section class={'flex-1 flex items-center justify-center'}>
        <img src={'/favicon.jpg'} alt={'profile photo'} class={'w-full md:w-8/12 rounded-lg mt-4 max-w-80'} />
      </section>
    </div>
  </div>
</section>
