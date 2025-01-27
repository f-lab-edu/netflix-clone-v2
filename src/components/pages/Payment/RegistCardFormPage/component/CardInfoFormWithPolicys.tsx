import { FormProvider, useForm } from 'react-hook-form'
import { CardInfoDefaultValue } from './CardInfoForm'
import RHFCardInfoArea from './RHFCardInfoArea'
import RHFFirstCardPaymentPolicyInfoArea from './RHFFirstCardPaymentPolicyInfoArea'

interface CardInfoFormWithPolicysProps {
  submitBtnText: string
}

const CardInfoFormWithPolicys = ({ submitBtnText }: CardInfoFormWithPolicysProps) => {
  const rhf = useForm<PaymentMethodCardInfoWithPolicy>({
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
  return <FormProvider {...rhf}>
    <form onSubmit={rhf.handleSubmit(cardSubmitAction)}>
      <RHFCardInfoArea />
      <RHFFirstCardPaymentPolicyInfoArea />
      <button>{submitBtnText}</button>
    </form>
  </FormProvider>
}
export default CardInfoFormWithPolicys