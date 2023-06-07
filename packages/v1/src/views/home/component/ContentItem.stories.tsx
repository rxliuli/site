import React from 'react'
import { story } from '../../../utils'
import { ContentItem } from './ContentItem'

const { meta, of } = story(ContentItem)

export default meta({
  title: '/组件/ContentItem',
})

export const Basic = of({
  storyName: '基本示例',
  args: {
    item: {
      title: 'liuli-utils',
      content:
        '吾辈使用的工具函数库，按照功能分割成不同的模块，都发布在 [@liuli-util](https://www.npmjs.com/org/liuli-util) 组织下，可以单独引入指定模块',
      img: 'https://picsum.photos/500/800',
      home: 'https://liuli-utils.rxliuli.com',
      github: 'https://github.com/rxliuli/liuli-util',
    },
  },

  decorators: [
    (Story) => (
      <div
        style={{
          padding: 48,
        }}
      >
        <div
          style={{
            width: '300px',
          }}
        >
          <Story />
        </div>
      </div>
    ),
  ],
})
