import React, { cloneElement } from 'react'

export function TransitionGroup(props: { children: React.ReactNode | React.ReactNode[]; timeout?: number }) {
  const children = (Array.isArray(props.children)
    ? props.children
    : [props.children]) as unknown as React.ReactElement<{
    style?: React.CSSProperties
    children: React.ReactNode
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
