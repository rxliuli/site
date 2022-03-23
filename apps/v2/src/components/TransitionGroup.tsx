import { cloneElement, CSSProperties, ReactElement, ReactNode } from 'react'

export function TransitionGroup(props: { children: ReactNode | ReactNode[]; timeout?: number }) {
  const children = (Array.isArray(props.children) ? props.children : [props.children]) as unknown as ReactElement<{
    style?: CSSProperties
    children: ReactNode
  }>[]
  return (
    <>
      {children.map((item, i) =>
        cloneElement(
          item,
          {
            ...item.props,
            key: i,
            style: {
              transitionDelay: `${(props.timeout ?? 0) + i * 100}ms`,
              ...item.props.style,
            },
          },
          item.props.children,
        ),
      )}
    </>
  )
}
