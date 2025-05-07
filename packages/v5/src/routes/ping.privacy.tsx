import { createFileRoute } from '@tanstack/react-router'
import html from '@/data/privacy/ping.md?html'
import { MarkdownView } from '@/components/MarkdownView'

export const Route = createFileRoute('/ping/privacy')({
  component: PrivacyPage,
})

function PrivacyPage() {
  return (
    <div className="container mx-auto max-w-3xl">
      <MarkdownView dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

