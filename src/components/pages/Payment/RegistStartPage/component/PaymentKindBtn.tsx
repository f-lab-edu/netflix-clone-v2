import type { MouseEventHandler, ReactNode } from 'react';
import { useId } from 'react';
import RegistKindBtnArrow from '@/assets/netflix/payment/RegistKindBtnArrow.svg'
import { PaymentKindBtnChildCss, PaymentKindBtnContentCss, PaymentKindBtnShellCss, PaymentKindBtnTitleCss } from '../styles/PaymentKindBtnStyle';
interface PaymentKindBtnProps {
  title: string
  desc?: string
  children?: ReactNode
  onClick: MouseEventHandler
}
const PaymentKindBtn = ({
  title,
  desc,
  children,
  onClick
}: PaymentKindBtnProps) => {
  const id = useId()
  return <button
    onClick={onClick}
    css={PaymentKindBtnShellCss}
    aria-labelledby={id}
  >
    <div css={PaymentKindBtnContentCss} role="grid">
      <p id={id} css={PaymentKindBtnTitleCss}>{title}</p>
      <div aria-label={desc} css={PaymentKindBtnChildCss}>{children}</div>
    </div>
    <div>
      <RegistKindBtnArrow />
    </div>
  </button>
}
export default PaymentKindBtn