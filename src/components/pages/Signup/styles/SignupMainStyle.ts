import { css } from '@emotion/react';
import { DefaultButtonCss, RedButtonCss, } from '@/components/ui/Button/ButtonStyle';

export const SignupMainContentCss = css([{
  maxWidth: '340px',
  textAlign: 'center',
  margin: '0 auto'
}])

export const SignupCheckmarkShellCss = css({
  margin: '100px 0 20px'
})

export const SignupChecklistCss = css({
  listStyle: 'none',
  textAlign: 'start',
  fontSize: '1.125rem',
  maxWidth: '300px',
  fontWeight: 400,
  lineHeight: 1.5,
  margin: '1rem 0',
  'li + li': {
    marginTop: '1rem'
  }
})

export const SignupMainNextButtonCss = css([DefaultButtonCss, RedButtonCss.color, RedButtonCss.interaction.light, {
  width: '100%',
  minHeight: '64px',
  fontSize: '24px',
  justifyContent: 'center'
}])