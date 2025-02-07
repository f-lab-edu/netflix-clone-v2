import type { SignupRequestType, SignupResponseType } from '@/lib/network/types/account';
import { useMutation } from '@tanstack/react-query';
import { SignupApi } from '@/lib/network/account/SignupApi';

export default function useSignupMutation(
  options: CustomMutationOptions<SignupRequestType, SignupResponseType>
) {
  return useMutation({
    mutationFn: SignupApi,
    ...options
  })
}