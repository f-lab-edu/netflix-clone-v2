import { css } from '@emotion/react';
import { BlueButtonCss, DefaultButtonCss, RedButtonCss } from '@/components/ui/Button/ButtonStyle';
import { theme } from '@/components/ui/theme';

export const SignoutBgCss = css({
  background: theme.color.black.default,
  display: 'flex',
  flexFlow: 'column',
  alignItems: 'center',
  minHeight: '100vh'
})

export const SignoutHeaderCss = css({
  width: '100%',
  display: 'grid',
  padding: '0 3%',
  columnGap: '3%',
  justifyContent: 'space-between',
  gridAutoFlow: 'column',
  alignItems: 'center',
  gridAutoColumns: 'auto',
  minHeight: '90px'
})

export const SignoutLogoCss = css({
  width: '106px',
  fill: theme.color.red.default
})

export const SignoutSignInOutBtnCss = css([
  DefaultButtonCss,
  RedButtonCss.color,
  RedButtonCss.interaction.dark,
  {
    padding: '.5rem 1rem',
    fontSize: '1rem',
    fontWeight: 400
  }
])

export const SignoutContentLayoutCss = css({
  maxWidth: '350px',
  padding: '30px 45px',
  boxSizing: 'content-box',
  marginTop: '20px',
  background: theme.color.white.default,
  color: theme.color.grey.defaultFont,
  fontSize: '1rem',
  fontWeight: 400,
  lineHeight: 1.5,
  '> p': {
    margin: '1rem 0'
  }
})

export const SignoutTitleCss = css({
  fontSize: 'rem',
  fontWeight: 500,
  marginBottom: '20px'
})

export const SignoutDesc1Css = css({
})

export const SignoutDesc2Css = css({
})

export const SignoutGotoMainBtnCss = css([
  DefaultButtonCss,
  BlueButtonCss.color,
  BlueButtonCss.interaction.dark,
  {
    width: '100%',
    minHeight: '48px',
    fontSize: '20px',
    alignItems: 'center',
    justifyContent: 'center'
  }
])
