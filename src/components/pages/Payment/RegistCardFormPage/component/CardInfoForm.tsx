import { useForm } from 'react-hook-form'
import CardInfoArea from './CardInfoArea'

export const CardInfoDefaultValue: PaymentMethodCardInfo = {
  cardHolderName: '',
  cardNumber: '',
  dateOfBirth: '',
  expiryDate: ''
}

const CardInfoForm = () => {
  const form = useForm<PaymentMethodCardInfo>({
    mode: 'all',
    defaultValues: CardInfoDefaultValue
  })
  return <div>
    <CardInfoArea {...form}></CardInfoArea>
  </div>
}

export default CardInfoForm