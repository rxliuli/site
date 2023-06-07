import { usePageContext } from './usePageContext'

export { Link }

function Link(props: { href?: string; className?: string; children: React.ReactNode }) {
  const pageContext = usePageContext()
  const className = [props.className, pageContext.urlPathname === props.href && 'is-active'].filter(Boolean).join(' ')
  const base = import.meta.env.BASE_URL
  return <a {...props} href={base + props.href} className={className} />
}
