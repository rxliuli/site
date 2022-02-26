import * as React from 'react'
import { ReactNode } from 'react'
import toArray from 'rc-util/es/Children/toArray'

type SpaceProps = {
  size?: number
  children: ReactNode
}

export const Space: React.FC<SpaceProps> = (props) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: toArray(props.children)
          .map(() => 'max-content')
          .join(' '),
        gridGap: props.size ?? 4,
      }}
    >
      {props.children}
    </div>
  )
}
