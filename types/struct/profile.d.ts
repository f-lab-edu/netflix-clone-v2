declare interface Profile {
  id: number
  name: string
  // 프로필 잠금 설정
  isLocked: boolean
  pinCode: string
  // 프로필 이메일 설정
  email: string
  // 언어 설정
  language: string[]
  // 시청 제한 설정
  ageRestriction: {
    age: AgeRestriction
    isKid: boolean
    limitByContent: Content[]
  }
  // 자막 표시 설정
  subtitleStyle: {
    // 글꼴
    fontSize: number
    fontColor: string
    font: string

    // 배경
    backgroundColor: string
    backgroundOpacity: number

    // 그림자
    shadow: boolean
    shadowColor: string
    shadowOpacity: number
    shadowOffset: number

    // 창
    windowColor: string
    windowOpacity: number
    windowRoundedCorner: number
  }
  // 재생 설정
  playerSetup: {
    quality: ResolutionLevel
    autoNextPlay: boolean
    autoPlayPreview: boolean
  }
  // 알림 설정
  notifications: {
    email: boolean
    push: boolean
    sms: boolean
  }
}

// 시청 이력
declare interface WatchHistory {
  id: number
  profileId: number
  contentId: number
  seriesId: number
  episodeId: number
  watchedDate: number
  watchedDuration: number
}

declare type ContentRate = 'Bad' | 'Neutral' | 'Good'
// 평가 이력
declare interface RateHistory {
  id: number
  profileId: number
  contentId: number
  rate: ContentRate
  rateDate: number
}
