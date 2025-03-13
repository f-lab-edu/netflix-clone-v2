declare type DramaReviewState = 'none' | 'watching' | 'end'

declare interface DramaReviewData {
  contentId: number
  watchState: string
  watchStartDate: string
  watchEndDate: string
  willRecommend: boolean
  comment: string
  rate: number
}

declare interface DramaReviewObj extends DramaReviewData {
  id: number
  createAt: number
  modifiedAt: number
  deleteAt: number
}
