import { css } from '@emotion/react';
import { MediaPoint } from '@/components/styled/layout';
import { DefaultButtonCss } from '@/components/ui/Button/ButtonStyle';

export const EmailFormRowLayoutCss = css([{
  flexFlow: 'nowrap',
  paddingTop: '1.625rem',
  display: 'flex',
  rowGap: '1rem',
  columnGap: '0.5rem'
}, MediaPoint({
  alignItems: ['center', 'start'],
  flexDirection: ['column', 'row'],
})])

export const EmailFormSubmitBtnCss = css([DefaultButtonCss, {
  fontSize: '1.125rem',
  fontWeight: 500,
  minHeight: '3.5rem'
}, MediaPoint({
  padding: ['0.5rem 1rem', '0.75rem 1.5rem']
})])