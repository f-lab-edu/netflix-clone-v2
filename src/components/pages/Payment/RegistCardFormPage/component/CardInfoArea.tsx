import type { FieldValues, UseFormRegister, UseFormStateReturn } from 'react-hook-form';
import { useTranslation } from 'next-i18next';
import TextInput from '@/components/ui/Form/TextInput';
import RHFValidErrorHelper from '@/components/ui/Form/utils/RHFValidErrorHelper';
import useBirthDateInputFieldOnChangeEvent from '@/hooks/InputFilter/useBirthDateInputFieldOnChangeEvent';
import { CardExpireDateInputFieldOnChangeEvent, CardNumberInputFieldOnChangeEvent, StringInputFieldOnChangeEvent } from '@/lib/InputFilter';
import validators from '@/lib/validators';
import { CardInfoAreaShellCss } from '../style/CardInfoAreaCss';

type CardInfoProps<T extends FieldValues> = {
  register: T extends PaymentMethodCardInfo ? UseFormRegister<T> : never;
  formState: T extends PaymentMethodCardInfo ? UseFormStateReturn<T> : never;
};

export default function CardInfoArea<T extends PaymentMethodCardInfo>({ register, formState }: CardInfoProps<T>) {
  const { t } = useTranslation(['common', 'page-payment'])
  const BirthDateInputFieldOnChangeEvent = useBirthDateInputFieldOnChangeEvent()
  return <div css={CardInfoAreaShellCss}>
    <TextInput.Light
      label={t('common:paymentRegistForm.cardNumber.label')}
      {...register('cardNumber', {
        validate: (v) => {
          return validators.cardNumber(v) || t('common:paymentRegistForm.cardNumber.error.validate')
        },
        required: t('common:paymentRegistForm.cardNumber.error.required'),
        onChange: CardNumberInputFieldOnChangeEvent
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
        onChange: CardExpireDateInputFieldOnChangeEvent
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
        required: t('common:paymentRegistForm.cardUserName.error.required'),
        onChange: StringInputFieldOnChangeEvent
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
        onChange: BirthDateInputFieldOnChangeEvent
      })}
      {...RHFValidErrorHelper(
        formState.errors.dateOfBirth?.message,
        formState.touchedFields.dateOfBirth
      )}
    />
  </div>
}