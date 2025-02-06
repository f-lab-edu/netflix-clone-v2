import type { NextPageWithLayout } from '@/pages/_app'
import { useTranslation } from 'next-i18next'
import { FormProvider, useForm } from 'react-hook-form'
import BrowserLayout from '@/components/layout/BrowserLayout'
import RHFProfileForm from '@/components/ui/Profile/RHFProfileForm'
import { FirstProfileFormCss, FirstProfileShellCss } from './styles/FirstProfilePageStyle'

const FirstProfilePage: NextPageWithLayout = () => {
  const { t } = useTranslation(['common', 'page-firstProfile'])
  const form = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
    }
  })
  const saveProfileAction = () => {
  }
  return <div css={FirstProfileShellCss}>
    <FormProvider {...form}>
      <RHFProfileForm
        css={FirstProfileFormCss}
        title={t('page-firstProfile:title')}
        desc={t('page-firstProfile:desc')}
        submitAction={saveProfileAction}
        isDark
      />
    </FormProvider>
  </div>
}

FirstProfilePage.getLayout = (page) => {
  return <BrowserLayout>{page}</BrowserLayout>
}

export default FirstProfilePage