import { useMutation } from '@tanstack/react-query'
import { RegistPaymentApi } from '@/lib/network/payment/RegistPaymentApi'

export default function useRegistPaymentMutation() {
  const { mutate: RegistPaymentMutation } = useMutation({
    mutationFn: RegistPaymentApi
  })
  return { RegistPaymentMutation }
}