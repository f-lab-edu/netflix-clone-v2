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
    xs: '.25rem'
  },
  color: {
    grey: {
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
      active: 'rgba(255,255,255,0.7)',
      hover: 'rgba(255,255,255,0.7)',
    },
    red: {
      error: '#eb3942',
      default: '#e50914',
      active: {
        light: '#e50914',
        dark: '#99161d',
      },
      hover: {
        light: '#f6121d',
        dark: '#c11119'
      }
    },
    green: {
      validated: '#2bb871'
    }
  }
}