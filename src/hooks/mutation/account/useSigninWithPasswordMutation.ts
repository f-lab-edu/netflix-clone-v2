import type { SigninRequestType, SigninResponseType } from '@/lib/network/types/account';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { SigninApi } from '@/lib/network/account/SigninApi';
import { MY_INFO_QUERY_KEY } from '@/lib/react-query/keys/account';
import { useAccessTokenAtom, useRefreshTokenAtom } from '@/state/token/hooks';

export default function useSigninWithPasswordMutation(
  options: CustomMutationOptions<SigninRequestType, SigninResponseType>
) {
  const [, setAccessToken] = useAccessTokenAtom()
  const [, setRefreshToken] = useRefreshTokenAtom()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: SigninApi,
    onSuccess(...args) {
      setAccessToken(args[0].accessToken)
      setRefreshToken(args[0].refreshToken)
      queryClient.invalidateQueries({
        queryKey: MY_INFO_QUERY_KEY,
        refetchType: 'inactive'
      })
      if (options.onSuccess) options.onSuccess(...args)
    }

  })
}
