import { css } from '@emotion/react';

export const PlatformInfoItemCss = css({
  padding: '12.5px 0px',
  margin: '0px',
  listStyle: 'none',
  display: 'flex',
  alignItems: 'center',
  borderBottom: '1px solid rgba(128, 128, 128, 0.4)',
  ':last-child': {
    borderBottom: 'none'
  }
})

export const PlatformInfoItemShellCss = css({
  display: 'flex',
  flex: '1 1 0',
  justifyContent: 'space-between'
})

export const PlatformInfoItemShellSmallCss = css({
  flexDirection: 'row',
  alignItems: 'center'
})
export const PlatformInfoItemShellLargeCss = css({
  flexDirection: 'column',
  alignItems: 'flex-start'
})

export const PlatformInfoItemTitleCss = css({
  fontSize: '0.8125rem',
  fontWeight: '500',
  lineHeight: '1.53846',
  color: 'rgb(118, 118, 118)',
  textWrap: 'wrap'
})

export const PlatformInfoItemValueCss = css({
  fontSize: '1rem',
  fontWeight: '500',
  lineHeight: '1.5',
  color: 'rgba(0, 0, 0, 0.7)',
})
