import { useForm } from 'react-hook-form'
import CardInfoArea from './CardInfoArea'
import { CardInfoDefaultValue } from './CardInfoForm'
import FirstCardPaymentPolicyInfoArea from './FirstCardPaymentPolicyInfoArea'

interface CardInfoFormWithPolicysProps {
  submitBtnText: string
}

const CardInfoFormWithPolicys = ({ submitBtnText }: CardInfoFormWithPolicysProps) => {
  const { handleSubmit, ...form } = useForm<PaymentMethodCardInfoWithPolicy>({
    mode: 'onBlur',
    defaultValues: {
      ...CardInfoDefaultValue,
      isFirst: true,
      billingAgree: false,
      paymentGateWayPolicy: false,
      privatePolicy: false,
      transferInformationAbroadPolicy: false,
      transferInformationToThirdPartiesPolicy: false
    }
  })
  const cardSubmitAction = () => {

  }
  return <form onSubmit={handleSubmit(cardSubmitAction)}>
    <CardInfoArea<PaymentMethodCardInfoWithPolicy> {...form}></CardInfoArea>
    <FirstCardPaymentPolicyInfoArea {...form} />
    <button>{submitBtnText}</button>
  </form>
}
export default CardInfoFormWithPolicys