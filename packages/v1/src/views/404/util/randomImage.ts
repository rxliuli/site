import { Random } from 'mockjs'

export function randomImage(): string {
  const i = Random.integer(1, 10)
  const s = i.toString()
  const n = 2
  return '/v1/bg/' + '0'.repeat(n - s.length) + s + '.jpg'
}
