import { useTranslation } from 'next-i18next';
import { useFormContext } from 'react-hook-form';
import TextInput from '@/components/ui/Form/TextInput';
import RHFValidErrorHelper from '@/components/ui/Form/utils/RHFValidErrorHelper';
import useBirthDateChange from '@/hooks/InputFilter/useBirthDateChange';
import { ExpireDateTextFilter, CardNumberTextFilter } from '@/lib/InputFilter';
import validators from '@/lib/validators';
import { CardInfoAreaShellCss } from '../style/RHFCardInfoAreaCss';

export default function RHFCardInfoArea() {
  const { register, formState } = useFormContext<PaymentMethodCardInfo>()
  const { t } = useTranslation(['common', 'page-payment'])
  const onBirthDateChange = useBirthDateChange()
  return <div css={CardInfoAreaShellCss}>
    <TextInput.Light
      label={t('common:paymentRegistForm.cardNumber.label')}
      {...register('cardNumber', {
        validate: (v) => {
          return validators.cardNumber(v) || t('common:paymentRegistForm.cardNumber.error.validate')
        },
        required: t('common:paymentRegistForm.cardNumber.error.required'),
        onChange: (e) => {
          e.target.value = CardNumberTextFilter(e.target.value)
        }
      })}
      {...RHFValidErrorHelper(
        formState.errors.cardNumber?.message,
        formState.touchedFields.cardNumber
      )}
    />
    <TextInput.Light
      label={t('common:paymentRegistForm.cardExpirationDate.label')}
      placeholder={t('common:paymentRegistForm.cardExpirationDate.placeholder')}
      {...register('expiryDate', {
        validate: (v) => {
          return validators.cardExpireDate(v) || t('common:paymentRegistForm.cardExpirationDate.error.validate')
        },
        required: t('common:paymentRegistForm.cardExpirationDate.error.required'),
        onChange: (e) => {
          e.target.value = ExpireDateTextFilter(e.target.value)
        }
      })}
      {...RHFValidErrorHelper(
        formState.errors.expiryDate?.message,
        formState.touchedFields.expiryDate
      )}
    />
    <TextInput.Light
      label={t('common:paymentRegistForm.cardUserName.label')}
      {...register('cardHolderName', {
        validate: (v) => {
          return validators.cardHolderName(v) || t('common:paymentRegistForm.cardUserName.error.validate')
        },
        required: t('common:paymentRegistForm.cardUserName.error.required')
      })}
      {...RHFValidErrorHelper(
        formState.errors.cardHolderName?.message,
        formState.touchedFields.cardHolderName
      )}
    />
    <TextInput.Light
      label={t('common:paymentRegistForm.cardUserBirthDate.label')}
      placeholder={t('common:paymentRegistForm.cardUserBirthDate.placeholder')}
      {...register('dateOfBirth', {
        validate: (v) => {
          return validators.birthDateType(v) && validators.checkBirthDateRange(v) || t('common:paymentRegistForm.cardUserBirthDate.error.validate')
        },
        required: t('common:paymentRegistForm.cardUserBirthDate.error.required'),
        onChange: onBirthDateChange
      })}
      {...RHFValidErrorHelper(
        formState.errors.dateOfBirth?.message,
        formState.touchedFields.dateOfBirth
      )}
    />
  </div>
}