import { useEffect, useRef, useState } from 'react'

interface Options extends IntersectionObserverInit {
  timeout?: number
}

export function useInView(options?: Options) {
  const { timeout, ...other }: Options = { threshold: 0.5, ...options }
  const html = useRef<any>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    let n: any
    const observer = new IntersectionObserver((entries) => {
      const intersectionRatio = entries[0].intersectionRatio
      // console.log('entries: ', entries, intersectionRatio, intersectionRatio > 0 && intersectionRatio <= 1)
      if (intersectionRatio > 0 && intersectionRatio <= 1) {
        if (timeout === undefined) {
          setInView(true)
        } else {
          n = setTimeout(() => setInView(true), timeout)
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
    inView,
  }
}
