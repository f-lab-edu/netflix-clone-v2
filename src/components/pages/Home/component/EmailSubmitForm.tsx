import type { EmailCheckResponseType } from '@/lib/network/types/account';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import DarkTextInput from '@/components/ui/Form/DarkTextInput';
import { EmailCheck } from '@/lib/network/account/EmailCheck';
import { pattern } from '@/lib/validators';
import { EmailFormRowLayoutCss, EmailFormSubmitBtnCss } from '../styles/EmailSubmitFormCss';
import { HeroDescrpition2 } from '../styles/HeroSection';

interface FormData {
  email: string
}

export default function EmailSubmitForm() {
  const { t } = useTranslation(['common', 'page-home'])
  const router = useRouter()
  const { handleSubmit, register, formState, getFieldState } = useForm<FormData>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    shouldUseNativeValidation: false,
  })

  const { invalid, error, isTouched } = getFieldState('email', formState)
  const [email, setEmail] = useState('')
  const { refetch, data } = useQuery({
    queryKey: ['emailCheck', email],
    enabled: false,
    queryFn: async ({ queryKey }): Promise<EmailCheckResponseType> => {
      const result = await EmailCheck(queryKey[1])
      return result
    },

  })
  async function submitAction(obj: FormData) {
    sessionStorage.setItem('sign-tryed-email', obj.email)
    setEmail(obj.email)
    await refetch()
    if (data?.checkResult) {
      router.push('/signin')
    } else {
      router.push('/signup')
    }
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
        {t('page-home:emailForm.button')}
      </button>
    </div>
  </form>
}