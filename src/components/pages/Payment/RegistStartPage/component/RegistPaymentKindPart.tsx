import type { MouseEventHandler } from 'react';
import { useTranslation } from 'next-i18next';
import PaymentKindBtn from './PaymentKindBtn';

interface RegistPaymentKindPartProps {
  onClick: MouseEventHandler
}

export default function RegistPaymentKindPart(props: RegistPaymentKindPartProps) {
  const { t } = useTranslation(['page-payment'])
  return <div>
    <PaymentKindBtn title={t('page-payment:buttonPart.card')} {...props}>
    </PaymentKindBtn>
  </div>
}