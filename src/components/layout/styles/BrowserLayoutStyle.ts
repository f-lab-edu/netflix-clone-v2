import { css } from '@emotion/react';
import { BreakPoints } from '@/components/styled/layout';
import { theme } from '@/components/ui/theme';

const layoutPadding = '0 4%'

export const BrowserLayoutShellCss = css({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundColor: theme.color.grey16.default,
  color: theme.color.white.default
})

export const BrowserLayoutHeaderCss = css([{
  width: '100%',
  backgroundImage: `linear-gradient(180deg, ${theme.color.black.opacity70} 10%, transparent)`,
  position: 'sticky',
  top: 0,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '42px',
  zIndex: 2,
  padding: layoutPadding
}, BreakPoints.md({
  height: '68px'
})])

export const BrowserLayoutHeaderLinkCss = css([{
  fill: theme.color.red.default,
  height: '100%',
  maxHeight: '30px',
  aspectRatio: '37 / 10'
}])

export const BrowserLayoutMainCss = css({
  padding: layoutPadding,
  flexGrow: 1
})

export const BrowserLayoutFooterCss = css({
  marginTop: '20px',
  padding: layoutPadding
})