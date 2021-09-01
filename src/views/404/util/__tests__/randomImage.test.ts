import { randomImage } from '../randomImage'

it('测试 randomImage', () => {
  const res = randomImage()
  console.log(Array(10).fill(0).map(randomImage))
  expect(res.length).toBe(10)
})
