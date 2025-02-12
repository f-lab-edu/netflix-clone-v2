import type { NextPageWithLayout } from '@/pages/_app'
import { useTranslation } from 'next-i18next'
import { FormProvider, useForm } from 'react-hook-form'
import BrowserLayout from '@/components/layout/BrowserLayout'
import RHFProfileForm from '@/components/ui/Profile/RHFProfileForm'
import { ProfileFormCss } from '@/components/ui/Profile/RHFProfileForm/style'
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
    <form
      css={[FirstProfileFormCss, ProfileFormCss]}
      onSubmit={form.handleSubmit(saveProfileAction)}
    >
      <FormProvider {...form}>
        <RHFProfileForm
          title={t('page-firstProfile:title')}
          desc={t('page-firstProfile:desc')}
          isDark
        />
      </FormProvider>
    </form>
  </div>
}

FirstProfilePage.getLayout = (page) => {
  return <BrowserLayout>{page}</BrowserLayout>
}

export default FirstProfilePage