import { css } from '@emotion/react';
import { theme } from '../../theme';

export const CheckboxDivCss = css([{
  display: 'inline-flex',
}])

const checkboxSize = '1.125rem'
const inputTagSize = '2.75rem'
const inputTagPosition = `calc((${inputTagSize} - ${checkboxSize}) / -2)`
const checkboxBgNormal = theme.color.white.default
const checkboxBgChecked = theme.color.black.default
const checkboxBorderColor = theme.color.grey.default
const checkboxMaskColor = theme.color.white.default
const focusOutlineColor = theme.color.black.default

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
  color: theme.color.red.error.light,
  '--outline-color': theme.color.red.error.light
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
  ':has(input:checked)': {
    '--checked-opacity': 1,
    '--checked-bg': checkboxBgChecked,
  },
  ':has(input:focus)': {
    '--focus-outline-css': `solid .125rem ${focusOutlineColor}`
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
  transitionProperty: 'opacity, background-color',
  transitionTimingFunction: 'cubic-bezier(0.32, 0.94, 0.6, 1)'
})

export const CheckboxDisplayCss = css(CheckboxDisplayTempCss, {
  borderRadius: theme.borderRadius.xxs,
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: checkboxBorderColor,
  backgroundColor: `var(--checked-bg, ${checkboxBgNormal})`,
  outlineOffset: '.125rem',
  outline: 'var(--focus-outline-css, none)'
})

export const CheckboxCheckedDisplayCss = css(CheckboxDisplayTempCss, {
  opacity: 'var(--checked-opacity, 0)',
  maskImage: 'url(/netflix/input/checkbox-checked.svg)',
  maskRepeat: 'no-repeat',
  maskPosition: 'center',
  maskSize: '.75rem',
  backgroundColor: checkboxMaskColor,
})

export const CheckboxLabelDefaultCss = css([{
  gridArea: 'label',
  zIndex: 1,
  textAlign: 'start',
}])

export const CheckboxLabelFromTextCss = css([{
  fontWeight: '400',
  lineHeight: 1.5,
  color: theme.color.black.default,
  fontSize: '1rem',
  '> a': {
    color: theme.color.blue.light.default,
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
