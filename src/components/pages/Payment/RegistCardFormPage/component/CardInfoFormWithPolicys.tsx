import { useForm } from 'react-hook-form'
import CardInfoArea from './CardInfoArea'
import { CardInfoDefaultValue } from './CardInfoForm'

const CardInfoFormWithPolicys = () => {
  const form = useForm<PaymentMethodCardInfoWithPolicy>({
    mode: 'all',
    defaultValues: {
      ...CardInfoDefaultValue,
      billingAgree: false,
      paymentGateWayPolicy: false,
      privatePolicy: false,
      transferInformationAbroadPolicy: false,
      transferInformationToThirdPartiesPolicy: false,
    }
  })
  return <div>
    <CardInfoArea<PaymentMethodCardInfoWithPolicy> {...form}></CardInfoArea>
  </div>
}
export default CardInfoFormWithPolicys