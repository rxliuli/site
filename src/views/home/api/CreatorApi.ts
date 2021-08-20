import { Random } from 'mockjs'
import { RandomUtil } from '../../../utils'

export interface CreatorConfig {
  img: string
  title: string
  content: string
  github?: string
  home?: string
}

class CreatorApi {
  async list(): Promise<CreatorConfig[]> {
    return Array(10)
      .fill(0)
      .map(
        () =>
          ({
            title: Random.ctitle(),
            content: Random.cword(Random.integer(50, 100)),
            github: Random.url(),
            home: Random.url(),
            img: RandomUtil.image(500, 800),
          } as CreatorConfig),
      )
  }
}

export const creatorApi = new CreatorApi()
