export interface TocItem {
  id: string
  text: string
  level: number
  children?: TocItem[]
}
