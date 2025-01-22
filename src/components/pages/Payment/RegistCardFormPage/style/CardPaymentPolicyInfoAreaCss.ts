import { css } from '@emotion/react';
import { theme } from '@/components/ui/theme';

export const CardPaymentPolicyInfoShellCss = css({
  display: 'flex',
  flexDirection: 'column',
})

const borderStyle = `solid 1px ${theme.color.greyCC.default}`
export const CardPaymentPolicyCheckAllCss = css({
  borderBottom: borderStyle,
  borderTop: borderStyle,
  marginTop: '.75rem',
  marginBottom: '1.5rem'
})

export const CardPaymentPolicyItemListCss = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px'
})