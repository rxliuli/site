<script lang="ts">
  import Footer from '$lib/components/logic/footer.svelte'
  import Navbar from '$lib/components/logic/navbar.svelte'
  import { html } from './privacy.md'
</script>

<Navbar />
<div class="container prose dark:prose-dark lg:prose-xl lg:dark:prose-xl py-4">
  {@html html}
</div>
<Footer />
