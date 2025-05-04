import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

export function AboutPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">About Me</h1>
      <div className="prose prose-lg dark:prose-invert">
        <p>Detailed information about your background, expertise, and interests.</p>
        {/* Add more content as needed */}
      </div>
    </div>
  )
}
