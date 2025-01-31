import type { NextPageWithLayout } from '@/pages/_app';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import SignupLayout from '@/components/layout/SignupLayout';
import StepHeader from './component/StepHeader';
import { RegistrationLogoImageCss, StepLogoPositionCss } from './styles/RegistrationStyle';
import { SignupMainContentCss, SignupMainNextButtonCss } from './styles/SignupMainStyle';

const RegistrationPage: NextPageWithLayout = () => {
  const { t } = useTranslation(['page-signup'])
  return <>
    <div css={SignupMainContentCss}>
      <div css={[RegistrationLogoImageCss, StepLogoPositionCss]}>
      </div>
      <StepHeader title={t('page-signup:registration.title')} step={2} />
      <div>{t('page-signup:registration.desc')}</div>
    </div>
    <div css={[SignupMainContentCss, { marginTop: '24px' }]}>
      <Link css={SignupMainNextButtonCss} href="/signup/regform">
        Next
      </Link>
    </div>
  </>
}

RegistrationPage.getLayout = (page) => {
  return <SignupLayout withShell>{page}</SignupLayout>
}
export default RegistrationPage