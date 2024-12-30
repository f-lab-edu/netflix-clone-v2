import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    fonts: {
      NetflixSans: string
      Roboto: string
    }
    borderRadius: {
      sm: '.325rem'
      xs: '.25rem'
    }
    color: {
      white: {
        default: string
        hover: string
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