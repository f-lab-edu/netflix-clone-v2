import type { RegistPaymentMethodRequestType, RegistPaymentMethodResponseType } from '@/lib/network/types/payment';
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { RegistPaymentApi } from '@/lib/network/payment/RegistPaymentApi'
import { MY_INFO_QUERY_KEY } from '@/lib/react-query/keys/account'
import { REGIST_PAYMENT_MUTATION_KEY } from '@/lib/react-query/keys/payment'

export default function useRegistPaymentMutation(
  options?: CustomMutationOptions<RegistPaymentMethodRequestType, RegistPaymentMethodResponseType>
) {
  const queryClient = useQueryClient()
  return useMutation({
    ...options,
    mutationFn: RegistPaymentApi,
    mutationKey: REGIST_PAYMENT_MUTATION_KEY,
    onSuccess(...args) {
      queryClient.invalidateQueries({
        queryKey: MY_INFO_QUERY_KEY
      })
      if (options?.onSuccess) options?.onSuccess(...args)
    }
  })
}