import { css } from '@emotion/react'
import { theme } from '@/components/ui/theme'

export const DialogBackdropCss = css({
  position: 'fixed',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  backgroundColor: theme.color.black.default,
})
