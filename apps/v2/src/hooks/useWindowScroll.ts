import { useEffect, useState } from 'preact/hooks'

export function useWindowScroll() {
  const [dir, setDir] = useState<'up' | 'down'>()
  const [scrollY, setScrollY] = useState(0)
  useEffect(() => {
    const listener = () => {
      const dir = scrollY > window.scrollY ? 'up' : 'down'
      setDir(dir)
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', listener)
    return () => window.removeEventListener('scroll', listener)
  }, [scrollY])
  return { dir, scrollY }
}
