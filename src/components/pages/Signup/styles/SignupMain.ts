import { css } from '@emotion/react';
import { DefaultButtonCss, LightButtonInteractionCss } from '@/components/ui/Button/ButtonStyle';

export const BodyContentShellCss = css({
  '--layout-container-side-padding': '32px',
  padding: '20px var(--layout-container-side-padding) 60px',
  margin: '0 auto 15px',
  maxWidth: '978px',
  overflow: 'hidden',
})

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