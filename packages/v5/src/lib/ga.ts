import type { AnyRouteMatch } from '@tanstack/react-router'

export function ga(id: string): Exclude<AnyRouteMatch['headScripts'], undefined> {
  const googleAnalyticsScript = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${id}');
  `
  return [
    {
      src: `https://www.googletagmanager.com/gtag/js?id=${id}`,
      async: true,
    },
    {
      children: googleAnalyticsScript,
    },
  ]
}

