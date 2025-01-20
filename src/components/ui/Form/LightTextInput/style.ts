import { css } from '@emotion/react';
import { MediaPoint } from '@/components/styled/layout';
import { theme } from '../../theme';

export const InputLabelHasValueOrFocusedCss = css([{
  fontSize: '0.75rem',
  top: '.5rem'
}])

const inputTextColor = theme.color.black.default
const BackgroundColor = theme.color.white.default
const LabelColor = theme.color.black.opacity70
const defaultOutlineColor = theme.color.grey.default
const errorColor = theme.color.red.error.light
const validatedColor = theme.color.green.validated.light
const focusOutlineColor = theme.color.black.default

export const InputDivCss = css([{
  display: 'inline-flex',
  verticalAlign: 'text-top',
  position: 'relative',
  flexWrap: 'wrap',
  flexFlow: 'column',
  width: '100%',
  textAlign: 'start',
  '--focus-outline-css': 'none',
  ':has(input:not(:placeholder-shown))': {
    'label': InputLabelHasValueOrFocusedCss
  },
  ':has(input:focus)': {
    'label': InputLabelHasValueOrFocusedCss,
    '--focus-outline-css': `solid .125rem ${focusOutlineColor}`
  }
}])

export const InputDefaultStateCss = css({
  '--outline-color': defaultOutlineColor
})

export const InputErrorStateCss = css({
  color: errorColor,
  '--outline-color': errorColor
})

export const InputValidatedStateCss = css({
  color: validatedColor,
  '--outline-color': validatedColor
})

export const InputAreaShellCss = css({
  flex: '1 1 100%',
  position: 'relative',
  display: 'flex',
  alignItems: 'center'
})

export const InputTagDefaultCss = css([{
  fontSize: '1rem',
  lineHeight: 1.5,
  width: '100%',
  border: '0 solid transparent',
  background: 'transparent',
  color: inputTextColor,
  '::placeholder': {
    opacity: 0
  }
}])

export const InputTagFromTextCss = css([MediaPoint({
  padding: ['1.25rem 1rem 0.25rem', '1.5rem 1rem 0.5rem']
}), {
  outline: 0
}])

export const InputOutlineCss = css({
  background: BackgroundColor,
  borderRadius: theme.borderRadius.xs,
  borderStyle: 'solid',
  borderWidth: '0.0625rem',
  borderColor: 'var(--outline-color)',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: -1,
  outlineOffset: '.125rem',
  outline: 'var(--focus-outline-css, none)'
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
  color: LabelColor,
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