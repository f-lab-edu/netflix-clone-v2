import type { ChangeEvent } from 'react';
import type { DeepPartial, FieldValues, Path, UseFormRegister, UseFormSetValue, UseFormStateReturn, UseFormWatch } from 'react-hook-form';
import { Trans, useTranslation } from 'next-i18next';
import { useCallback, useMemo, useState } from 'react';
import Checkbox from '@/components/ui/Form/Checkbox';
import RHFValidErrorHelper from '@/components/ui/Form/utils/RHFValidErrorHelper';
import { CardPaymentPolicyCheckAllCss, CardPaymentPolicyInfoShellCss, CardPaymentPolicyItemListCss } from '../style/CardPaymentPolicyInfoAreaCss';

type CardPaymentPolicyInfoProps<T extends FieldValues> = {
  watch: T extends PaymentMethodCardInfo ? UseFormWatch<T> : never;
  register: T extends PaymentMethodCardInfo ? UseFormRegister<T> : never;
  formState: T extends PaymentMethodCardInfo ? UseFormStateReturn<T> : never;
  setValue: T extends PaymentMethodCardInfo ? UseFormSetValue<T> : never
};
const FirstCardPaymentPolicyInfoArea = ({ register, formState, setValue }: CardPaymentPolicyInfoProps<PaymentMethodCardInfoWithPolicy>) => {
  const { t } = useTranslation(['common'])
  const [policies, setPolicies] = useState<DeepPartial<PaymentMethodPolicies> | undefined>(formState.defaultValues)
  const isChecked = useMemo(() => {
    return policies?.billingAgree &&
      policies?.paymentGateWayPolicy &&
      policies?.privatePolicy &&
      policies?.transferInformationAbroadPolicy &&
      policies?.transferInformationToThirdPartiesPolicy
  }, [
    policies
  ])
  function toggleAllPolicied(v: boolean) {
    setValue('billingAgree', v)
    setValue('paymentGateWayPolicy', v)
    setValue('privatePolicy', v)
    setValue('transferInformationAbroadPolicy', v)
    setValue('transferInformationToThirdPartiesPolicy', v)
    setPolicies({
      billingAgree: v,
      paymentGateWayPolicy: v,
      privatePolicy: v,
      transferInformationAbroadPolicy: v,
      transferInformationToThirdPartiesPolicy: v,
    })
  }

  const generateToggleSinglePolicyChangeEvent = useCallback((name: Path<PaymentMethodPolicies>) => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      setPolicies((oldPolicies) => {
        return Object.assign({}, oldPolicies, {
          [name]: e.target.checked
        })
      })
    }
  }, [])

  const generateFieldErrorState = useCallback((name: Path<PaymentMethodPolicies>) => {
    return RHFValidErrorHelper(
      formState.errors[name]?.type === 'required',
      formState.touchedFields[name]
    )
  }, [formState])

  const CheckboxFieldGenerator = useCallback((name: Path<PaymentMethodPolicies>) => {
    return <Checkbox.Light
      label={<Trans
        t={t}
        i18nKey={`common:paymentRegistForm.${name}.label`}
        components={{
          a: <a />
        }}
      />}
      {...register(name, {
        required: true,
        onChange: generateToggleSinglePolicyChangeEvent(name)
      })}
      {...generateFieldErrorState(name)}
    />
  }, [t, generateFieldErrorState, generateToggleSinglePolicyChangeEvent, register])

  return <div css={CardPaymentPolicyInfoShellCss}>
    <div css={CardPaymentPolicyCheckAllCss}>
      <Checkbox.Light
        label={<Trans
          t={t}
          i18nKey={'common:paymentRegistForm.isAgreeAllOfPolicy.label'}
          components={{
            a: <a />
          }}
        />}
        checked={isChecked}
        onChange={(e) => {
          toggleAllPolicied(e.target.checked)
        }}
      />
    </div>
    <div css={CardPaymentPolicyItemListCss}>
      {/* TODO: if got touched, and not agreed all, them should display error message*/}
      {CheckboxFieldGenerator('privatePolicy')}
      {CheckboxFieldGenerator('transferInformationToThirdPartiesPolicy')}
      {CheckboxFieldGenerator('transferInformationAbroadPolicy')}
      {CheckboxFieldGenerator('paymentGateWayPolicy')}
      {CheckboxFieldGenerator('billingAgree')}
    </div>
  </div>
}
export default FirstCardPaymentPolicyInfoArea