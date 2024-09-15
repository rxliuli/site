<script lang="ts">
  import { fade } from 'svelte/transition'
  import Hero from './components/hero.svelte'
  import Navbar from './components/navbar.svelte'
  import About from './components/about.svelte'
  import Works from './components/works.svelte'
  import Life from './components/life.svelte'
  import Footer from './components/footer.svelte'
</script>

<main in:fade={{ duration: 300 }}>
  <Navbar />
  <Hero />
  <About />
  <Works />
  <Life />
  <Footer />
</main>
