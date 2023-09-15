import classNames from 'classnames'
import { ComponentChildren, FunctionComponent, JSX, Key, VNode } from 'preact'
import { useEffect, useRef, useState } from 'preact/hooks'
import css from './Tabs.module.css'

interface TabItemProps {
  title: string
  children: ComponentChildren
}

const TabItem: FunctionComponent<TabItemProps> = (props: TabItemProps) => {
  return <>{props.children}</>
}

export interface TabsProps<K extends Key> {
  active: K
  onChange: (key: K) => void
  children: VNode<TabItemProps> | VNode<TabItemProps>[]
}

export function _Tabs<K extends Key>(props: TabsProps<K>) {
  const children = Array.isArray(props.children)
    ? props.children
    : [props.children]
  const $list = useRef<HTMLUListElement>(null)
  const [barStyle, setBarStyle] = useState<JSX.CSSProperties>()
  const aligh = useRef<'horizontal' | 'portrait'>(
    window.innerWidth > 768 ? 'portrait' : 'horizontal',
  )

  function calcStyle() {
    if (!$list.current) {
      return
    }
    const i = children.findIndex((item) => item.key === props.active)
    if (i === -1) {
      return
    }
    const $el = [...$list.current.children][i] as HTMLLIElement
    if (aligh.current === 'portrait') {
      console.log('$el.portrait: ', $el.offsetTop, $el.offsetHeight)
      setBarStyle({
        top: $el.offsetTop,
        width: 2,
        height: $el.offsetHeight,
      })
    } else if (aligh.current === 'horizontal') {
      console.log('$el.horizontal: ', $el.offsetLeft, $el.offsetWidth)
      setBarStyle({
        left: $el.offsetLeft,
        width: $el.offsetWidth,
        height: 2,
      })
    }
  }

  useEffect(calcStyle, [children, props.active, $list])
  useEffect(() => {
    const listener = () => {
      aligh.current = window.innerWidth > 768 ? 'portrait' : 'horizontal'
      calcStyle()
    }
    window.addEventListener('resize', listener)
    return () => window.removeEventListener('resize', listener)
  }, [props.active])

  return (
    <div className={css.tab}>
      <nav>
        <ul ref={$list}>
          {children.map((item) => (
            <li key={item.key} onClick={() => props.onChange(item.key)}>
              <button
                className={classNames({
                  [css.active]: item.key === props.active,
                })}
              >
                {item.props.title}
              </button>
            </li>
          ))}
        </ul>
        <div className={css.bar} style={barStyle} />
      </nav>
      <ul>
        {children.map((item) => (
          <li
            key={item.key}
            style={{
              display: props.active === item.key ? 'block' : 'none',
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export const Tabs = Object.assign(_Tabs, {
  Item: TabItem,
})
