import type { Theme } from '@emotion/react';
import NetflixSans from '../Font/NetflixSans';
import roboto from '../Font/Roboto';

export const theme: Theme = {
  fonts: {
    NetflixSans: NetflixSans.style.fontFamily,
    Roboto: roboto.style.fontFamily
  },
  borderRadius: {
    sm: '.325rem',
    xs: '.25rem',
    xxs: '.125rem',
  },
  color: {
    black: {
      default: '#000',
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
    greyCC: {
      default: '#CCCCCC'
    },
    greyE6: {
      default: '#e6e6e6'
    },
    greyF3: {
      default: '#f3f3f3'
    },
    greyF4: {
      default: '#f4f4f4'
    },
    grey: {
      default: 'rgb(128,128,128)',
      opacity70: 'rgba(128,128,128,0.7)',
      defaultFont: '#333',
      lightDivider: '#e6e6e6',
      footerLightFont: '#737373',
      footerLightBg: '#f3f3f3',
      outline: 'rgba(128,128,128,0.7)',
      buttonBg: {
        default: 'rgba(128,128,128,0.4)',
        action: 'rgba(128,128,128,0.3)',
        hover: 'rgba(128,128,128,0.3)'
      }
    },
    white: {
      default: '#ffffff',
      opacity70: 'rgba(255,255,255,0.7)',
      opacity75: 'rgba(255,255,255,0.75)',
      active: 'rgba(255,255,255,0.7)',
      hover: 'rgba(255,255,255,0.7)',
    },
    red: {
      error: {
        dark: '#eb3942',
        light: '#c11119'
      },
      default: '#e50914',
      active: {
        light: '#e50914',
        dark: '#99161d'
      },
      hover: {
        light: '#f6121d',
        dark: '#c11119'
      }
    },
    green: {
      validated: {
        light: '#0C8849',
        dark: '#2bb871'
      }
    },
    blue: {
      light: {
        default: '#0071eb'
      },
      dark: {
        default: '#0071eb'
      }
    }
  }
}
