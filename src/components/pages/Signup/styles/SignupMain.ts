import { css } from '@emotion/react';
import { DefaultButtonCss, LightButtonInteractionCss } from '@/components/ui/Button/ButtonStyle';

export const SignupMainContentCss = css([{
  maxWidth: '340px',
  textAlign: 'center',
  margin: '0 auto'
}])

export const SignupMainNextButtonCss = css([DefaultButtonCss, LightButtonInteractionCss, {
  width: '100%',
  minHeight: '64px',
  fontSize: '24px',
  justifyContent: 'center'
}])