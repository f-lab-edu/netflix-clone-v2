import { useForm } from 'react-hook-form'
import CardInfoArea from './CardInfoArea'

export const CardInfoDefaultValue: PaymentMethodCardInfo = {
  isFirst: false,
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
  const submitAction = () => {

  }
  return <form onSubmit={handleSubmit(submitAction)}>
    <CardInfoArea {...form}></CardInfoArea>
    <button>{submitBtnText}</button>
  </form>
}

export default CardInfoForm