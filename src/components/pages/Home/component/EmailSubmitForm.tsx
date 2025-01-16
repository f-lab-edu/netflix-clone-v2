import type { EmailCheckResponseType } from '@/lib/network/types/account';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
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
  const [email, setEmail] = useState('')
  const { refetch, isLoading, data } = useQuery({
    queryKey: ['emailCheck', email],
    enabled: false,
    queryFn: async ({ queryKey }): Promise<EmailCheckResponseType> => {
      const result = await EmailCheckApi(queryKey[1])
      return result
    }
  })
  async function submitAction(obj: FormData) {
    sessionStorage.setItem('sign-tryed-email', obj.email)
    setEmail(obj.email)
    refetch()

  }
  useEffect(() => {
    if (!data) return
    if (data.checkResult) {
      router.push('/signin')
    } else {
      router.push('/signup')
    }
  }, [data, router])
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
        {isLoading ? <div></div> : t('page-home:emailForm.button')}
      </button>
    </div>
  </form>
}