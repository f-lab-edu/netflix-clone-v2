import { css } from '@emotion/react';
import { fontColor } from '@/components/styled/font';
import { direction, MediaPoint } from '@/components/styled/layout';
import { theme } from '../../theme';

export const InputDivCss = css([{
  display: 'inline-flex',
  verticalAlign: 'text-top',
  position: 'relative',
  flexWrap: 'wrap',
  flexFlow: 'column',
  width: '100%',
  textAlign: 'start'
}])

export const InputErrorState = css({
  color: theme.color.red.error
})

export const InputAreaShell = css({
  flex: '1 1 100%',
  position: 'relative'
})

export const InputTagDefault = css([{
  fontSize: '1rem',
  lineHeight: 1.5,
  width: '100%',
  border: '0 solid transparent',
  background: 'transparent'
}, MediaPoint({
  padding: ['1.25rem 1rem 0.25rem', '1.5rem 1rem 0.5rem']
})])

export const InputOutline = css([direction['a-0'], {
  background: 'rgba(22, 22, 22, 0.7)',
  borderRadius: theme.borderRadius.xs,
  borderStyle: 'solid',
  borderWidth: '0.0625rem',
  borderColor: 'currentcolor',
  position: 'absolute',
  zIndex: -1
}])

export const InputLabelDefault = css([
  direction['x-1'],
  direction['t-1'], {
    position: 'absolute',
    zIndex: 1,
    textAlign: 'start',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    transitionProperty: 'top, font-size, line-height',
    transitionDuration: '250ms',
    pointerEvents: 'none',
    transitionTimingFunction: 'cubic-bezier(0.32, 0.94, 0.6, 1);',

    fontWeight: '400',
    lineHeight: 1.5,
    color: theme.color.white.hover,
    fontSize: '1rem'
  }
])

export const InputLabelHasValueOrFocused = css([{
  fontSize: '0.75rem',
  top: '.5rem'
}])

export const InputErrorDiv = css([fontColor.currentColor, {
  fontSize: '.8125rem',
  fontWeight: 400,
  marginTop: '.375rem'
}])