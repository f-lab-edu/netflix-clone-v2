import { useForm } from 'react-hook-form'
import useRegistPaymentMutation from '../hooks/useRegistPaymentMutation'
import CardInfoArea from './CardInfoArea'

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
  const { handleSubmit, ...form } = useForm<PaymentMethodCardInfo>({
    mode: 'all',
    defaultValues: CardInfoDefaultValue
  })
  const { RegistPaymentMutation } = useRegistPaymentMutation()
  const submitAction = (cardObj: PaymentMethodCardInfo) => {
    RegistPaymentMutation({
      paymentMethod: {
        type: 'card',
        card: cardObj
      },
      policies: {}
    })
  }
  return <form onSubmit={handleSubmit(submitAction)}>
    <CardInfoArea {...form}></CardInfoArea>
    <button>{submitBtnText}</button>
  </form>
}

export default CardInfoForm