import type { NextPageWithLayout } from '@/pages/_app';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import SignupLayout from '@/components/layout/SignupLayout';
import SignupDesc from './component/SignupDesc';
import StepHeader from './component/StepHeader';
import { SignupChecklistCss, SignupCheckmarkShellCss, SignupMainContentCss, SignupMainNextButtonCss } from './styles/SignupMainStyle';

const SignupPage: NextPageWithLayout = () => {
  const { t } = useTranslation(['page-signup'])
  return <>
    <div css={SignupMainContentCss}>
      <div css={SignupCheckmarkShellCss}>
        <Image src="/netflix/signup/Checkmark.png" width="50" height="50" alt="checkmark" />
      </div>
      <StepHeader title={t('page-signup:main.title')} step={1} />
      {/* TODO: styles */}
      <ul css={SignupChecklistCss}>
        <SignupDesc desc={t('page-signup:main.desc1')} />
        <SignupDesc desc={t('page-signup:main.desc2')} />
        <SignupDesc desc={t('page-signup:main.desc3')} />
      </ul>
    </div>
    <div css={[SignupMainContentCss, { paddingTop: '24px' }]}>
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