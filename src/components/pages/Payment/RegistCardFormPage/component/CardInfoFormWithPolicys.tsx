import { FormProvider, useForm } from 'react-hook-form'
import ClientOnly from '@/components/ui/utils/ClientOnly'
import useRegistPaymentMutation from '../hooks/useRegistPaymentMutation'
import { CardInfoDefaultValue } from './CardInfoForm'
import ChoosenPlanTier from './ChoosenPlanTier'
import RHFCardInfoArea from './RHFCardInfoArea'
import RHFFirstCardPaymentPolicyInfoArea from './RHFFirstCardPaymentPolicyInfoArea'

interface CardInfoFormWithPolicysProps {
  submitBtnText: string
}

export type PaymentMethodCardInfoWithPolicy = PaymentMethodCardInfo & PaymentMethodPolicies

const CardInfoFormWithPolicys = ({ submitBtnText }: CardInfoFormWithPolicysProps) => {
  const rhf = useForm<PaymentMethodCardInfoWithPolicy>({
    mode: 'onBlur',
    defaultValues: {
      ...CardInfoDefaultValue,
      billingAgree: false,
      paymentGateWayPolicy: false,
      privatePolicy: false,
      transferInformationAbroadPolicy: false,
      transferInformationToThirdPartiesPolicy: false
    }
  })

  const { RegistPaymentMutation } = useRegistPaymentMutation()
  const cardSubmitAction = (obj: PaymentMethodCardInfoWithPolicy) => {
    const { billingAgree,
      paymentGateWayPolicy,
      privatePolicy,
      transferInformationAbroadPolicy,
      transferInformationToThirdPartiesPolicy, ...cardObj
    } = obj
    RegistPaymentMutation({
      paymentMethod: {
        type: 'card',
        card: cardObj
      },
      policies: {
        billingAgree,
        paymentGateWayPolicy,
        privatePolicy,
        transferInformationAbroadPolicy,
        transferInformationToThirdPartiesPolicy
      }
    })
  }
  return <FormProvider {...rhf}>
    <form onSubmit={rhf.handleSubmit(cardSubmitAction)}>
      <RHFCardInfoArea />
      <ClientOnly>
        <ChoosenPlanTier />
      </ClientOnly>
      <RHFFirstCardPaymentPolicyInfoArea />
      <button>{submitBtnText}</button>
    </form>
  </FormProvider>
}
export default CardInfoFormWithPolicys