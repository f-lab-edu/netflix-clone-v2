import { useForm } from 'react-hook-form'
import CardInfoArea from './CardInfoArea'
import { CardInfoDefaultValue } from './CardInfoForm'
import FirstCardPaymentPolicyInfoArea from './FirstCardPaymentPolicyInfoArea'

const CardInfoFormWithPolicys = () => {
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

  </form>
}
export default CardInfoFormWithPolicys