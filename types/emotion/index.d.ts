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
        opacity70: 'rgba(0,0,0,.7)'
      },
      grey16: {
        default: '#161616',
        opacity70: 'rgba(22,22,22,.7)'
      },
      grey33: {
        default: '#333333'
      },
      grey73: {
        default: '#737373',
      },
      grey80: {
        default: '#808080',
        opacity70: 'rgba(128,128,128,.7)',
        opacity40: 'rgba(128,128,128,.4)',
        opacity30: 'rgba(128,128,128,.3)',
      },
      greyE6: {
        default: '#e6e6e6'
      },
      greyF3: {
        default: '#f3f3f3'
      },
      grey: {
        /** @deprecated use theme.color.grey80.default */
        default: 'rgb(128,128,128)',
        /** @deprecated use theme.color.grey80.opacity70 */
        opacity70: 'rgba(128,128,128,0.7)',
        /** @deprecated use theme.color.grey33.default */
        defaultFont: '#333'
        /** @deprecated use theme.color.greyE6.default */
        lightDivider: '#e6e6e6'
        /** @deprecated use theme.color.grey73.default */
        footerLightFont: '#737373'
        /** @deprecated use theme.color.greyF3.default */
        footerLightBg: '#f3f3f3'
        /** @deprecated use theme.color.grey80.opacity70 */
        outline: 'rgba(128,128,128,0.7)'
        buttonBg: {
          /** @deprecated use theme.color.grey80.opacity40 */
          default: 'rgba(128,128,128,0.4)'
          /** @deprecated use theme.color.grey80.opacity30 */
          action: 'rgba(128,128,128,0.3)'
          /** @deprecated use theme.color.grey80.opacity30 */
          hover: 'rgba(128,128,128,0.3)'
        }
      }
      white: {
        default: '#ffffff'
        opacity70: 'rgba(255,255,255,0.7)',
        /** @deprecated use opacity70 */
        active: 'rgba(255,255,255,0.7)'
        /** @deprecated use opacity70 */
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