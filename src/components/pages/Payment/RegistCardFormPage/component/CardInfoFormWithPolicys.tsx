import { useForm } from 'react-hook-form'
import useRegistPaymentMutation from '../hooks/useRegistPaymentMutation'
import CardInfoArea from './CardInfoArea'
import { CardInfoDefaultValue } from './CardInfoForm'
import FirstCardPaymentPolicyInfoArea from './FirstCardPaymentPolicyInfoArea'

interface CardInfoFormWithPolicysProps {
  submitBtnText: string
}

export type PaymentMethodCardInfoWithPolicy = PaymentMethodCardInfo & PaymentMethodPolicies

const CardInfoFormWithPolicys = ({ submitBtnText }: CardInfoFormWithPolicysProps) => {
  const { handleSubmit, ...form } = useForm<PaymentMethodCardInfoWithPolicy>({
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
  return <form onSubmit={handleSubmit(cardSubmitAction)}>
    <CardInfoArea<PaymentMethodCardInfoWithPolicy> {...form}></CardInfoArea>
    <FirstCardPaymentPolicyInfoArea<PaymentMethodCardInfoWithPolicy> {...form} />
    <button>{submitBtnText}</button>
  </form>
}
export default CardInfoFormWithPolicys