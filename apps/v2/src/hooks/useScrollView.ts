import { useEffect, useRef, useState } from 'preact/hooks'

interface Options extends IntersectionObserverInit {
  timeout?: number
}

export function useScrollView(options?: Options) {
  const { timeout, ...other }: Options = { threshold: 0.5, ...options }
  const html = useRef<any>(null)
  const [scrollView, setScrollView] = useState(false)
  useEffect(() => {
    let n: any
    const observer = new IntersectionObserver((entries) => {
      const intersectionRatio = entries[0].intersectionRatio
      // console.log('entries: ', entries, intersectionRatio, intersectionRatio > 0 && intersectionRatio <= 1)
      if (intersectionRatio > 0 && intersectionRatio <= 1) {
        if (timeout === undefined) {
          setScrollView(true)
        } else {
          n = setTimeout(() => setScrollView(true), timeout)
        }
        observer.unobserve(html.current!)
      }
    }, other)
    observer.observe(html.current!)
    return () => {
      observer.unobserve(html.current!)
      clearTimeout(n)
    }
  }, [timeout])
  return {
    ref: html,
    scrollView,
  }
}
