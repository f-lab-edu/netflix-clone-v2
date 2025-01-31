import type { NextPageWithLayout } from '@/pages/_app';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import SignupLayout from '@/components/layout/SignupLayout';
import ConditionalRender from '@/components/ui/utils/ConditionalRender';
import useWindowResize from '@/hooks/useWindowResize';
import StepHeader from './component/StepHeader';
import PlatformDetailLarge from './component/platform/PlatfomDetailLarge';
import PlatformDetailSlim from './component/platform/PlatfomDetailSlim';
import { SignupMainContentCss, SignupMainNextButtonCss } from './styles/SignupMainStyle';
import { SignupPlatformContentCss, SignupPlatformContentLargeCss } from './styles/SignupPlayform';

const PlatformPage: NextPageWithLayout = () => {
  const { t } = useTranslation(['page-signup'])

  // on resize display width > over 1050px change contents as full width mode
  const {
    isLarge
  } = useWindowResize()
  const [selectedType, setSelectedType] = useState<MembershipPlanTier>('premium')

  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])
  return <>
    <div css={[SignupPlatformContentCss, isLarge ? SignupPlatformContentLargeCss : {}]}>
      <StepHeader css={{ marginBottom: '.5rem' }} step={1} title={t('page-signup:platform.title')} />
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
      <Link css={SignupMainNextButtonCss} href="/signup/registration">
        Next
      </Link>
    </div>
  </>
}

PlatformPage.getLayout = (page) => {
  return <SignupLayout>{page}</SignupLayout>
}
export default PlatformPage