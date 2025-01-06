import type { NextPageWithLayout } from '@/pages/_app';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useMemo, useState } from 'react';
import SecondaryLayout from '@/components/layout/SecondaryLayout';
import useWindowResize from '@/hooks/useWindowResize';
import StepHeader from './component/StepHeader';
import PlatformDetailLarge from './component/platform/PlatfomDetailLarge';
import PlatformDetailSlim from './component/platform/PlatfomDetailSlim';
import { SignupMainContentCss, SignupMainNextButtonCss } from './styles/SignupMain';
import { SignupPlatformContentCss, SignupPlatformContentLargeCss } from './styles/SignupPlayform';

const PlatformPage: NextPageWithLayout = () => {
  const { t } = useTranslation(['page-signup'])
  // TODO: on resize display width > over 1050px change contents as full width mode

  const [windowSize] = useWindowResize()
  const isLarge = useMemo(() => windowSize > 1050, [windowSize])

  const [selectedType, setSelectedType] = useState<MembershipPlanTier>('premium')

  return <>
    <div css={[SignupPlatformContentCss, isLarge ? SignupPlatformContentLargeCss : {}]}>
      <StepHeader css={{ marginBottom: '.5rem' }} step={1} title={t('page-signup:platform.title')} />
      {
        isLarge ? <PlatformDetailLarge onSelectedChange={setSelectedType} selectedType={selectedType} /> : <PlatformDetailSlim onSelectedChange={setSelectedType} selectedType={selectedType} />
      }
    </div>
    <div css={[SignupMainContentCss, { marginTop: '24px' }]}>
      <Link css={SignupMainNextButtonCss} href="/signup/platform">
        Next
      </Link>
    </div>
  </>
}

PlatformPage.getLayout = (page) => {
  return <SecondaryLayout>{page}</SecondaryLayout>
}
export default PlatformPage