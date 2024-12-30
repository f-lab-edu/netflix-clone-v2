import { css } from '@emotion/react'
import { theme } from '../../theme'

export const InputTagFromSelectCss = css([{
  appearance: 'none',
  lineHeight: '1.25rem',
  paddingTop: '0.375rem',
  paddingBottom: '0.375rem',
  paddingRight: 'calc(2.25rem + 0rem)',
  paddingLeft: '0.75rem'
}])

export const InputLabelFromSelectCss = css([{
  width: '1px',
  height: '1px',
  userSelect: 'none'
}])

export const SelectOutlineCss = css({
  borderColor: 'rgba(128,128,128,0.7)',
  background: 'rgba(22,22,22,0.7)',
})

export const SelectArrowPositionCss = css({
  color: theme.color.white.default,
  paddingTop: '2px',
  paddingRight: 'calc(0.75rem + 0rem)',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center'
})
