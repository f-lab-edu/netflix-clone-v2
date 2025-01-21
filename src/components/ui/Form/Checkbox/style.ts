import { css } from '@emotion/react';
import { theme } from '../../theme';

export const CheckboxDivCss = css([{
  display: 'inline-flex',
}])

const checkboxSize = '1.125rem'
const inputTagSize = '2.75rem'
const inputTagPosition = `calc((${inputTagSize} - ${checkboxSize}) / -2)`
export const CheckboxThemeCss = {
  light: css({
    '--checkbox-bg-normal': theme.color.white.default,
    '--checkbox-bg-checked': theme.color.black.default,
    '--checkbox-label-color': theme.color.black.default,
    '--checkbox-label-link-color': theme.color.blue.light.default,
    '--checkbox-border-default': theme.color.grey80.default,
    '--checkbox-border-hover': theme.color.black.default,
    '--checkbox-bolder-error': theme.color.red.error.light,
    '--checkbox-checkmask-color': theme.color.white.default,
    '--checkbox-focus-outline-color': theme.color.black.default,
    '--checkbox-error-color': theme.color.red.error.light,
  }),
  dark: css({
    '--checkbox-bg-normal': theme.color.black.default,
    '--checkbox-bg-checked': theme.color.white.default,
    '--checkbox-label-color': theme.color.white.default,
    '--checkbox-label-link-color': theme.color.blue.dark.default,
    '--checkbox-border-default': theme.color.grey80.opacity70,
    '--checkbox-border-hover': theme.color.white.default,
    '--checkbox-bolder-error': theme.color.red.error.dark,
    '--checkbox-checkmask-color': theme.color.black.default,
    '--checkbox-focus-outline-color': 'transparent',
    '--checkbox-error-color': theme.color.red.error.dark,
  })
}

const checkboxBgNormal = `var(--checkbox-bg-normal, ${theme.color.white.default})`
const checkboxBgChecked = `var(--checkbox-bg-checked, ${theme.color.black.default})`
const checkboxLabelColor = `var(--checkbox-label-color, ${theme.color.black.default})`
const checkboxLabelLinkColor = `var(--checkbox-label-link-color, ${theme.color.blue.light.default})`
const checkboxBorderDefaultColor = `var(--checkbox-border-default, ${theme.color.grey80.default})`
const checkboxBorderHoverColor = `var(--checkbox-border-hover, ${theme.color.black.default})`
const checkboxBorderErrorColor = `var(--checkbox-border-error, ${theme.color.red.error.light})`
const checkboxCheckmaskColor = `var(--checkbox-checkmask-color, ${theme.color.white.default})`
const checkboxFocusOutlineColor = `var(--checkbox-focus-outline-color, ${theme.color.black.default})`
const checkboxErrorColor = `var(--checkbox-error-color, ${theme.color.red.error.light})`

export const CheckboxAreaShellCss = css({
  position: 'relative',
  display: 'grid',
  gridTemplateAreas: '"checkbox label" "checkbox error"',
  gridTemplateColumns: `${checkboxSize} 1fr`,
  columnGap: '0.75rem',
  rowGap: '.375rem',
  zIndex: 0
})
export const CheckboxErrorStateCss = css({
  color: checkboxErrorColor,
  '--checkbox-border-color': checkboxBorderErrorColor
})

export const CheckboxDisplayAreaCss = css({
  gridArea: 'checkbox',
  width: checkboxSize,
  height: '1.5rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  '--checked-opacity': 0,
  '--checked-bg': checkboxBgNormal,
  '--focus-outline-css': 'none',
  '--checkbox-border-color': checkboxBorderDefaultColor,
  '&:hover': {
    '--checkbox-border-color': checkboxBorderHoverColor,
  },
  ':has(input:checked)': {
    '--checked-opacity': 1,
    '--checked-bg': checkboxBgChecked,
  },
  ':has(input:focus)': {
    '--focus-outline-css': `solid .125rem ${checkboxFocusOutlineColor}`
  }
})

export const CheckboxTagDefaultCss = css([{
  appearance: 'none',
  border: '0 solid transparent',
  background: 'transparent',
  position: 'absolute',
  cursor: 'pointer',
  outline: 'none',
  width: inputTagSize,
  height: inputTagSize,
  left: inputTagPosition,
  top: inputTagPosition,
}])

const CheckboxDisplayTempCss = css({
  position: 'absolute',
  display: 'block',
  width: checkboxSize,
  height: checkboxSize,
  pointerEvents: 'none',
  transitionDuration: '250ms',
  transitionProperty: 'opacity, background-color, border-color',
  transitionTimingFunction: 'cubic-bezier(0.32, 0.94, 0.6, 1)'
})

export const CheckboxDisplayCss = css(CheckboxDisplayTempCss, {
  borderRadius: theme.borderRadius.xxs,
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: 'var(--checkbox-border-color)',
  backgroundColor: 'var(--checked-bg)',
  outlineOffset: '.125rem',
  outline: 'var(--focus-outline-css, none)'
})

export const CheckboxCheckedDisplayCss = css(CheckboxDisplayTempCss, {
  opacity: 'var(--checked-opacity, 0)',
  maskImage: 'url(/netflix/input/checkbox-checked.svg)',
  maskRepeat: 'no-repeat',
  maskPosition: 'center',
  maskSize: '.75rem',
  backgroundColor: checkboxCheckmaskColor,
})

export const CheckboxLabelDefaultCss = css([{
  gridArea: 'label',
  zIndex: 1,
  textAlign: 'start',
}])

export const CheckboxLabelFromTextCss = css([{
  fontWeight: '400',
  lineHeight: 1.5,
  color: checkboxLabelColor,
  fontSize: '1rem',
  '> a': {
    color: checkboxLabelLinkColor,
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline'
    }
  }
}])

export const CheckboxErrorMessageCss = css({
  gridArea: 'error',
  fontSize: '.8125rem',
  fontWeight: 400,
  color: 'currentcolor',
  fill: 'currentcolor'
})
