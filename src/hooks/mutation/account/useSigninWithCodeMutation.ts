import type { SigninWithCodeRequestType, SigninWithCodeResponseType } from '@/lib/network/types/account';
import { useMutation } from '@tanstack/react-query';
import { SigninWithLoginCodeApi } from '@/lib/network/account/SigninWithLoginCodeApi';

export default function useSigninWithCodeMutation<Context>(
  options: CustomMutationOptions<SigninWithCodeRequestType, SigninWithCodeResponseType, Context>
) {
  return useMutation({
    ...options,
    mutationFn: SigninWithLoginCodeApi
  })
}