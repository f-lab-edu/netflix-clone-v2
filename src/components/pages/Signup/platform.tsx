import type { NextPageWithLayout } from '@/pages/_app';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import SignupLayout from '@/components/layout/SignupLayout';
import ConditionalRender from '@/components/ui/utils/ConditionalRender';
import useJWTs from '@/hooks/account/useJWTs';
import useWindowResize from '@/hooks/useWindowResize';
import { signupMembershipTier } from '@/state/Signup';
import StepHeader from './component/StepHeader';
import PlatformDetailLarge from './component/platform/PlatfomDetailLarge';
import PlatformDetailSlim from './component/platform/PlatfomDetailSlim';
import { SignupMainContentCss, SignupMainNextButtonCss } from './styles/SignupMainStyle';
import { SignupPlatformContentCss, SignupPlatformContentLargeCss } from './styles/SignupPlayform';

const PlatformPage: NextPageWithLayout = () => {
  const { t } = useTranslation(['page-signup'])

  const { hasLogin } = useJWTs()
  const [, setMembershipTier] = useAtom(signupMembershipTier)
  // on resize display width > over 1050px change contents as full width mode
  const {
    isLarge
  } = useWindowResize()
  const [selectedType, setSelectedType] = useState<MembershipPlanTier>('premium')

  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])

  const goNextAction = () => {
    setMembershipTier(selectedType)
  }
  return <>
    <div css={[SignupPlatformContentCss, isLarge ? SignupPlatformContentLargeCss : {}]}>
      <StepHeader css={{ marginBottom: '.5rem' }} step={2} title={t('page-signup:platform.title')} />
      <ConditionalRender.Boolean
        condition={isClient}
        render={{
          true: <ConditionalRender.Boolean
            condition={isLarge}
            render={{
              true: <PlatformDetailLarge onSelectedChange={setSelectedType} selectedType={selectedType} />,
              false: <PlatformDetailSlim onSelectedChange={setSelectedType} selectedType={selectedType} />
            }}
          />
        }}
      />
    </div>
    <div css={[SignupMainContentCss, { marginTop: '24px' }]}>
      <Link css={SignupMainNextButtonCss} href={hasLogin ? '/signup/payment/regist/' : '/signup/registration'} onClick={goNextAction}>
        Next
      </Link>
    </div>
  </>
}

PlatformPage.getLayout = (page) => {
  return <SignupLayout>{page}</SignupLayout>
}
export default PlatformPage