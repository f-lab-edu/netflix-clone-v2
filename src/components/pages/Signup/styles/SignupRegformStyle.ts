import { css } from '@emotion/react';
import { DefaultButtonCss, RedButtonCss } from '@/components/ui/Button/ButtonStyle';
import { TextDisplayCss } from '@/components/ui/Font/TextDisplayStyle';
import { theme } from '@/components/ui/theme';

export const SignupRegformContainerCss = css({
  display: 'flex',
  padding: '20px 32px 64px',
  justifyContent: 'center',
  // alignItems: 'center'
})

export const SignupRegformShellCss = css({
  maxWidth: '440px'
})

export const SignupRegformStepDisplayCss = css({
  marginTop: '20px'
})

export const SignupRegformDescCss = css(TextDisplayCss, {
  fontSize: '1.125rem',
  fontWeight: 400,
  color: theme.color.black.default
})

export const SignupRegformInputAreaCss = css({
  margin: '16px 0 20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px'
})

export const SignupRegformSubmitCss = css(DefaultButtonCss, RedButtonCss.color, RedButtonCss.interaction.light, {
  width: '100%',
  padding: '20px 24px',
  fontSize: '1.5rem',
  fontWeight: 500,
  justifyContent: 'center',
  minHeight: '4.5rem'
})