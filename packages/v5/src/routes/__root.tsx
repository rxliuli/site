import { Outlet, HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { RootLayout } from '../components/layout/root-layout'
import { NotFound } from '../components/NotFound'

import appCss from '../styles.css?url'
import { ga } from '@/lib/ga'

export const Route = createRootRoute({
  notFoundComponent: NotFound,
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'rxliuli - Personal Website',
      },
      {
        description:
          'Personal website of rxliuli - I like to create interesting things, using programming and writing as tools.',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
    scripts: [...ga('G-G82PFVRCEF')],
  }),

  component: () => (
    <RootDocument>
      <RootLayout>
        <Outlet />
      </RootLayout>
      <TanStackRouterDevtools />
    </RootDocument>
  ),
})

const themeScript = `
  (function() {
    const theme = (() => {
      if (typeof localStorage !== "undefined") {
        const stored = localStorage.getItem("vite-ui-theme");
        if (stored) return stored;
      }
      return "system";
    })();
    
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const currentTheme = theme === "system" ? systemTheme : theme;
    
    document.documentElement.classList.add(currentTheme);
  })();
`

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <HeadContent />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}

