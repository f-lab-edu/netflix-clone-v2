import type { NextPageWithLayout } from '@/pages/_app';
import { useTranslation } from 'next-i18next';
import SignupLayout from '@/components/layout/SignupLayout';
import ConditionalRender from '@/components/ui/utils/ConditionalRender';
import StepHeader from '../../Signup/component/StepHeader';
import CardInfoForm from './component/CardInfoForm';
import CardInfoFormWithPolicys from './component/CardInfoFormWithPolicys';

const RegistCardFormPage: NextPageWithLayout<{ isFirst: boolean }> = ({ isFirst }) => {
  const { t } = useTranslation(['common', 'page-payment'])
  return <div>
    <ConditionalRender.Boolean
      condition={isFirst}
      render={{
        true: <>
          <StepHeader title={t('page-payment:firstCardRegistPage.title')} step={3} />
          <CardInfoFormWithPolicys submitBtnText={t('page-payment:firstCardRegistPage.submitBtn')} />
        </>,
        false: <>
          <CardInfoForm submitBtnText={t('page-payment:addCardFormPart.submitBtn')} />
        </>
      }}
    />
  </div>
}

RegistCardFormPage.getLayout = (page) => {
  return <SignupLayout withShell>{page}</SignupLayout>
}

export default RegistCardFormPage