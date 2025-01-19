import { css } from '@emotion/react';
import { BreakPoints } from '@/components/styled/layout';
import { theme } from '@/components/ui/theme';

export const signinPageBaseCss = css({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#000',
  justifyContent: 'center',
  alignItems: 'center'
})

export const backgroundCss = css({
  pointerEvents: 'none',
  zIndex: 0,
  position: 'absolute',
  top: 0,
  left: 0,
  minHeight: '100vh',
  opacity: '0.5',
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
    color: 'rgba(255,255,255,0.7)'
  }
})

export const formTitleCss = css({
  fontSize: '32px',
  fontWeight: 700,
  marginBottom: '28px'
})