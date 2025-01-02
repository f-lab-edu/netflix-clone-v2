import { css } from '@emotion/react';

export const SignupPlatformContentCss = css({
  width: '100%',
  maxWidth: '560px',
  margin: '0px auto',
  padding: '20px 25px',
  boxSizing: 'border-box',
  transition: 'none',
})

// TODO: add media query minWidth 1050px 
export const SignupPlatformContentLargeCss = css({
  maxWidth: '1100px',
  padding: '24px 38px'
})

export const SignupPlatformCardListCss = css({
  display: 'flex',
  alignItems: 'stretch',
  flexDirection: 'row',
  gap: '8px'
})

export const SignupPlatformLargeCardListCss = css(SignupPlatformCardListCss, {
  gap: '12px'
})