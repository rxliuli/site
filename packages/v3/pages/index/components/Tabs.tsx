import clsx from 'clsx'
import { FunctionComponent, Key } from 'react'
import { useEffect, useRef, useState } from 'react'
import css from './Tabs.module.css'

interface TabItemProps {
  title: string
  children: React.ReactNode
}

const TabItem: FunctionComponent<TabItemProps> = (props: TabItemProps) => {
  return <>{props.children}</>
}

export interface TabsProps<K extends Key> {
  active: K
  onChange: (key: K) => void
  children: React.ReactElement<TabItemProps> | React.ReactElement<TabItemProps>[]
}

function _Tabs<K extends Key>(props: TabsProps<K>) {
  const children = Array.isArray(props.children) ? props.children : [props.children]
  const $list = useRef<HTMLUListElement>(null)
  const [barStyle, setBarStyle] = useState<React.CSSProperties>()
  const [align, setAlign] = useState<'horizontal' | 'portrait'>()

  function calcStyle() {
    if ($list.current) {
      const i = children.findIndex((item) => item.key === props.active)
      const $el = [...$list.current.children][i] as HTMLLIElement
      if (align === 'portrait') {
        console.log('$el.portrait: ', $el.offsetTop, $el.offsetHeight)
        setBarStyle({
          top: $el.offsetTop,
          width: 2,
          height: $el.offsetHeight,
        })
      } else if (align === 'horizontal') {
        console.log('$el.horizontal: ', $el.offsetLeft, $el.offsetWidth)
        setBarStyle({
          left: $el.offsetLeft,
          width: $el.offsetWidth,
          height: 2,
        })
      }
    }
  }

  useEffect(calcStyle, [children, props.active, $list, align])
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const listener = () => {
        setAlign(window.innerWidth > 768 ? 'portrait' : 'horizontal')
        calcStyle()
      }
      window.addEventListener('resize', listener)
      return () => window.removeEventListener('resize', listener)
    }
  }, [props.active])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setAlign(window.innerWidth > 768 ? 'portrait' : 'horizontal')
    }
  }, [])

  return (
    <div className={css.tab}>
      <nav>
        <ul ref={$list}>
          {children.map((item) => (
            <li key={item.key} onClick={() => props.onChange(item.key as K)}>
              <button className={clsx({ [css.active]: item.key === props.active })}>{item.props.title}</button>
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
