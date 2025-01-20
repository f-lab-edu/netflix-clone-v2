import { css } from '@emotion/react';
import { DefaultButtonCss, RedButtonCss, } from '@/components/ui/Button/ButtonStyle';

export const SignupMainContentCss = css([{
  maxWidth: '340px',
  textAlign: 'center',
  margin: '0 auto'
}])

export const SignupMainNextButtonCss = css([DefaultButtonCss, RedButtonCss.color, RedButtonCss.interaction.light, {
  width: '100%',
  minHeight: '64px',
  fontSize: '24px',
  justifyContent: 'center'
}])