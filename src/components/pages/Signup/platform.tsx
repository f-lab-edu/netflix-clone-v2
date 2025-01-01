import type { NextPageWithLayout } from '@/pages/_app';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import SecondaryLayout from '@/components/layout/SecondaryLayout';
import PlatformCard from './component/PlatformCard';
import StepHeader from './component/StepHeader';
import { SignupMainContentCss, SignupMainNextButtonCss } from './styles/SignupMain';
import { SignupPlatformCardListCss, SignupPlatformContentCss } from './styles/SignupPlayform';

const PlatformPage: NextPageWithLayout = () => {
  const { t } = useTranslation(['page-signup'])
  return <>
    <div css={SignupPlatformContentCss}>
      <StepHeader css={{ marginBottom: '.5rem' }} step={1} title={t('page-signup:platform.title')} />
      <div css={SignupPlatformCardListCss}>
        <PlatformCard title='Premium' sub='4k' isChecked={true}></PlatformCard>
        <PlatformCard title='Premium' sub='4k' isChecked={true}></PlatformCard>
        <PlatformCard title='Premium' sub='4k' isChecked={true}></PlatformCard>
      </div>
      {/* TODO: styles */}
      <ul>
      </ul>
    </div>
    <div css={[SignupMainContentCss, { marginTop: '24px' }]}>
      <Link css={SignupMainNextButtonCss} href="/signup/planform">
        Next
      </Link>
    </div>
  </>
}

PlatformPage.getLayout = (page) => {
  return <SecondaryLayout>{page}</SecondaryLayout>
}
export default PlatformPage