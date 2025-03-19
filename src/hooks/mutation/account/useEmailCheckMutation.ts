import type { EmailCheckResponseType } from '@/lib/network/types/account';
import { useMutation } from '@tanstack/react-query';
import { EmailCheckApi } from '@/lib/network/account/EmailCheckApi';
import { EMAIL_CHECK_MUTATION_KEY } from '@/lib/react-query/keys/account';

export default function useEmailCheckMutation(
  options?: CustomMutationOptions<string, EmailCheckResponseType>
) {
  return useMutation({
    mutationKey: EMAIL_CHECK_MUTATION_KEY,
    mutationFn: EmailCheckApi,
    ...options
  })
}
