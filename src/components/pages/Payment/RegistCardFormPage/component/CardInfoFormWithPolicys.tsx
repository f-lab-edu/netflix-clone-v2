import { useAtom } from 'jotai'
import { useRouter } from 'next/router'
import { FormProvider, useForm } from 'react-hook-form'
import { signupMembershipTier } from '@/state/Signup'
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
  const [choosenTier] = useAtom(signupMembershipTier)

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
      membershipTier: choosenTier,
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
      <ChoosenPlanTier />
      <RHFFirstCardPaymentPolicyInfoArea />
      <button>{submitBtnText}</button>
    </form>
  </FormProvider>
}
export default CardInfoFormWithPolicys