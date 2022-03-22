import { useEffect, useRef, useState } from 'preact/hooks'

export function useScrollView() {
  const html = useRef<any>(null)
  const [scrollView, setScrollView] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      () => {
        setScrollView(true)
        observer.unobserve(html.current!)
      },
      {
        rootMargin: '0px',
        threshold: 1,
      },
    )
    observer.observe(html.current!)
    return () => observer.unobserve(html.current!)
  }, [])
  return {
    ref: html,
    scrollView,
  }
}
