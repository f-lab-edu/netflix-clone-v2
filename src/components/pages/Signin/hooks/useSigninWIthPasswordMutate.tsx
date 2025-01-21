import type { SigninResponseType } from '@/lib/network/types/account';
import type { ErrorResponse } from '@/lib/network/types/error';
import { useMutation } from '@tanstack/react-query'
import { useAtom } from 'jotai'
import { useRouter } from 'next/router';
import { SigninApi } from '@/lib/network/account/SigninApi'
import { ErrorCode } from '@/mocks/middleware/ErrorHandler';
import { accessTokenAtom, refreshTokenAtom } from '@/state/Token'

export default function useSigninWIthPasswordMutate() {
  const router = useRouter()
  const [, setAccessToken] = useAtom(accessTokenAtom)
  const [, setRefreshToken] = useAtom(refreshTokenAtom)
  const { mutate: signinMutate } = useMutation({
    mutationFn: SigninApi,
    onSuccess: loginSuccessAction,
    onError: loginFailedAction
  })
  function loginSuccessAction(data: SigninResponseType) {
    setAccessToken(data.accessToken)
    setRefreshToken(data.refreshToken)
    router.push('/')
  }
  function loginFailedAction(error: Error) {
    const errorState: ErrorResponse = JSON.parse(error.message)
    if (errorState.errorCode === ErrorCode.SIGNIN_FAILED) {
      // TODO: display error message
    }
  }
  return {
    signinMutate
  }
}