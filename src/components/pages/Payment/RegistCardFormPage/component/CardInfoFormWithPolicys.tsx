import { useRouter } from 'next/router'
import { FormProvider, useForm } from 'react-hook-form'
import useRegistPaymentMutation from '@/hooks/mutation/payment/useRegistPaymentMutation'
import { useSignupMembershipTier } from '@/state/signup/hooks'
import { CardInfoDefaultValue } from './CardInfoForm'
import ChosenPlanTier from './ChosenPlanTier'
import RHFCardInfoArea from './RHFCardInfoArea'
import RHFFirstCardPaymentPolicyInfoArea from './RHFFirstCardPaymentPolicyInfoArea'

interface CardInfoFormWithPolicysProps {
  submitBtnText: string
}

export type PaymentMethodCardInfoWithPolicy = PaymentMethodCardInfo & PaymentMethodPolicies

const CardInfoFormWithPolicys = ({ submitBtnText }: CardInfoFormWithPolicysProps) => {
  const router = useRouter()
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
  const [chosenTier] = useSignupMembershipTier()

  const { mutate: registPaymentMutate } = useRegistPaymentMutation()
  const cardSubmitAction = (obj: PaymentMethodCardInfoWithPolicy) => {
    const { billingAgree,
      paymentGateWayPolicy,
      privatePolicy,
      transferInformationAbroadPolicy,
      transferInformationToThirdPartiesPolicy, ...cardObj
    } = obj
    registPaymentMutate({
      paymentMethod: {
        type: 'card',
        card: cardObj
      },
      membershipTier: chosenTier,
      policies: {
        billingAgree,
        paymentGateWayPolicy,
        privatePolicy,
        transferInformationAbroadPolicy,
        transferInformationToThirdPartiesPolicy
      }
    }, {
      onSuccess() {
        router.push('/firstProfile')
      }
    })
  }
  return <FormProvider {...rhf}>
    <form onSubmit={rhf.handleSubmit(cardSubmitAction)}>
      <RHFCardInfoArea />
      <ChosenPlanTier />
      <RHFFirstCardPaymentPolicyInfoArea />
      <button>{submitBtnText}</button>
    </form>
  </FormProvider>
}
export default CardInfoFormWithPolicys
