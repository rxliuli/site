import React from 'react'
import { story } from '../../utils'
import { NotMatchPage } from './NotMatchPage'

const { meta, of } = story(NotMatchPage)

export default meta({
  title: '组件/NotMatchPage',
})

export const Basic = of({
  storyName: '基本示例',
})
