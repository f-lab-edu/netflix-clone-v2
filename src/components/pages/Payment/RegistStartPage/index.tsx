import type { NextPageWithLayout } from '@/pages/_app';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import SignupLayout from '@/components/layout/SignupLayout';
import PageInOutAnimate from '@/components/ui/animation/PageInOutAnimate';
import ConditionalRender from '@/components/utils/ConditionalRender';
import FirstRegistDescPart from './component/FirstRegistDescPart';
import PaymentKindBtn from './component/PaymentKindBtn';
import RegistDescPart from './component/RegistDescPart';
import { PageShellCss } from './styles/PageStyle';

const PaymentRegistStartPage: NextPageWithLayout<{ isFirst: boolean }> = (initProps) => {
  const router = useRouter()
  const { t } = useTranslation(['common', 'page-payment'])
  const onSelectTypeAction = (type: PaymentMethodType) => {
    const path = initProps.isFirst ? '/signup/payment/regist' : '/payment/regist'
    router.push(`${path}/${type}`)
  }
  return <PageInOutAnimate css={PageShellCss}>
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
    <div>
      <PaymentKindBtn
        title={t('page-payment:buttonPart.card')}
        onClick={() => onSelectTypeAction('card')}
      />
    </div>
  </PageInOutAnimate>
}

PaymentRegistStartPage.getLayout = (page) => {
  return <SignupLayout withShell>{page}</SignupLayout>
}

export default PaymentRegistStartPage
