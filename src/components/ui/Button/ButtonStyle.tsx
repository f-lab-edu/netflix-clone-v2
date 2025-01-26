import { css } from '@emotion/react';
import { theme } from '../theme';

export const DefaultButtonCss = css({
  lineHeight: 1,
  transitionDuration: '.25s',
  transitionProperty: ['background-color', 'border-color'],
  transitionTimingFunction: 'cubic-bezier(0.4,0,0.68,0.06)',
  border: 0,
  borderRadius: theme.borderRadius.xs,
  alignItems: 'center',
  position: 'relative',
  boxSizing: 'border-box',
  display: 'inline-flex',
  fill: 'currentcolor',
  verticalAlign: 'text-top',
  minWidth: 'max-content',
})

export const RedButtonCss = {
  color: css({
    backgroundColor: theme.color.red.default,
    color: theme.color.white.default,
  }),
  interaction: {
    dark: css({
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
    }),
    light: css({
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
  }
}

export const BlackButtonCss = {
  color: css({
    backgroundColor: theme.color.grey.buttonBg.default,
    color: theme.color.white.default,
  }),
  interaction: {
    dark: css({
      '&:hover': {
        transitionTimingFunction: 'cubic-bezier(0.32,0.94,0.6,1)',
        backgroundColor: theme.color.grey.buttonBg.hover,
        borderColor: 'black'
      },
      '&:active': {
        transition: 'none',
        color: theme.color.white.active,
        backgroundColor: theme.color.grey.buttonBg.action,
      },
      '&:focus:not(:focus-visible)': {
        outline: 'none'
      }
    })
  }
}

export const BlueButtonCss = {
  color: css({
    background: '#0080ff',
    boxShadow: '0 1px 0 rgba(0, 0, 0, .55)',
    color: '#fff'
  }),
  interaction: {
    dark: css({
      '&:active': {
        background: '#0166c9'
      },
      '&:hover': {
        background: '#2490fd'
      }
    })
  }
}