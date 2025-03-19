import type { NextPageWithLayout } from '@/pages/_app';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { Suspense, useState } from 'react';
import SignupLayout from '@/components/layout/SignupLayout';
import PageInOutAnimate from '@/components/ui/animation/PageInOutAnimate';
import ConditionalRender from '@/components/utils/ConditionalRender';
import useJWTs from '@/hooks/account/useJWTs';
import { useSignupMembershipTier } from '@/state/signup/hooks';
import { useWindowSize } from '@/state/windowSize';
import StepHeader from './component/StepHeader';
import PlatformDetailLarge from './component/platform/PlatfomDetailLarge';
import PlatformDetailSlim from './component/platform/PlatfomDetailSlim';
import { SignupMainContentCss, SignupMainNextButtonCss } from './styles/SignupMainStyle';
import { SignupPlatformContentCss, SignupPlatformContentLargeCss } from './styles/SignupPlayform';

const PlatformPage: NextPageWithLayout = () => {
  const { t } = useTranslation(['page-signup'])
  const { hasLogin } = useJWTs()

  const [, setMembershipTier] = useSignupMembershipTier()
  // on resize display width > over 1050px change contents as full width mode
  const {
    isLarge
  } = useWindowSize()
  const [selectedType, setSelectedType] = useState<MembershipPlanTier>('premium')

  const goNextAction = () => {
    setMembershipTier(selectedType)
  }
  return <PageInOutAnimate>
    <div css={[SignupPlatformContentCss, isLarge ? SignupPlatformContentLargeCss : {}]}>
      <StepHeader css={{ marginBottom: '.5rem' }} step={2} title={t('page-signup:platform.title')} />
      <Suspense>
        <ConditionalRender.Boolean
          condition={isLarge}
          render={{
            true: <PlatformDetailLarge onSelectedChange={setSelectedType} selectedType={selectedType} />,
            false: <PlatformDetailSlim onSelectedChange={setSelectedType} selectedType={selectedType} />
          }}
        />
      </Suspense>
    </div>
    <div css={[SignupMainContentCss, { marginTop: '24px' }]}>
      <Link css={SignupMainNextButtonCss} href={hasLogin ? '/signup/payment/regist/' : '/signup/registration'} onClick={goNextAction}>
        Next
      </Link>
    </div>
  </PageInOutAnimate>
}

PlatformPage.getLayout = (page) => {
  return <SignupLayout>{page}</SignupLayout>
}
export default PlatformPage
