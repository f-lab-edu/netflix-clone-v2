import type { ReactNode } from 'react';

const PaymentKindBtn = ({
  title,
  children,
  type,
  onSelectType
}: { title: string, type: PaymentMethodType, children: ReactNode, onSelectType: (_type: PaymentMethodType) => void }) => {

  return <button onClick={() => {
    onSelectType(type)
  }}>
    <div>
      <p>{title}</p>
      <div>{children}</div>
    </div>
  </button>
}
export default PaymentKindBtn