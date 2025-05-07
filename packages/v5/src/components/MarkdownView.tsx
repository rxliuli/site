import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'react'

export function MarkdownView(props: HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={cn('prose dark:prose-invert', props.className)} />
}

