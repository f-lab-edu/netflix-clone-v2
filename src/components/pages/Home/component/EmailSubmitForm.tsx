import { useTranslation } from 'next-i18next';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import TextInput from '@/components/ui/Form/TextInput';
import { HeroDescrpition2 } from '../styles/HeroSection';

interface FormData {
  email: string
}

export default function EmailSubmitForm() {
  const { t } = useTranslation(['common', 'page-home'])
  const { handleSubmit, register, formState } = useForm<FormData>({
    reValidateMode: 'onBlur'
  })

  const emailErrorMessage = useMemo(() => {
    return formState.errors.email?.message
  }, [formState])

  function submitAction(obj: FormData) {
    console.log(obj)
  }

  return <form onSubmit={handleSubmit(submitAction)}>
    <HeroDescrpition2>
      {t('page-home:section1.desc2')}
    </HeroDescrpition2>
    <div>
      <TextInput
        label={t('page-home:emailForm.label')}
        {...register('email', {
          required: t('page-home:emailForm.error'),
        })}
        errorMessage={emailErrorMessage}
      ></TextInput>
      <button type="submit">Submit</button>
    </div>
  </form>
}