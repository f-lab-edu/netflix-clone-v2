import { FormProvider, useForm } from 'react-hook-form'
import useRegistPaymentMutation from '@/hooks/mutation/payment/useRegistPaymentMutation'
import RHFCardInfoArea from './RHFCardInfoArea'

export const CardInfoDefaultValue: PaymentMethodCardInfo = {
  cardHolderName: '',
  cardNumber: '',
  dateOfBirth: '',
  expiryDate: ''
}
interface CardInfoFormWithPolicysProps {
  submitBtnText: string
}
const CardInfoForm = ({ submitBtnText }: CardInfoFormWithPolicysProps) => {
  const rhf = useForm<PaymentMethodCardInfo>({
    mode: 'all',
    defaultValues: CardInfoDefaultValue
  })
  const { mutate: registPaymentMutation } = useRegistPaymentMutation()
  const submitAction = (cardObj: PaymentMethodCardInfo) => {
    registPaymentMutation({
      paymentMethod: {
        type: 'card',
        card: cardObj
      },
      policies: {}
    })
  }
  return <FormProvider {...rhf}>
    <form onSubmit={rhf.handleSubmit(submitAction)}>
      <RHFCardInfoArea />
      <button>{submitBtnText}</button>
    </form>
  </FormProvider>

}

export default CardInfoForm