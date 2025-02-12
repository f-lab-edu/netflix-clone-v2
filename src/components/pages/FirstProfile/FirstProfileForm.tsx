import type { CreateProfileRequestType } from '@/lib/network/types/profile';
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import RHFProfileForm from '@/components/ui/Profile/RHFProfileForm';
import { ProfileFormCss } from '@/components/ui/Profile/RHFProfileForm/style';
import useInsertProfile from '@/hooks/mutation/profile/useInsertProfile';
import { FirstProfileFormCss } from './styles/FirstProfilePageStyle';

export default function FirstProfileForm() {
  const { t } = useTranslation(['common', 'page-firstProfile'])
  const form = useForm<CreateProfileRequestType>({
    mode: 'onChange',
    defaultValues: {
      name: '',
    }
  })
  const { mutate } = useInsertProfile()
  const saveProfileAction = (profile: CreateProfileRequestType) => {
    mutate(profile)
  }
  return <form
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
}