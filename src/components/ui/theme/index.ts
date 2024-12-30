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
    white: {
      default: '#ffffff',
      hover: 'rgba(255,255,255,0.7)',
    },
    red: {
      error: '#eb3942',
      default: '#e50914',
      active: '#99161d',
      hover: '#c11119'
    }
  }
}