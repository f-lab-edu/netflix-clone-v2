declare type DramaReviewState = 'none' | 'watching' | 'end'

declare interface DramaReviewFormData {
  contentId: number
  watchState: string
  watchStartDate: string
  watchEndDate: string
  willRecommend: string
  isPublic: string
  comment: string
  rate: number
}

declare interface DramaReviewData extends DramaReviewFormData {
  willRecommend: boolean
  isPublic: boolean
}

declare interface DramaReviewObj extends DramaReviewData {
  id: number
  createAt: number
  modifiedAt: number
  deleteAt: number
}
