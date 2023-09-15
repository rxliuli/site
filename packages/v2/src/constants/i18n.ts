import enUS from '../i18n/en-US.json'
import zhCN from '../i18n/zh-CN.json'
import jaJP from '../i18n/ja-JP.json'
import { TranslateType } from '../i18n'

export const locales = {
  'en-US': enUS,
  'zh-CN': zhCN,
  'ja-JP': jaJP,
} as const

const DefaultLang = 'en-US'
export function getLanguage(): keyof typeof locales {
  const lang = localStorage.getItem('language') ?? navigator.language
  if (lang in locales) {
    return lang as keyof typeof locales
  }
  return DefaultLang
}

export function createI18n<T extends Record<string, Record<string, string>>>(
  locales: T,
  lang: keyof T,
) {
  return {
    get lang() {
      return getLanguage()
    },
    setLang(lang: keyof T) {
      localStorage.setItem('language', lang as string)
    },
    t<K extends keyof TranslateType>(
      ...args: TranslateType[K]['params']
    ): string {
      const [key, params] = args as any
      const template = ((locales[lang] as any)[key] ??
        (locales[DefaultLang] as any)[key]) as string | undefined
      if (!template) {
        throw new Error(`Cannot find template for key: ${key}`)
      }
      if (!params) {
        return template
      }
      return template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
        return params[key] !== undefined ? String(params[key]) : match
      })
    },
  }
}
