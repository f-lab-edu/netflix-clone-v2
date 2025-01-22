import type { NextPageWithLayout } from '@/pages/_app';
import SignupLayout from '@/components/layout/SignupLayout';
import ConditionalRender from '@/components/ui/utils/ConditionalRender';
import StepHeader from '../../Signup/component/StepHeader';
import CardInfoForm from './component/CardInfoForm';
import CardInfoFormWithPolicys from './component/CardInfoFormWithPolicys';

const RegistCardFormPage: NextPageWithLayout<{ isFirst: boolean }> = ({ isFirst }) => {
  return <div>
    <ConditionalRender.Boolean
      condition={isFirst}
      render={{
        true: <>
          <StepHeader title="" step={3} />
          <CardInfoFormWithPolicys />
        </>,
        false: <>
          <CardInfoForm />
        </>
      }}
    />
  </div>
}

RegistCardFormPage.getLayout = (page) => {
  return <SignupLayout withShell>{page}</SignupLayout>
}

export default RegistCardFormPage