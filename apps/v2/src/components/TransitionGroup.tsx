import { VNode } from 'preact';
import { cloneElement } from 'preact/compat'

export function TransitionGroup(props: { children: VNode | VNode[]; timeout?: number }) {
  const children = (Array.isArray(props.children) ? props.children : [props.children]) as unknown as VNode<{
    style?: JSX.CSSProperties
    children: VNode
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
