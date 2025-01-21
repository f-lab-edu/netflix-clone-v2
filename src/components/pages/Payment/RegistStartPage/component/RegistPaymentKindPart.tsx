import { useTranslation } from 'next-i18next';
import PaymentKindBtn from './PaymentKindBtn';

interface RegistPaymentKindPartProps {
  onSelectType: (_type: PaymentMethodType) => void
}

export default function RegistPaymentKindPart(props: RegistPaymentKindPartProps) {
  const { t } = useTranslation(['page-payment'])
  return <div>
    <PaymentKindBtn title={t('page-payment:buttonPart.card')} type='card' {...props}>
    </PaymentKindBtn>
  </div>
}