<script lang="ts">
  import { t } from '$lib/i18n/store'
  import Navbar from '$lib/components/logic/navbar.svelte'
</script>

<Navbar>
  <a href="#about">{$t('home.navbar.about')}</a>
  <a href="#work">{$t('home.navbar.work')}</a>
  <a href="#life">{$t('home.navbar.life')}</a>
  <a href="#contact">{$t('home.navbar.contact')}</a>
</Navbar>
