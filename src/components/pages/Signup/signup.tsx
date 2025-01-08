import type { NextPageWithLayout } from '@/pages/_app';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import SignupLayout from '@/components/layout/SignupLayout';
import SignupDesc from './component/SignupDesc';
import StepHeader from './component/StepHeader';
import { SignupMainContentCss, SignupMainNextButtonCss } from './styles/SignupMain';

const SignupPage: NextPageWithLayout = () => {
  const { t } = useTranslation(['page-signup'])
  return <>
    <div css={SignupMainContentCss}>
      {/* TODO: add check logo svg */}
      <StepHeader title={t('page-signup:main.title')} step={1} />
      {/* TODO: styles */}
      <ul>
        <SignupDesc desc={t('page-signup:main.desc1')} />
        <SignupDesc desc={t('page-signup:main.desc2')} />
        <SignupDesc desc={t('page-signup:main.desc3')} />
      </ul>
    </div>
    <div css={[SignupMainContentCss, { marginTop: '24px' }]}>
      <Link css={SignupMainNextButtonCss} href="/signup/platform">
        Next
      </Link>
    </div>
  </>
}

SignupPage.getLayout = (page) => {
  return <SignupLayout withShell>{page}</SignupLayout>
}
export default SignupPage