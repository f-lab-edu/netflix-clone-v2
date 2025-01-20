import { css } from '@emotion/react';
import { theme } from '../../theme';

export const CheckboxDivCss = css([{
  display: 'inline-flex',
}])

const checkboxSize = '1.125rem'
const inputSize = '2.75rem'
const inputPosition = `calc((${inputSize} - ${checkboxSize}) / -2)`

export const CheckboxAreaShellCss = css({
  position: 'relative',
  display: 'grid',
  alignItems: 'center',
  gridTemplateColumns: `${checkboxSize} 1fr`,
  zIndex: 0
})
export const CheckboxErrorStateCss = css({
  color: theme.color.red.error.light,
  '--outline-color': theme.color.red.error.light
})

export const CheckboxDisplayAreaCss = css({
  width: checkboxSize,
  height: checkboxSize
})

export const CheckboxTagDefaultCss = css([{
  appearance: 'none',
  border: '0 solid transparent',
  background: 'transparent',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: inputSize,
  height: inputSize,
  left: inputPosition,
  top: inputPosition,
  ':after': {
    content: '""',
    display: 'block',
    width: checkboxSize,
    height: checkboxSize,
    borderRadius: theme.borderRadius.xxs,
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: theme.color.black.default,
    backgroundColor: theme.color.white.default,
  },
  ':checked:after': {
    backgroundImage: 'url(/netflix/input/checkbox-checked.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '.75rem'
  }
}])

export const CheckboxLabelDefaultCss = css([{
  zIndex: 1,
  paddingLeft: '0.75rem',
  textAlign: 'start',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
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
  fontSize: '.8125rem',
  fontWeight: 400,
  marginTop: '.375rem',
  color: 'currentcolor',
  fill: 'currentcolor'
})
