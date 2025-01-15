import type { NextPageWithLayout } from '@/pages/_app';
import { useRouter } from 'next/router';
import { Trans, useTranslation } from 'next-i18next';
import { useForm } from 'react-hook-form';
import SignupLayout from '@/components/layout/SignupLayout';
import LightCheckbox from '@/components/ui/Form/LightCheckbox';
import LightTextInput from '@/components/ui/Form/LightTextInput';
import { pattern } from '@/lib/validators';
import StepHeader from './component/StepHeader';

interface FormData {
  email: string
  password: string
  policy: boolean
  specialOffer: boolean
}
const loadedEmail = typeof window === 'undefined' ? '' : sessionStorage.getItem('sign-tryed-email')

const RegformPage: NextPageWithLayout = () => {
  const { t } = useTranslation(['common', 'page-signup'])
  const router = useRouter()
  const { register, handleSubmit, getFieldState } = useForm<FormData>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: {
      email: loadedEmail || '',
      password: '',
      policy: false,
      specialOffer: false
    }
  })
  const { invalid: emailInValid, error: emailError, isTouched: emailIsTouched } = getFieldState('email')
  const { invalid: passwordInValid, error: passwordError, isTouched: passwordIsTouched } = getFieldState('password')

  function submitAction(obj: FormData) {
    // TODO: /account/signup call
    console.log(obj)
    // router.push('/signin')
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
      isValid={emailIsTouched && !emailInValid}
      error={emailError?.message}
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
      isValid={passwordIsTouched && !passwordInValid}
      error={passwordError?.message}
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