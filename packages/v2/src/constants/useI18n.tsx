import { createContext } from 'preact'
import { createI18n, getLanguage, locales } from './i18n'
import { useContext, useEffect, useMemo, useState } from 'preact/hooks'
import React from 'preact/compat'

const LocaleContext = createContext(createI18n(locales, getLanguage()))

export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider')
  }
  return context
}

export const LocaleProvider: React.FC = (props) => {
  const [lang, setLang] = useState(getLanguage())
  const context = useMemo(() => {
    const r = createI18n(locales, lang)
    return {
      ...r,
      setLang(lang: keyof typeof locales) {
        setLang(lang)
        r.setLang(lang)
      },
    }
  }, [lang])
  useEffect(() => {
    // @ts-expect-error
    globalThis.context = context
  })
  return (
    <LocaleContext.Provider value={context}>
      {props.children}
    </LocaleContext.Provider>
  )
}
