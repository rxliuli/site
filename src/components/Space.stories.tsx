import React from 'react'
import { story } from '../utils'
import { Space } from './Space'

const { meta, of } = story(Space)
export default meta({
  title: '组件/Space',
})

export const Basic = of({
  storyName: '基本示例',
  args: {
    children: (
      <>
        <button>按钮 1</button>
        <button>按钮 2</button>
      </>
    ),
  },
})
