import type { NextPageWithLayout } from '@/pages/_app'
import BrowserLayout from '@/components/layout/BrowserLayout'
import ErrorDisplay from '@/components/ui/utils/ErrorDisplay';
import FirstProfileForm from './FirstProfileForm';
import { FirstProfileShellCss } from './styles/FirstProfilePageStyle';

const FirstProfilePage: NextPageWithLayout = () => {
  return <div css={FirstProfileShellCss}>
    <ErrorDisplay>
      <FirstProfileForm />
    </ErrorDisplay>
  </div>
}

FirstProfilePage.getLayout = (page) => {
  return <BrowserLayout>{page}</BrowserLayout>
}

export default FirstProfilePage