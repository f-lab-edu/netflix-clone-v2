import type { SigninRequestType } from '@/lib/network/types/account';
import type { ReactNode } from 'react';
import { useTranslation } from 'next-i18next';
import { useForm } from 'react-hook-form';
import DarkTextInput from '@/components/ui/Form/DarkTextInput';
import RHFValidErrorHelper from '@/components/ui/Form/utils/RHFValidErrorHelper';
import validators, { pattern } from '@/lib/validators';

interface PasswordFormProps {
  mutate: (_data: SigninRequestType) => void
  buttonArea: ReactNode
}
export default function PasswordForm({
  mutate,
  buttonArea,
  className
}: PasswordFormProps & CssProps) {
  const { t } = useTranslation(['common'])

  const { register, handleSubmit, formState } = useForm<SigninRequestType>({
    mode: 'onBlur'
  })
  const signinFunction = (obj: SigninRequestType) => {
    mutate(obj)
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
    <DarkTextInput
      {...register('password', {
        required: t('common:form.password.error.required'),
        pattern: {
          value: pattern.password,
          message: t('common:form.password.error.pattern')
        }
      })}
      type="password"
      {...RHFValidErrorHelper(
        formState.errors.password?.message,
        formState.touchedFields.password
      )}
      placeholder={t('common:form.password.placeholder')}
    />
    {buttonArea}
  </form>
}