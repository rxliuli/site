import { cloneElement, CSSProperties, ReactElement, ReactNode } from 'react'

export function TransitionGroup(props: { children: ReactNode[]; timeout?: number }) {
  const children = props.children as unknown as ReactElement<{ style?: CSSProperties; children: ReactNode }>[]
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
