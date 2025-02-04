import type { PaymentMethodCardInfoWithPolicy } from './CardInfoFormWithPolicys';
import type { ChangeEvent } from 'react';
import type { Path } from 'react-hook-form';
import { Trans, useTranslation } from 'next-i18next';
import { useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import Checkbox from '@/components/ui/Form/Checkbox';
import RHFValidErrorHelper from '@/components/ui/Form/utils/RHFValidErrorHelper';
import useAllCheckedValue from '../hooks/useAllCheckedValue';
import useSelectedMembershipOnSteps from '../hooks/useSelectedMembershipOnSteps';
import { CardPaymentPolicyCheckAllCss, CardPaymentPolicyInfoShellCss, CardPaymentPolicyItemListCss } from '../style/CardPaymentPolicyInfoAreaCss';

const RHFFirstCardPaymentPolicyInfoArea = () => {
  const selectedMembershipOnSteps = useSelectedMembershipOnSteps()
  const { formState, setValue, register } = useFormContext<PaymentMethodCardInfoWithPolicy>()
  const { t, i18n } = useTranslation(['common'])
  const { isCheckedAll, onChangeAll, onChangeSingle } = useAllCheckedValue(
    formState.defaultValues,
    [
      'billingAgree',
      'paymentGateWayPolicy',
      'privatePolicy',
      'transferInformationAbroadPolicy',
      'transferInformationToThirdPartiesPolicy'
    ]
  )

  function toggleAllPolicied(v: boolean) {
    setValue('billingAgree', v)
    setValue('paymentGateWayPolicy', v)
    setValue('privatePolicy', v)
    setValue('transferInformationAbroadPolicy', v)
    setValue('transferInformationToThirdPartiesPolicy', v)
    onChangeAll(v)
  }

  const generateToggleSinglePolicyChangeEvent = useCallback((name: Path<PaymentMethodPolicies>) => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      onChangeSingle(name, e.target.checked)
    }
  }, [onChangeSingle])

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
        values={{
          price: i18n.format(selectedMembershipOnSteps?.price, 'krwCurrency', i18n.language)
        }}
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
  }, [t, generateFieldErrorState, generateToggleSinglePolicyChangeEvent, register, i18n, selectedMembershipOnSteps])

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
        checked={isCheckedAll}
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
export default RHFFirstCardPaymentPolicyInfoArea