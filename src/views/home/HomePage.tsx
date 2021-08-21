import * as React from 'react'
import { Content } from './component/Content'
import { useAsync } from 'react-use'
import { creatorApi } from './api/CreatorApi'
import { Banner } from './component/Banner'

export const HomePage: React.FC = () => {
  const listState = useAsync(creatorApi.list)
  return (
    <div>
      <Banner>
        <h1>创造物</h1>
        <h2>明灯不熄的熊熊烈火才正是最为纯粹的生命本质！</h2>
      </Banner>
      {listState.value && <Content list={listState.value} />}
    </div>
  )
}
