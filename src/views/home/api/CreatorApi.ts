import { CreatorCard } from '../component/ContentItem'
import { Random } from 'mockjs'
import { RandomUtil } from '../../../utils'

class CreatorApi {
  async list(): Promise<CreatorCard[]> {
    return Array(10)
      .fill(0)
      .map(
        () =>
          ({
            title: Random.ctitle(),
            content: Random.cword(100),
            github: Random.url(),
            home: Random.url(),
            img: RandomUtil.image(500, 800),
          } as CreatorCard),
      )
  }
}

export const creatorApi = new CreatorApi()
