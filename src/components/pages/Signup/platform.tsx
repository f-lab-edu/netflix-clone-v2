import type { NextPageWithLayout } from '@/pages/_app';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useCallback, useDeferredValue, useEffect, useMemo, useState } from 'react';
import SecondaryLayout from '@/components/layout/SecondaryLayout';
import StepHeader from './component/StepHeader';
import PlatformDetailLarge from './component/platform/PlatfomDetailLarge';
import PlatformDetailSlim from './component/platform/PlatfomDetailSlim';
import { SignupMainContentCss, SignupMainNextButtonCss } from './styles/SignupMain';
import { SignupPlatformContentCss, SignupPlatformContentLargeCss } from './styles/SignupPlayform';

const PlatformPage: NextPageWithLayout = () => {
  const { t } = useTranslation(['page-signup'])
  // TODO: on resize display width > over 1050px change contents as full width mode
  const [displayWidth, setDisplayWidth] = useState(0)
  const displayWidthDeferred = useDeferredValue(displayWidth)
  const isLarge = useMemo(() => displayWidthDeferred > 1050, [displayWidthDeferred])

  const event = useCallback(() => {
    setDisplayWidth(window.innerWidth)
  }, [])
  useEffect(() => {
    event()
    window.addEventListener('resize', event)
    return () => {
      window.removeEventListener('resize', event)
    }
  }, [])
  const [selectedType, setSelectedType] = useState<MembershipPlanTier>('premium')

  return <>
    <div css={[SignupPlatformContentCss, isLarge ? SignupPlatformContentLargeCss : {}]}>
      <StepHeader css={{ marginBottom: '.5rem' }} step={1} title={t('page-signup:platform.title')} />
      {
        isLarge ? <PlatformDetailLarge onSelectedChange={setSelectedType} selectedType={selectedType} /> : <PlatformDetailSlim onSelectedChange={setSelectedType} selectedType={selectedType} />
      }
    </div>
    <div css={[SignupMainContentCss, { marginTop: '24px' }]}>
      <Link css={SignupMainNextButtonCss} href="/signup/registration">
        Next
      </Link>
    </div>
  </>
}

PlatformPage.getLayout = (page) => {
  return <SecondaryLayout>{page}</SecondaryLayout>
}
export default PlatformPage