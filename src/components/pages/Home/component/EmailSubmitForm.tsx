import { useTranslation } from 'next-i18next';
import { useForm } from 'react-hook-form';
import TextInput from '@/components/ui/Form/TextInput';
import { HeroDescrpition2 } from '../styles/HeroSection';
import { EmailFormRowLayoutCss, EmailFormSubmitBtnCss } from './styles/EmailSubmitFormCss';

interface FormData {
  email: string
}

export default function EmailSubmitForm() {
  const { t } = useTranslation(['common', 'page-home'])
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
            required: t('page-home:emailForm.error'),
          })
        }}
      ></TextInput>
      <button type="submit" css={EmailFormSubmitBtnCss}>
        {t('page-home:emailForm.button')}
      </button>
    </div>
  </form>
}