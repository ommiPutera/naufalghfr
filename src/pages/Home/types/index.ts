export type CardItemTypes = {
  assetSrc: string
  title: string
  to: string
  desc: string
  types?: string
  animate?:
    | ''
    | 'basic-animate'
    | 'basic-animate-1'
    | 'basic-animate-2'
    | 'basic-animate-3'
  layout?: '1' | '2'
}
