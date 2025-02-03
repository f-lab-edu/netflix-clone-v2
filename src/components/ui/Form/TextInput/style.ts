import { css } from '@emotion/react';
import { MediaPoint } from '@/components/styled/layout';
import { theme } from '../../theme';

export const InputLabelHasValueOrFocusedCss = css([{
  fontSize: '0.75rem',
  top: '.5rem'
}])

export const InputThemeCss = {
  light: css({
    '--input-text-color': theme.color.black.default,
    '--background-color': theme.color.white.default,
    '--label-text-color': theme.color.black.opacity70,
    '--error-color': theme.color.red.error.light,
    '--default-outline-color': theme.color.grey80.default,
    '--error-outline-color': theme.color.red.error.light,
    '--validated-outline-color': theme.color.green.validated.light,
    '--focus-outline-color': theme.color.black.default
  }),
  dark: css({
    '--input-text-color': theme.color.white.default,
    '--background-color': theme.color.grey16.opacity70,
    '--label-text-color': theme.color.white.opacity70,
    '--error-color': theme.color.red.error.dark,
    '--default-outline-color': theme.color.grey80.opacity70,
    '--error-outline-color': theme.color.red.error.dark,
    '--validated-outline-color': theme.color.green.validated.dark,
    '--focus-outline-color': theme.color.white.default
  })
}

const InputTextColor = `var(--input-text-color, ${theme.color.black.default})`
const BackgroundColor = `var(--background-color, ${theme.color.white.default})`
const LabelColor = `var(--label-text-color, ${theme.color.black.opacity70})`
const ErrorColor = `var(--error-color, ${theme.color.red.error.light})`
const DefaultOutlineColor = `var(--default-outline-color, ${theme.color.grey80.default})`
const ErrorOutlineColor = `var(--error-outline-color, ${theme.color.red.error.light})`
const ValidatedOutlineColor = `var(--validated-outline-color, ${theme.color.green.validated.light})`
const FocusOutlineColor = `var(--focus-outline-color, ${theme.color.black.default})`

export const InputDivCss = css([{
  zIndex: 0,
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
    '--focus-outline-css': `solid .125rem ${FocusOutlineColor}`
  }
}])

export const InputDefaultStateCss = css({
  '--outline-color': DefaultOutlineColor
})

export const InputErrorStateCss = css({
  color: ErrorColor,
  '--outline-color': ErrorOutlineColor
})

export const InputValidatedStateCss = css({
  color: ValidatedOutlineColor,
  '--outline-color': ValidatedOutlineColor
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
  color: InputTextColor,
  '::placeholder': {
    opacity: 0,
    transitionDuration: '250ms',
    transitionProperty: 'opacity'
  },
  ':focus::placeholder': {
    opacity: 1
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
