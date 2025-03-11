import { css } from '@emotion/react';
import { theme } from '@/components/ui/theme';

export const ContentDetailShell = css({
  display: 'flex',
  justifyContent: 'center',
  width: '100vw',
  height: '100vh',
  overflow: 'auto',
  padding: '0 8px'
})

export const ContentDetailLayout = css({
  borderRadius: theme.borderRadius.xs,
  maxWidth: 940,
  width: '100%',
  marginTop: '2rem',
  background: 'var(--background-color)'
})

export const ContentDetailImageArea = css({
  display: 'flex',
  width: '100%',
  position: 'relative',
})

export const ContentDetailImage = css({
  width: 'auto !important',
  height: 'auto !important',
  flexBasis: '100%',
  aspectRatio: '848/477'
})

export const ContentDetailCloseBtn = css({
  position: 'absolute',
  top: 0,
  right: 0,
  margin: '1rem',
  borderRadius: '50%',
  width: '36px',
  height: '36px',
  background: 'var(--background-color)',
  padding: '8px',
  border: 'none',
})