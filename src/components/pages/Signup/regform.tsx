import type { SignupRequestType } from '@/lib/network/types/account';
import type { NextPageWithLayout } from '@/pages/_app';
import { useRouter } from 'next/router';
import { Trans, useTranslation } from 'next-i18next';
import { useForm } from 'react-hook-form';
import SignupLayout from '@/components/layout/SignupLayout';
import Checkbox from '@/components/ui/Form/Checkbox';
import TextInput from '@/components/ui/Form/TextInput';
import RHFValidErrorHelper from '@/components/ui/Form/utils/RHFValidErrorHelper';
import PageInOutAnimate from '@/components/ui/animation/PageInOutAnimate';
import useSignupMutation from '@/hooks/mutation/account/useSignupMutation';
import { pattern } from '@/lib/validators';
import StepHeader from './component/StepHeader';
import { SignupRegformContainerCss, SignupRegformDescCss, SignupRegformInputAreaCss, SignupRegformShellCss, SignupRegformStepDisplayCss, SignupRegformSubmitCss } from './styles/SignupRegformStyle';

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

  const { mutate } = useSignupMutation({
    onSuccess(data) {
      if (data.result) {
        router.push('/signin')
      }
    }
  })
  async function submitAction(obj: SignupRequestType) {
    mutate(obj)
  }
  return <PageInOutAnimate css={SignupRegformContainerCss}>
    <form onSubmit={handleSubmit(submitAction)} css={SignupRegformShellCss}>
      <StepHeader title={t('page-signup:regform.title')} step={2} css={SignupRegformStepDisplayCss} />
      <div css={SignupRegformDescCss}>
        <p>
          {t('page-signup:regform.desc1')}
        </p>
        <p>
          {t('page-signup:regform.desc2')}
        </p>
      </div>
      <div css={SignupRegformInputAreaCss}>
        <TextInput.Light
          label={t('common:form.email.placeholder')}
          {...register('email', {
            pattern: {
              value: pattern.email,
              message: t('common:form.email.error.pattern')
            },
            required: t('common:form.email.error.required')
          })}
          {...RHFValidErrorHelper(
            formState.errors.email?.message,
            formState.touchedFields.email
          )}
        />
        <TextInput.Light
          label={t('common:form.password.placeholder')}
          {...register('password', {
            pattern: {
              value: pattern.password,
              message: t('common:form.password.error.pattern')
            },
            required: t('common:form.password.error.required')
          })}
          type="password"
          {...RHFValidErrorHelper(
            formState.errors.password?.message,
            formState.touchedFields.password
          )}
        />
        <Checkbox.Light
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
          {...RHFValidErrorHelper(
            formState.errors.policy?.message,
            formState.touchedFields.policy
          )}
        />
        <Checkbox.Light
          {...register('specialOffer')}
          label={<Trans t={t} i18nKey={'common:form.specialOffer.label'} />}
        />
      </div>
      <button type="submit" css={SignupRegformSubmitCss}>
        <span>{t('page-signup:regform.button')}</span>
      </button>
    </form>
  </PageInOutAnimate>

}

RegformPage.getLayout = (page) => {
  return <SignupLayout withShell>{page}</SignupLayout>
}
export default RegformPage
