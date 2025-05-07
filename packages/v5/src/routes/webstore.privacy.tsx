import { createFileRoute } from '@tanstack/react-router'
import html from '@/data/privacy/webstore.md?html'
import { MarkdownView } from '@/components/MarkdownView'

export const Route = createFileRoute('/webstore/privacy')({
  component: PrivacyPage,
})

function PrivacyPage() {
  return (
    <div className="container mx-auto max-w-3xl">
      <MarkdownView dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}
