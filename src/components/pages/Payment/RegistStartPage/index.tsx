import type { NextPageWithLayout } from '@/pages/_app';
import { useTranslation } from 'next-i18next';
import ConditionalRender from '@/components/ui/utils/ConditionalRender';
import FirstRegistDescPart from './component/FirstRegistDescPart';
import RegistDescPart from './component/RegistDescPart';
import RegistPaymentKindPart from './component/RegistPaymentKindPart';

const PaymentRegistStartPage: NextPageWithLayout<{ isFirst: boolean }> = (initProps) => {
  const { t } = useTranslation(['common', 'page-payment'])
  const onSelectTypeAction = (type: PaymentMethodType) => {
    switch (type) {
      case 'card': {

      } break
    }
  }
  return <div>
    <ConditionalRender.Boolean
      condition={initProps.isFirst}
      render={{
        true: <>
          <FirstRegistDescPart
            step={3}
            title={t('page-payment:firstRegist.title')}
            desc1={t('page-payment:firstRegist.desc1')}
            desc2={t('page-payment:firstRegist.desc2')}
          />
        </>,
        false: <>
          <RegistDescPart
            title={t('page-payment:registNewPayment.title')}
            desc1={t('page-payment:registNewPayment.desc')}
          />
        </>
      }}
    />
    <RegistPaymentKindPart onSelectType={onSelectTypeAction} />
  </div>
}

export default PaymentRegistStartPage