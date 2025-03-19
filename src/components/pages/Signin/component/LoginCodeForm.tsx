import type { SigninWithCodeRequestType } from '@/lib/network/types/account';
import type { ReactNode } from 'react';
import { useTranslation } from 'next-i18next';
import { useForm } from 'react-hook-form';
import DarkTextInput from '@/components/ui/Form/DarkTextInput';
import RHFValidErrorHelper from '@/components/ui/Form/utils/RHFValidErrorHelper';
import validators from '@/lib/validators';
import useSendSigninWithCodeRequest from '../hooks/useSendSigninWithCodeRequest';

interface LoginCodeFormProps {
  buttonArea: ReactNode
}
export default function LoginCodeForm({
  buttonArea,
  className
}: LoginCodeFormProps & CssProps) {
  const { t } = useTranslation(['common'])
  const { signinWithLoginCodeMutate } = useSendSigninWithCodeRequest()
  const { register, handleSubmit, formState } = useForm<SigninWithCodeRequestType>({
    mode: 'onBlur',
    defaultValues: {
      emailOrPhone: ''
    }
  })
  const signinFunction = (obj: SigninWithCodeRequestType) => {
    signinWithLoginCodeMutate(obj)
  }

  return <form onSubmit={handleSubmit(signinFunction)} className={className}>
    {/* TODO: need to change type between phone and email */}
    <DarkTextInput
      {...register('emailOrPhone', {
        required: t('common:form.emailOrPhone.error.required'),
        validate: (v) => {
          if (validators.emailOrPhoneNumberType(v)) return true
          if (isNaN(Number(v))) {
            return t('common:form.emailOrPhone.error.patternEmail')
          } else {
            return t('common:form.emailOrPhone.error.validatePhone')
          }
        },
      })}
      {...RHFValidErrorHelper(
        formState.errors.emailOrPhone?.message,
        formState.touchedFields.emailOrPhone
      )}
      placeholder={t('common:form.emailOrPhone.placeholder')}
    />
    {buttonArea}
  </form>
}
