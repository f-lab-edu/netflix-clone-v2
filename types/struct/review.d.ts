declare type DramaReviewState = 'none' | 'watching' | 'end'
declare type DramaReviewBooleanType = 'true' | 'false'
declare interface DramaReviewFormData {
  contentId: string
  watchState: DramaReviewState
  watchStartDate: string
  watchEndDate: string
  willRecommend: DramaReviewBooleanType
  isPublic: DramaReviewBooleanType
  comment: string
  rate: number
}

declare interface DramaReviewData extends DramaReviewFormData {
  contentId: number
  willRecommend: boolean
  isPublic: boolean
}

declare interface DramaReviewObj extends DramaReviewData {
  id: number
  createAt: number
  modifiedAt: number
  deleteAt: number
}
