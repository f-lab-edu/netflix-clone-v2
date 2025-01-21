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
      xxs: '.125rem'
    }
    color: {
      black: {
        default: '#000'
        opacity70: 'rgba(0,0,0,0.7)'
      },
      grey: {
        default: 'rgb(128,128,128)',
        opacity70: 'rgba(128,128,128,0.7)',
        defaultFont: '#333'
        lightDivider: '#e6e6e6'
        footerLightFont: '#737373'
        footerLightBg: '#f3f3f3'
        /** @deprecated use opacity70 */
        outline: 'rgba(128,128,128,0.7)'
        buttonBg: {
          default: 'rgba(128,128,128,0.4)'
          action: 'rgba(128,128,128,0.3)'
          hover: 'rgba(128,128,128,0.3)'
        }
      }
      white: {
        default: '#ffffff'
        opacity70: 'rgba(255,255,255,0.7)',
        active: 'rgba(255,255,255,0.7)'
        hover: 'rgba(255,255,255,0.7)'
      }
      red: {
        error: {
          dark: '#eb3942',
          light: '#c11119'
        },
        default: '#e50914'
        active: {
          light: '#e50914'
          dark: '#99161d'
        }
        hover: {
          light: '#f6121d'
          dark: '#c11119'
        }
      }
      green: {
        validated: {
          light: '#0C8849',
          dark: '#2bb871'
        }
      }
      blue: {
        light: {
          default: '#0071eb'
        }
      }
    }
  }
}