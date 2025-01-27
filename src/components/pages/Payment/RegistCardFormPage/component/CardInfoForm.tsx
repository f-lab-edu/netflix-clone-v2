import { FormProvider, useForm } from 'react-hook-form'
import RHFCardInfoArea from './RHFCardInfoArea'

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
  const rhf = useForm<PaymentMethodCardInfo>({
    mode: 'all',
    defaultValues: CardInfoDefaultValue
  })
  const submitAction = () => {

  }
  return <FormProvider {...rhf}>
    <form onSubmit={rhf.handleSubmit(submitAction)}>
      <RHFCardInfoArea />
      <button>{submitBtnText}</button>
    </form>
  </FormProvider>

}

export default CardInfoForm