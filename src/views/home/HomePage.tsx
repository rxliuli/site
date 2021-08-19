import * as React from 'react'
import { Content } from './component/Content'
import { useAsync } from 'react-use'
import { creatorApi } from './api/CreatorApi'

export const HomePage: React.FC = () => {
  const listState = useAsync(creatorApi.list)
  return <div>{listState.value && <Content list={listState.value} />}</div>
}
