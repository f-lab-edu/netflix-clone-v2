declare interface Content {
  id: number
  title: string
  description: string
  thumbnail: string
  previewVideo: string
  ageRestriction: AgeRestriction
  soundQuality?: SoundQuality
  genres: Genre[]
  actors: Actor[]
  specific: Specific[]
  rules: Rule[]
  series: Serie[]
  uploadDate: number
  hasNewEpisode: boolean
  isTop10: boolean
  keywords: string[]
}

declare type SoundQuality = 'immersive' | undefined

declare interface Genre {
  id: number
  name: string
}

declare interface Actor {
  id: number
  name: string
}

declare interface Specific {
  id: number
  name: string
}

declare interface Series extends Omit<Content, 'series'> {
  episodes: Video[]
}

// 폭력성, 성적, 공포, 증오, 욕설, 음란물, 괴담, 기타
declare interface Rule {
  id: number
  name: string
  description: string
  thunbnail: string
}

declare interface Video {
  id: number
  name: string
  description: string
  thumbnail: string
  duration: number
  resolutions: Resolution[]
  audio: Audio[]
  subtitles: Subtitle[]
}

declare type ResolutionLevel = 'SD' | 'HD' | 'FHD' | 'UHD'

declare interface Resolution {
  id: number
  name: string
  resolutionLevel: ResolutionLevel
  videoFileUrl: string
}

declare interface Audio {
  id: number
  language: string
  audioFileUrl: string
}

declare interface Subtitle {
  id: number
  language: string
  subtitleFileUrl: string
}