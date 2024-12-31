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
      grey: {
        outline: 'rgba(128,128,128,0.7)'
      },
      white: {
        default: string
        active: string
        hover: string
      }
      red: {
        default: string
        error: string
        hover: string
        active: string
      }
      green: {
        validated: string
      }
    }
  }
}