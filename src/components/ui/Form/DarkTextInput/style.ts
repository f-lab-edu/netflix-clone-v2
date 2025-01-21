import { css } from '@emotion/react';
import { MediaPoint } from '@/components/styled/layout';
import { theme } from '../../theme';

export const InputLabelHasValueOrFocusedCss = css([{
  fontSize: '0.75rem',
  top: '.5rem'
}])

export const InputDivCss = css([{
  display: 'inline-flex',
  verticalAlign: 'text-top',
  position: 'relative',
  flexWrap: 'wrap',
  flexFlow: 'column',
  width: '100%',
  textAlign: 'start',
  ':has(input:not(:placeholder-shown))': {
    'label': InputLabelHasValueOrFocusedCss
  },
  ':has(input:focus)': {
    'label': InputLabelHasValueOrFocusedCss
  }
}])

export const InputDefaultStateCss = css({
  '--outline-color': theme.color.grey.outline
})

export const InputErrorStateCss = css({
  color: theme.color.red.error.dark,
  '--outline-color': theme.color.red.error.dark
})

export const InputValidatedStateCss = css({
  color: theme.color.green.validated.dark,
  '--outline-color': theme.color.green.validated.dark
})

export const InputAreaShellCss = css({
  flex: '1 1 100%',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  zIndex: 0
})

export const InputTagDefaultCss = css([{
  fontSize: '1rem',
  lineHeight: 1.5,
  width: '100%',
  border: '0 solid transparent',
  background: 'transparent',
  '::placeholder': {
    opacity: 0
  }
}])

export const InputTagFromTextCss = css([MediaPoint({
  padding: ['1.25rem 1rem 0.25rem', '1.5rem 1rem 0.5rem']
}), {
  outlineColor: theme.color.white.default
}])

export const InputOutlineCss = css({
  background: 'rgba(22, 22, 22, 0.7)',
  borderRadius: theme.borderRadius.xs,
  borderStyle: 'solid',
  borderWidth: '0.0625rem',
  borderColor: 'var(--outline-color)',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: -1
})

export const InputLabelDefaultCss = css([{
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
}])

export const InputLabelFromTextCss = css([{
  fontWeight: '400',
  lineHeight: 1.5,
  color: theme.color.white.hover,
  left: '1rem',
  right: '1rem',
  fontSize: '1rem',
  top: '1rem',
}])

export const InputErrorDivCss = css([{
  fontSize: '.8125rem',
  fontWeight: 400,
  marginTop: '.375rem',
  color: 'currentcolor',
  fill: 'currentcolor'
}])