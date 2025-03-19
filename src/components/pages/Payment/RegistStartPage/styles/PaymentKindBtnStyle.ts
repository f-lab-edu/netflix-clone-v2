import { css } from '@emotion/react';
import { theme } from '@/components/ui/theme';

const rightPadding = '10px'
const arrowSize = '24px'
const leftPadding = '15px'
const topBottomPadding = '15px'

export const PaymentKindBtnShellCss = css({
  background: theme.color.white.default,
  color: theme.color.grey.defaultFont,
  border: '2px solid #ccc',
  borderRadius: '4px',
  cursor: 'pointer',
  display: 'grid',
  columnGap: leftPadding,
  gridTemplateColumns: `1fr ${arrowSize}`,
  minHeight: '64px',
  paddingLeft: leftPadding,
  paddingRight: rightPadding,
  alignItems: 'center',
  width: '100%'
})

export const PaymentKindBtnArrowCss = css({
  width: arrowSize,
  height: arrowSize,
})

export const PaymentKindBtnContentCss = css({
  paddingTop: topBottomPadding,
  paddingBottom: topBottomPadding,
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  columnGap: leftPadding
})

export const PaymentKindBtnTitleCss = css({
  lineHeight: '20px',
  fontSize: '1rem'
})

export const PaymentKindBtnChildCss = css({
  display: 'flex',
  flexWrap: 'wrap',
  rowGap: '4px',
  columnGap: '6px',
  '> *': {
    width: '39px',
    height: '25px'
  }
})
