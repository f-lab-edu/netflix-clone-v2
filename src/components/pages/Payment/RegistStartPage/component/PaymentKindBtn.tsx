import type { MouseEventHandler, ReactNode } from 'react';
import RegistKindBtnArrow from '@/assets/netflix/payment/RegistKindBtnArrow.svg'
import { PaymentKindBtnChildCss, PaymentKindBtnContentCss, PaymentKindBtnShellCss, PaymentKindBtnTitleCss } from '../styles/PaymentKindBtnStyle';
interface PaymentKindBtnProps {
  title: string,
  children?: ReactNode,
  onClick: MouseEventHandler
}
const PaymentKindBtn = ({
  title,
  children,
  onClick
}: PaymentKindBtnProps) => {
  return <button
    onClick={onClick}
    css={PaymentKindBtnShellCss}
  >
    <div css={PaymentKindBtnContentCss} role="grid">
      <p css={PaymentKindBtnTitleCss}>{title}</p>
      <div css={PaymentKindBtnChildCss}>{children}</div>
    </div>
    <div>
      <RegistKindBtnArrow />
    </div>
  </button>
}
export default PaymentKindBtn