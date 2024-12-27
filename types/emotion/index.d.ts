import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    borderRadius: {
      global: string
    }
    color: {
      netflixFontColor: string
      red: {
        default: string
        hover: string
        active: string
      }
    }
  }
}