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
        defaultFont: '#333'
        lightDivider: '#e6e6e6'
        footerLightFont: '#737373'
        footerLightBg: '#f3f3f3'
        outline: 'rgba(128,128,128,0.7)'
      }
      white: {
        default: '#ffffff'
        active: 'rgba(255,255,255,0.7)'
        hover: 'rgba(255,255,255,0.7)'
      }
      red: {
        error: '#eb3942'
        default: '#e50914'
        active: '#99161d'
        hover: '#c11119'
      }
      green: {
        validated: string
      }
    }
  }
}