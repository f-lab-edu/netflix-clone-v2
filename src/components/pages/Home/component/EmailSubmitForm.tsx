import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useForm } from 'react-hook-form';
import TextInput from '@/components/ui/Form/TextInput';
import ConditionalRender from '@/components/utils/ConditionalRender';
import useJWTs from '@/hooks/account/useJWTs';
import useEmailCheckMutation from '@/hooks/mutation/account/useEmailCheckMutation';
import { pattern } from '@/lib/validators';
import { EmailFormFinishSignupBtnCss, EmailFormRowLayoutCss, EmailFormSubmitBtnCss } from '../styles/EmailSubmitFormCss';
import { HeroDescrpition2 } from '../styles/HeroSection';

interface FormData {
  email: string
}

export default function EmailSubmitForm() {
  const { t } = useTranslation(['common', 'page-home'])
  const router = useRouter()
  const { handleSubmit, register, getFieldState } = useForm<FormData>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    shouldUseNativeValidation: false,
  })

  const { hasLogin } = useJWTs()

  const { invalid, error, isTouched } = getFieldState('email')
  const { mutate: emailCheckMutate, isPending } = useEmailCheckMutation({
    onSuccess(data) {
      if (data.checkResult) {
        router.push('/signin')
      } else {
        router.push('/signup')
      }
    }
  })
  async function submitAction(obj: FormData) {
    sessionStorage.setItem('sign-tryed-email', obj.email)
    emailCheckMutate(obj.email)
  }
  function gotoRegistMembershipWithPaymentMethod() {
    router.push('/signup')
  }
  return <form onSubmit={handleSubmit(submitAction)}>
    <HeroDescrpition2>
      {t('page-home:section1.desc2')}
    </HeroDescrpition2>
    <div css={EmailFormRowLayoutCss}>
      <ConditionalRender.Boolean
        condition={hasLogin}
        render={{
          true: <button
            onClick={gotoRegistMembershipWithPaymentMethod}
            css={EmailFormFinishSignupBtnCss}
          >
            {t('page-home:emailForm.finishRegist')}
          </button>,
          false: <>
            <TextInput.Dark
              isValid={isTouched && !invalid}
              error={error?.message}
              label={t('page-home:emailForm.label')}
              {...register('email', {
                required: t('form.email.error.required'),
                pattern: {
                  value: pattern.email,
                  message: t('common:form.email.error.pattern')
                }
              })}
            />
            <button type="submit" css={EmailFormSubmitBtnCss}>
              {/* TODO: add spinner */}
              {isPending ? <div></div> : t('page-home:emailForm.button')}
            </button>
          </>
        }}
      />
    </div>
  </form>
}