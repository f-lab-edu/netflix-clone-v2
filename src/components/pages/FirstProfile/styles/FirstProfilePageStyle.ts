import { css } from '@emotion/react';
import { theme } from '@/components/ui/theme';

export const FirstProfileShellCss = css({
  position: 'fixed',
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  padding: '40px 60px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'scroll',
  background: theme.color.grey16.default,
  zIndex: 2
})

export const FirstProfileFormCss = css({
  maxWidth: '540px',
})

// export const FirstProfile