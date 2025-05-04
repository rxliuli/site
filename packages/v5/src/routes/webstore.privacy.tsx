import { createFileRoute } from '@tanstack/react-router'
import html from '@/data/privacy/webstore.md?html'

export const Route = createFileRoute('/webstore/privacy')({
  component: PrivacyPage,
})

function PrivacyPage() {
  return (
    <div className="container mx-auto prose prose-lg dark:prose-invert">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}