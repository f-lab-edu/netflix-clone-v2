import { css } from '@emotion/react';
import { BreakPoints } from '@/components/styled/layout';
import { theme } from '@/components/ui/theme';

export const signinPageBaseCss = css({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#000',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden'
})

export const backgroundCss = css({
  pointerEvents: 'none',
  zIndex: 0,
  position: 'absolute',
  width: '100%',
  top: 0,
  left: 0,
  opacity: '0.5',
  '> *': {
    display: 'block',
    width: '100%',
    aspectRatio: '16/9'
  },
  '~ *': {
    zIndex: 1,

  }
})

export const headerAreaCss = css({
  alignSelf: 'stretch',
  display: 'flex',
  padding: '1.5rem'
}, BreakPoints.sm({
  padding: '1.5rem 2rem'
}))

export const formPositionAreaCss = css({
  padding: '0 5%',
}, BreakPoints.sm({
  marginBottom: '50px'
}))

export const formAreaCss = css({
  background: 'rgba(0,0,0,0.7)',
  borderRadius: theme.borderRadius.xs,
  boxSizing: 'border-box',
  margin: 0,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
}, BreakPoints.sm({
  minHeight: '707px',
  minWidth: '450px',
  padding: '48px 68px'
}))

export const formGridCss = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  '> p': {
    textAlign: 'center',
    fontWeight: 400,
    fontSize: '1rem',
    color: theme.color.white.opacity70
  }
})

export const formTitleCss = css({
  fontSize: '32px',
  fontWeight: 700,
  marginBottom: '28px'
})

export const forgotPasswordCss = css({
  color: theme.color.white.default,
  textAlign: 'center',
  fontWeight: 400,
  fontSize: '1rem',
  margin: '16px auto 0',
  display: 'block',
  ':hover': {
    textDecoration: 'underline'
  }
})

export const rememberSigninInfoCss = css({
  marginTop: '1.25rem'
})

export const signupLinkCss = css({
  marginTop: '1rem',
  color: theme.color.white.opacity70,
  fontSize: '1rem',
  fontWeight: 400,
  '> a': {
    color: theme.color.white.default
  }
})