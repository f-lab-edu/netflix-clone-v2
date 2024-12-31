import { useTranslation } from 'next-i18next';
import { useForm } from 'react-hook-form';
import TextInput from '@/components/ui/Form/TextInput';
import useValidator from '@/components/ui/Form/hooks/useValidator';
import { HeroDescrpition2 } from '../styles/HeroSection';
import { EmailFormRowLayoutCss, EmailFormSubmitBtnCss } from './styles/EmailSubmitFormCss';

interface FormData {
  email: string
}

export default function EmailSubmitForm() {
  const { t } = useTranslation(['common', 'page-home'])
  const validator = useValidator()
  const { handleSubmit, register, formState } = useForm<FormData>({
    reValidateMode: 'onBlur'
  })

  function submitAction(obj: FormData) {
    console.log(obj)
  }
  return <form onSubmit={handleSubmit(submitAction)}>
    <HeroDescrpition2>
      {t('page-home:section1.desc2')}
    </HeroDescrpition2>
    <div css={EmailFormRowLayoutCss}>
      <TextInput
        inputProps={{
          label: t('page-home:emailForm.label'),
          errorMessage: formState.errors.email?.message,
          ...register('email', {
            required: t('form.email.error.required'),
            validate: {
              emailType: validator.emailTypeCheck
            }
          })
        }}
      ></TextInput>
      <button type="submit" css={EmailFormSubmitBtnCss}>
        {t('page-home:emailForm.button')}
      </button>
    </div>
  </form>
}