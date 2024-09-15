import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async ({ request }) => {
  const acceptLanguage = request.headers.get('accept-language') || 'en-US'
  const language = acceptLanguage.split(',')[0].split('-')[0]
  const locale = language.includes('zh') ? 'zh-CN' : 'en-US'

  return { locale }
}

export const prerender = true
