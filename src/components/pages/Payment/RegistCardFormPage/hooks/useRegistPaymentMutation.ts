import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MY_INFO_QUERY_KEY } from '@/hooks/Query/keys/account'
import { RegistPaymentApi } from '@/lib/network/payment/RegistPaymentApi'

export default function useRegistPaymentMutation() {
  const queryClient = useQueryClient()
  const { mutate: RegistPaymentMutation } = useMutation({
    mutationFn: RegistPaymentApi,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: MY_INFO_QUERY_KEY
      })
    }
  })
  return { RegistPaymentMutation }
}