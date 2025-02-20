import { css } from '@emotion/react';
import { theme } from '@/components/ui/theme';

export const ContentDialogShellCss = css({
  borderRadius: theme.borderRadius.sm,
  boxShadow: 'rgba(0,0,0,.75) 0px 3px 10px',
  background: theme.color.black.default,
  color: theme.color.white.default
})

export const ContentDialogImgShellCss = css({
  aspectRatio: 16 / 9,
})

export const ContentDetailShellCss = css({
  padding: '1rem',
  cursor: 'pointer'
})

export const ContentDialogButtonAreaCss = css({
  display: 'flex',
  justifyContent: 'space-between'
})