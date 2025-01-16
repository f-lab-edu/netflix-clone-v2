import type { SignupRequestType } from '@/lib/network/types/account';
import type { NextPageWithLayout } from '@/pages/_app';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { Trans, useTranslation } from 'next-i18next';
import { useForm } from 'react-hook-form';
import SignupLayout from '@/components/layout/SignupLayout';
import LightCheckbox from '@/components/ui/Form/LightCheckbox';
import LightTextInput from '@/components/ui/Form/LightTextInput';
import useRHFValidErrorHelper from '@/components/ui/Form/hooks/useRHFValidErrorHelper';
import { SignupApi } from '@/lib/network/account/SignupApi';
import { pattern } from '@/lib/validators';
import StepHeader from './component/StepHeader';

const loadedEmail = typeof window === 'undefined' ? '' : sessionStorage.getItem('sign-tryed-email')

const RegformPage: NextPageWithLayout = () => {
  const router = useRouter()
  const { t } = useTranslation(['common', 'page-signup'])
  const { register, handleSubmit, formState } = useForm<SignupRequestType>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: {
      email: loadedEmail || '',
      password: '',
      policy: false,
      specialOffer: false
    }
  })

  const { mutate } = useMutation({
    mutationFn: SignupApi,
    onSuccess(data) {
      if (data.result) {
        router.push('/signin')
      }
    }
  })
  async function submitAction(obj: SignupRequestType) {
    mutate(obj)
  }
  return <form onSubmit={handleSubmit(submitAction)}>
    <StepHeader title={t('page-signup:regform.title')} step={2} />
    <LightTextInput
      {...register('email', {
        pattern: {
          value: pattern.email,
          message: t('common:form.email.error.pattern')
        },
        required: t('common:form.email.error.required')
      })}
      {...useRHFValidErrorHelper(
        formState.errors.email?.message,
        formState.touchedFields.email
      )}
    />
    <LightTextInput
      {...register('password', {
        pattern: {
          value: pattern.password,
          message: t('common:form.email.error.pattern')
        },
        required: t('common:form.email.error.required')
      })}
      type="password"
      {...useRHFValidErrorHelper(
        formState.errors.password?.message,
        formState.touchedFields.password
      )}
    />
    <LightCheckbox
      {...register('policy', {
        required: t('common:form.policy.error.required')
      })}
      label={
        <Trans
          t={t}
          i18nKey={'common:form.policy.label'}
          components={{
            a: <a />
          }}
        />
      }
    />
    <LightCheckbox
      {...register('specialOffer', {
      })}
      label={<Trans t={t} i18nKey={'common:form.specialOffer.label'} />}
    />
    <button type="submit">
      {t('page-signup:regform.button')}
    </button>
  </form>
}

RegformPage.getLayout = (page) => {
  return <SignupLayout>{page}</SignupLayout>
}
export default RegformPage