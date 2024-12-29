import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    fonts: {
      NetflixSans: string
      Roboto: string
    }
    borderRadius: {
      global: string
      xs: string
    }
    color: {
      white: {
        default: string
        hover: string
        active: string
      }
      red: {
        default: string
        error: string
        hover: string
        active: string
      }
    }
  }
}