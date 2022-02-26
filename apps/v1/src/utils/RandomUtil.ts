export class RandomUtil {
  static image(size: number): string
  static image(x: number, y: number): string
  /**
   * 随机生成一张图片
   * @param x
   * @param y
   */
  static image(x: number, y?: number): string {
    y = y ?? x
    return `https://picsum.photos/${x}/${y}`
  }
}
