import type { NextPageWithLayout } from '@/pages/_app';
import { useTranslation } from 'next-i18next';
import SignupLayout from '@/components/layout/SignupLayout';
import PageInOutAnimate from '@/components/ui/animation/PageInOutAnimate';
import ConditionalRender from '@/components/utils/ConditionalRender';
import StepHeader from '../../Signup/component/StepHeader';
import CardInfoForm from './component/CardInfoForm';
import CardInfoFormWithPolicys from './component/CardInfoFormWithPolicys';

const RegistCardFormPage: NextPageWithLayout<{ isFirst: boolean }> = ({ isFirst }) => {
  const { t } = useTranslation(['common', 'page-payment'])
  return <PageInOutAnimate>
    <ConditionalRender.Boolean
      condition={isFirst}
      render={{
        true: <>
          <StepHeader title={t('page-payment:firstCardRegistPage.title')} step={3} />
          <CardInfoFormWithPolicys submitBtnText={t('page-payment:firstCardRegistPage.submitBtn')} />
        </>,
        false:
          <CardInfoForm submitBtnText={t('page-payment:addCardFormPart.submitBtn')} />
      }}
    />
  </PageInOutAnimate>
}

RegistCardFormPage.getLayout = (page) => {
  return <SignupLayout withShell>{page}</SignupLayout>
}

export default RegistCardFormPage
