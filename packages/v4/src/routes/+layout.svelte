<script lang="ts">
  import '../app.css'
  import { ModeWatcher } from 'mode-watcher'
  import { i18n } from '$lib/i18n/store'
  import { browser } from '$app/environment'

  const locale = browser ? navigator.language : 'en-US'
  i18n.setLocale(locale.includes('zh') ? 'zh-CN' : 'en-US')
</script>

<slot></slot>
<ModeWatcher />
