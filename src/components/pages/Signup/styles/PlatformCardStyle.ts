import { css, keyframes } from '@emotion/react';

export const PlatformCardCss = css({
  borderRadius: '12px',
  boxSizing: 'border-box',
  padding: '12px',
  overflow: 'hidden',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
  minHeight: '107px',
  transition: 'box-shadow 100ms ease-in-out',
})

export const PlatformCardDefaultCss = css({
  boxShadow: 'rgba(0, 0, 0, 0) 0px 0px 0px 0px',
  color: 'black',
  border: '1px solid rgba(128, 128, 128, 0.4)',
  backgroundColor: '#ffffff',
})

export const PlatformCardActivedCss = css({
  boxShadow: 'rgba(0, 0, 0, 0.3) 0px 4px 13px -3px',
  color: 'white',
  border: '0px',
  background: 'radial-gradient(140.76% 131.96% at 100% 100%, rgb(229, 9, 20) 0%, rgba(74, 42, 150, 0.5) 73.57%, rgba(74, 42, 150, 0) 100%), rgb(29, 82, 157)',
  'path': {
    fill: 'white'
  }
})

export const PlatformCardTitleCss = css({
  fontSize: '0.875rem',
  fontWeight: 500,
  lineHeight: 1.5,
  margin: 0
})

export const PlatformCardSubCss = css({
  fontSize: '0.625rem',
  fontWeight: 500,
  lineHeight: 1,
  margin: 0
})

const animation = keyframes({
  '0%': {
    opacity: 0
  },
  '100%': {
    opacity: 1,
    minWidth: '16px'
  }
})

export const PlatformCardCheckedIconCss = css({
  width: '14px',
  borderRadius: '50%',
  cursor: 'initial',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '16px',
  alignSelf: 'end',
  marginTop: 'auto',
  maxWidth: '0px',
  animationDuration: '100ms',
  animationTimingFunction: 'ease-out',
  animationIterationCount: 1,
  animationDirection: 'normal',
  animationFillMode: 'forwards',
  animationPlayState: 'running',
  animationName: animation,
  '> svg': {
    overflowClipMargin: 'content-box',
    transform: 'scale(1.375)'
  }
})