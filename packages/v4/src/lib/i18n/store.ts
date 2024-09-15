import { writable, derived } from 'svelte/store'
import { translations, type Locale, type TranslationKey } from './translations'

function createI18nStore() {
  const { subscribe, set } = writable<Locale>('en-US')

  return {
    subscribe,
    setLocale: (locale: Locale) => set(locale),
  }
}

export const i18n = createI18nStore()

export const t = derived(i18n, ($i18n) => (key: TranslationKey) => translations[$i18n][key] || key)

