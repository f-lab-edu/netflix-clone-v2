import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useForm } from 'react-hook-form';
import DarkTextInput from '@/components/ui/Form/DarkTextInput';
import { EmailCheckApi } from '@/lib/network/account/EmailCheckApi';
import { pattern } from '@/lib/validators';
import { EmailFormRowLayoutCss, EmailFormSubmitBtnCss } from '../styles/EmailSubmitFormCss';
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

  const { invalid, error, isTouched } = getFieldState('email')
  const { mutate, isPending } = useMutation({
    mutationFn: async (email: string) => {
      return await EmailCheckApi(email)
    },
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
    mutate(obj.email)
  }
  return <form onSubmit={handleSubmit(submitAction)}>
    <HeroDescrpition2>
      {t('page-home:section1.desc2')}
    </HeroDescrpition2>
    <div css={EmailFormRowLayoutCss}>
      <DarkTextInput
        isValid={isTouched && !invalid}
        error={error?.message}
        placeholder={t('page-home:emailForm.label')}
        {...register('email', {
          required: t('form.email.error.required'),
          pattern: {
            value: pattern.email,
            message: t('common:form.email.error.pattern')
          }
        })}
      ></DarkTextInput>
      <button type="submit" css={EmailFormSubmitBtnCss}>
        {/* TODO: add spinner */}
        {isPending ? <div></div> : t('page-home:emailForm.button')}
      </button>
    </div>
  </form>
}