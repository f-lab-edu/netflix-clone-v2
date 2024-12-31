import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useForm } from 'react-hook-form';
import TextInput from '@/components/ui/Form/TextInput';
import useValidator from '@/components/ui/Form/hooks/useValidator';
import { EmailFormRowLayoutCss, EmailFormSubmitBtnCss } from '../styles/EmailSubmitFormCss';
import { HeroDescrpition2 } from '../styles/HeroSection';

interface FormData {
  email: string
}

export default function EmailSubmitForm() {
  const { t } = useTranslation(['common', 'page-home'])
  const router = useRouter()
  const validator = useValidator()
  const { handleSubmit, register, formState, getFieldState } = useForm<FormData>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    shouldUseNativeValidation: false,
  })

  const { invalid, error, isTouched } = getFieldState('email', formState)

  function submitAction(obj: FormData) {
    router.push(`/login?email=${obj.email}`, '/login')
  }
  return <form onSubmit={handleSubmit(submitAction)}>
    <HeroDescrpition2>
      {t('page-home:section1.desc2')}
    </HeroDescrpition2>
    <div css={EmailFormRowLayoutCss}>
      <TextInput
        {...register('email', {
          required: t('form.email.error.required'),
          validate: {
            emailType: validator.emailTypeCheck
          }
        })}
        inputLayoutProps={{
          label: t('page-home:emailForm.label'),
          isValid: isTouched && !invalid,
          errorMessage: error?.message,
        }}
      ></TextInput>
      <button type="submit" css={EmailFormSubmitBtnCss}>
        {t('page-home:emailForm.button')}
      </button>
    </div>
  </form>
}