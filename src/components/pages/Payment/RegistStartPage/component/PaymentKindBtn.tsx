import type { ReactNode } from 'react';
import RegistKindBtnArrow from '@/assets/netflix/payment/RegistKindBtnArrow.svg'
import { PaymentKindBtnChildCss, PaymentKindBtnContentCss, PaymentKindBtnShellCss, PaymentKindBtnTitleCss } from '../styles/PaymentKindBtnStyle';
interface PaymentKindBtnProps {
  title: string,
  type: PaymentMethodType,
  children?: ReactNode,
  onSelectType: (_type: PaymentMethodType) => void
}
const PaymentKindBtn = ({
  title,
  children,
  type,
  onSelectType
}: PaymentKindBtnProps) => {
  return <button
    onClick={() => {
      onSelectType(type)
    }}
    css={PaymentKindBtnShellCss}
  >
    <div css={PaymentKindBtnContentCss}>
      <p css={PaymentKindBtnTitleCss}>{title}</p>
      <div css={PaymentKindBtnChildCss}>{children}</div>
    </div>
    <div>
      <RegistKindBtnArrow />
    </div>

  </button>
}
export default PaymentKindBtn