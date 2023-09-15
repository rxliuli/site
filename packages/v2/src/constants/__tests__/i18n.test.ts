// @vitest-environment happy-dom
import { it, expect } from 'vitest'
import { createI18n, locales } from '../i18n'

it('should be able to import i18n', () => {
  const { t } = createI18n(locales, 'en-US')
  expect(t('example')).eq('example')
})
