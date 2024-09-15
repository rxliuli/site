<script lang="ts">
  import '../app.css'
  import { ModeWatcher } from 'mode-watcher'
  import { i18n } from '$lib/i18n/store'
  import { browser } from '$app/environment'

  export let data: {
    locale: string
  }

  // Use the locale from the server if available, otherwise fallback to browser language
  const locale = data.locale ?? (browser ? navigator.language : 'en-US')
  i18n.setLocale(locale.includes('zh') ? 'zh-CN' : 'en-US')
</script>

<slot></slot>
<ModeWatcher />
