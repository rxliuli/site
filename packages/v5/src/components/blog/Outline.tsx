import type { TocItem as OutlineItem } from '@/plugins/markdownToc'
import { useEffect, useState } from 'react'

interface OutlineProps {
  outline: OutlineItem[]
}

function OutlineItem({ item, activeId }: { item: OutlineItem; activeId: string }) {
  return (
    <li style={{ paddingLeft: `${(item.level - 1) * 0.5}rem` }}>
      <a
        href={`#${item.id}`}
        className={`
          transition-colors hover:text-primary 
          ${activeId === item.id ? 'text-primary font-medium' : 'text-muted-foreground'}
          block truncate
        `}
        onClick={(e) => {
          e.preventDefault()
          document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
        }}
      >
        {item.text}
      </a>
      {item.children && (
        <ul className="space-y-1">
          {item.children.map((child) => (
            <OutlineItem key={child.id} item={child} activeId={activeId} />
          ))}
        </ul>
      )}
    </li>
  )
}

export function Outline(props: OutlineProps) {
  const [activeId, setActiveId] = useState<string>('')

  // Track which heading is currently in view
  useEffect(() => {
    if (props.outline.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '0px 0px -80% 0px',
      },
    )

    const observeHeadings = (items: OutlineItem[]) => {
      items.forEach((item) => {
        const element = document.getElementById(item.id)
        if (element) observer.observe(element)
        if (item.children) observeHeadings(item.children)
      })
    }

    observeHeadings(props.outline)

    return () => {
      const unobserveHeadings = (items: OutlineItem[]) => {
        items.forEach((item) => {
          const element = document.getElementById(item.id)
          if (element) observer.unobserve(element)
          if (item.children) unobserveHeadings(item.children)
        })
      }
      unobserveHeadings(props.outline)
    }
  }, [props.outline])

  if (props.outline.length === 0) return null

  return (
    <div className="space-y-2">
      <h3 className="font-medium">Outline</h3>
      <ul className="space-y-1 text-sm">
        {props.outline.map((item) => (
          <OutlineItem key={item.id} item={item} activeId={activeId} />
        ))}
      </ul>
    </div>
  )
}

