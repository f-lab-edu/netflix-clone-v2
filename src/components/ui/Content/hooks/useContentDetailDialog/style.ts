import { css } from '@emotion/react';
import { theme } from '@/components/ui/theme';

export const ContentDetailShell = css({
  display: 'flex',
  justifyContent: 'center',
  width: '100vw',
  height: '100vh',
  overflow: 'scroll',
  padding: '0 8px'
})

export const ContentDetailLayout = css({
  borderRadius: theme.borderRadius.xs,
  maxWidth: 940,
  width: '100%',
  height: 'max-content',
  marginTop: '2rem',
  background: 'var(--background-color)',
  overflow: 'hidden'
})

export const ContentDetailImageArea = css({
  display: 'flex',
  width: '100%',
  aspectRatio: '848/477',
  position: 'relative',
})

export const ContentDetailImage = css({
  width: '100% !important',
  height: '100% !important',
})

export const ContentDetailControl = css(ContentDetailImage, {
  position: 'absolute',
  left: 0,
  top: 0,
  background: `linear-gradient(0deg, ${theme.color.grey16.default}, transparent 50%)`,
  padding: '0 48px calc(5% + 36px)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'end'
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
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '> *': {
    display: 'inline-block',
    width: '100%',
    height: '100%'
  }
})