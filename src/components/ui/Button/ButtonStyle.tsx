import { css } from '@emotion/react';
import { theme } from '../theme';

export const DefaultButtonCss = css({
  fontFamily: `${theme.fonts.NetflixSans + ', ' + theme.fonts.Roboto};`,
  lineHeight: 1,
  backgroundColor: theme.color.red.default,
  transitionDuration: '.25s',
  transitionProperty: ['background-color', 'border-color'],
  transitionTimingFunction: 'cubic-bezier(0.4,0,0.68,0.06)',
  border: 0,
  borderRadius: theme.borderRadius.xs,
  alignItems: 'center',
  position: 'relative',
  boxSizing: 'border-box',
  display: 'inline-flex',
  color: theme.color.white.default,
  fill: 'currentcolor',
  verticalAlign: 'text-top',
  minWidth: 'max-content',
})

export const DarkButtonInteractionCss = css({
  '&:hover': {
    transitionTimingFunction: 'cubic-bezier(0.32,0.94,0.6,1)',
    backgroundColor: theme.color.red.hover.dark,
    borderColor: 'black'
  },
  '&:active': {
    transition: 'none',
    color: theme.color.white.active,
    backgroundColor: theme.color.red.active.dark,
  },
  '&:focus:not(:focus-visible)': {
    outline: 'none'
  }
})

export const LightButtonInteractionCss = css({
  '&:hover': {
    backgroundColor: theme.color.red.hover.light,
  },
  '&:active': {
    backgroundColor: theme.color.red.active.light,
  },
  '&:focus:not(:focus-visible)': {
    outline: 'none'
  }
})
