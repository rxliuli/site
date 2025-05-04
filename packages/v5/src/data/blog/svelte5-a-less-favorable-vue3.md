---
title: 'Svelte5: A Less Favorable Vue3'
slug: svelte5-a-less-favorable-vue3
date: 2025-03-08
summary: Svelte5 was released in October last year, touted as the best version of Svelte to date. The team was particularly proud of "runes," a reactive state system built on proxies. However, after experiencing Vue3's Composition API and SolidJS signals, I didn't feel particularly excited.
tags: [Svelte5, Vue3, Frontend]
status: published
---

## Background

Svelte5 was released in October last year, touted as the best version of Svelte to date. The team was particularly proud of "runes," a reactive state system built on proxies. However, after experiencing Vue3's Composition API and SolidJS signals, I didn't feel particularly excited. This blog outlines specific issues encountered when using Svelte5 in real projects. If you're a Svelte5 enthusiast, you might want to stop reading now.

## Runes Only Work in Svelte Components or .svelte.ts Files

When trying to write hooks with runes similar to React/Vue, like `useCounter`:

```ts
export function useCounter() {
  let count = $state(0)
  return {
    get value() {
      return count
    },
    inc() {
      count++
    },
    dec() {
      count--
    },
  }
}

const counter = useCounter()
console.log(counter.value)
counter.inc()
```

This function cannot be placed in regular .ts files. It must use the .svelte.ts extension and be compiled by @sveltejs/vite-plugin-svelte, otherwise you'll get `$state is not defined`. This also applies to unit tests - if you want to use runes (typically for testing hooks/Svelte components), the filename must end with .svelte.test.ts. This creates unpleasant code infection.

> [Source documentation](https://svelte.dev/docs/svelte/what-are-runes#:~:text=Runes%20are%20symbols%20that%20you%20use%20in%20.svelte%20and%20.svelte.js%20/%20.svelte.ts%20files%20to%20control%20the%20Svelte%20compiler)

## Hooks Using Runes Must Wrap State in Functions

Notice how the returned value in useCounter is wrapped in a getter? This is mandatory. If you try to write a hook that directly returns rune states (whether $state or $derived), they must be wrapped in functions to "maintain reactivity," otherwise you'll get an error pointing to [this documentation](https://svelte.dev/docs/svelte/compiler-warnings#state_referenced_locally). This also applies to function parameters:

```ts
import { onMount } from 'svelte'

export function useTime() {
  let now = $state(new Date())
  onMount(() => {
    const interval = setInterval(() => {
      now = new Date()
    }, 1000)
    return () => clearInterval(interval)
  })
  return now
}
```

You can't simply return `{ now }` but must use getters/setters, forcing more boilerplate:

```ts
export function useTime() {
  // other code...
  return {
    get now() {
      return now
    },
    set now(value) {
      now = value
    },
  }
}
```

- [Related discussion](https://github.com/sveltejs/svelte/discussions/15264)
- [TanStack Query issue](https://github.com/TanStack/query/pull/6981#issuecomment-2002611355)

## Classes as First-Class Citizens for Runes... or Not?

When I mentioned wrapping runes states in functions, the Svelte team left themselves an escape hatch: classes. The following code works by directly returning a class instance! If you check SvelteKit's official code, they even combine class declaration and creation: [SvelteKit example](https://github.com/sveltejs/kit/blob/3bab7e3eea4dda6ec485d671803709b70852f28b/packages/kit/src/runtime/client/state.svelte.js#L31-L40)

```ts
export function useClazz1() {
  class Clazz1 {
    count = $state(0)
    inc() {
      this.count++
    }
    dec() {
      this.count--
    }
  }
  return new Clazz1()
}
```

However, this doesn't work with plain JavaScript objects - it fails at compile time:

```ts
export function usePojo() {
  return {
    value: $state(0), // `$state(...)` can only be used as a variable declaration initializer or a class field https://svelte.dev/e/state_invalid_placement
    inc() {
      this.value++
    },
    dec() {
      this.value--
    },
  }
}
```

Can $state make an entire class reactive?

```ts
class Clazz2 {
  value = 0
  inc() {
    this.value++
  }
  dec() {
    this.value--
  }
}
const clazz = $state(new Clazz2())
```

Of course not. Making class fields reactive like MobX seems too difficult. Interestingly, you can use plain JS objects here:

```ts
const clazz = $state({
  value: 0,
  inc() {
    this.value++
  },
  dec() {
    this.value--
  },
})
```

- [Issue about non-reactive class fields](https://github.com/sveltejs/svelte/issues/11590)

> All these patterns work fine in Vue3, which has fewer quirks.

## Svelte Templates Include Features That Cannot Be Implemented in JavaScript

As documented, you cannot use bindable props in tests because they're template-specific features with no JavaScript equivalent. You must create additional components to convert bindable props to Svelte/store writable props for testing:

```svelte
<!-- input.svelte -->
<script lang="ts">
  let {
    value = $bindable(),
  }: {
    value?: string
  } = $props()
</script>

<input bind:value />
```

When testing this component with bindable props, you must write a wrapper:

```svelte
<!-- Input.test.svelte -->
<script lang="ts">
  import { type Writable } from 'svelte/store'

  let {
    value,
  }: {
    value?: Writable<string>
  } = $props()
</script>

<input bind:value={$value} />
```

Unit test:

```ts
import { expect, it } from 'vitest'
import { render } from 'vitest-browser-svelte'
import InputTest from './Input.test.svelte'
import { get, writable } from 'svelte/store'
import { tick } from 'svelte'

it('Input', async () => {
  let value = writable('')
  const screen = render(InputTest, { value })
  expect(get(value)).empty
  const inputEl = screen.baseElement.querySelector('input') as HTMLInputElement
  inputEl.value = 'test1'
  inputEl.dispatchEvent(new InputEvent('input'))
  expect(get(value)).eq('test1')
  value.set('test2')
  await tick()
  expect(inputEl.value).eq('test2')
})
```

Is there a way to dynamically bind multiple bindable props like in Vue3?

```html
<template>
  <my-component v-bind="dynamicProps"></my-component>
</template>

<script setup>
  import { reactive } from 'vue'

  const dynamicProps = reactive({
    title: 'Title',
    description: 'Desc',
    active: true,
  })
</script>
```

No, there isn't even an escape hatch, so you can't create a generic Bindable2Writable higher-order component to automatically convert bindable props to writable props. This is particularly frustrating considering how well Vue3 handles this.

> [Related discussion](https://github.com/sveltejs/svelte/discussions/15432)

## Form Components Are Uncontrolled by Default, Which Can Cause Issues

For a simple component with a two-way bound checkbox:

```svelte
<script lang="ts">
  let checked = $state(false)
</script>

<input type="checkbox" bind:checked />
```

What happens if you remove the bind? One-way binding? No, it only sets the initial value, then the input's internal state takes over, contrary to expectations. [See 3-second demo](https://x.com/rxliuli/status/1896856626050855298/video/3)

This isn't unique to Svelte - except for React, most web frameworks make exceptions to unidirectional data flow for forms.

## Small Ecosystem

This affects all new frameworks, but is particularly severe with Svelte:

- Router: Couldn't find a memory SPA router compatible with Svelte5 in early January [Issue](https://github.com/ItalyPaleAle/svelte-spa-router/issues/318)
- Query: TanStack Query supports Svelte, but Svelte5 support remains unreleased [Discussion](https://github.com/TanStack/query/discussions/7413)
- shadcn/ui: The Svelte implementation has poor Shadow DOM support [Issue](https://github.com/huntabyte/bits-ui/issues/828)
- Table/Form: Couldn't find suitable components for these complex UI elements; TanStack Table's API is problematic
- Virtual List: Couldn't find libraries supporting variable row height/column width for lists/grids
- Chart: Integrated ECharts manually and contributed a PR for Svelte5 support, but it remains unreleased [PR](https://github.com/bherbruck/svelte-echarts/pull/34)

## Community Response

When people complain about Svelte5's increased complexity, community members often dismiss them as newcomers struggling with "hello world" or suggest sticking with Svelte4. First, I've used React/Vue before and built substantial applications with Svelte4 (10k+ lines of pure code). Second, sticking with older versions is impractical for new projects when the ecosystem is rapidly moving forward, making resources for older versions hard to find.

- [Reddit discussion](https://www.reddit.com/r/sveltejs/comments/1hx7ksl/comment/m68898o)

---

Right after I published this blog, someone immediately defended with "Svelte's reactivity doesn't exist at runtime," which isn't even a valid argument in svelte5. Of course, he received 5 👍, while I got one 👎.
<https://www.reddit.com/r/sveltejs/comments/1j6ayaf/comment/mgnctgm/>

## Conclusion

Has Svelte5 improved? Runes make it somewhat more similar to React/Vue, but there are still many edge cases and quirks. For my next project, I might seriously consider SolidJS. After using React/Vue for so long, I'm still interested in exploring new alternatives.
