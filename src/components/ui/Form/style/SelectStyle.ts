import { css } from '@emotion/react'
import { theme } from '../../theme'

export const SelectOutlineCss = css({
  borderColor: 'var(--outline-color)',
  background: 'rgba(22,22,22,0.7)',
})

export const SelectArrowPositionCss = css({
  position: 'absolute',
  right: '0.75rem',
  color: theme.color.white.default,
  paddingTop: '2px',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center'
})
