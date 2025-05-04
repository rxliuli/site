import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from '../ThemeProvider'

interface RootLayoutProps {
  children: React.ReactNode
}

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-2 md:py-8">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
