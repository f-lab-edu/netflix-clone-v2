import type { NextPageWithLayout } from '@/pages/_app';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import SecondaryLayout from '@/components/layout/SecondaryLayout';
import StepHeader from './component/StepHeader';
import { RegistrationLogoImageCss, StepLogoPositionCss } from './styles/RegistrationStyle';
import { BodyContentShellCss, SignupMainContentCss, SignupMainNextButtonCss } from './styles/SignupMain';

const RegistrationPage: NextPageWithLayout = () => {
  const { t } = useTranslation(['page-signup'])
  return <div css={BodyContentShellCss}>
    <div css={SignupMainContentCss}>
      <div css={[RegistrationLogoImageCss, StepLogoPositionCss]}>
      </div>
      <StepHeader title={t('page-signup:registration.title')} step={3} />
      <div>{t('page-signup:registration.desc')}</div>
    </div>
    <div css={[SignupMainContentCss, { marginTop: '24px' }]}>
      <Link css={SignupMainNextButtonCss} href="/signup/platform">
        Next
      </Link>
    </div>
  </div>
}

RegistrationPage.getLayout = (page) => {
  return <SecondaryLayout>{page}</SecondaryLayout>
}
export default RegistrationPage