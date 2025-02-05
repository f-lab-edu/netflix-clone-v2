import type { SigninResponseType } from '@/lib/network/types/account';
import type { ErrorResponse } from '@/lib/network/types/error';
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useAtom } from 'jotai'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { MY_INFO_QUERY_KEY } from '@/hooks/Query/keys/account';
import useGetSigninAccountInfo from '@/hooks/Query/useGetLoginAccountInfo';
import { SigninApi } from '@/lib/network/account/SigninApi'
import { ErrorCode } from '@/mocks/middleware/ErrorHandler';
import { currentProfileAtom } from '@/state/Profile';
import { accessTokenAtom, refreshTokenAtom } from '@/state/Token'

export default function useSigninWIthPasswordMutate() {
  const router = useRouter()
  const queryClient = useQueryClient()
  const [accountInfoEnabled, setAccountInfoEnabled] = useState(false)
  const { data: accountInfo } = useGetSigninAccountInfo({ enabled: accountInfoEnabled })
  const [, setCurrentProfile] = useAtom(currentProfileAtom)
  const [, setAccessToken] = useAtom(accessTokenAtom)
  const [, setRefreshToken] = useAtom(refreshTokenAtom)
  const { mutate: signinMutate } = useMutation({
    mutationFn: SigninApi,
    onSuccess: loginSuccessAction,
    onError: loginFailedAction
  })
  async function loginSuccessAction(data: SigninResponseType) {
    setAccessToken(data.accessToken)
    setRefreshToken(data.refreshToken)
    queryClient.invalidateQueries({
      queryKey: MY_INFO_QUERY_KEY,
      refetchType: 'inactive',
    })
    setAccountInfoEnabled(true)
  }
  useEffect(() => {
    if (!accountInfoEnabled) return
    if (accountInfo?.accountInfo.membership) {
      if (!accountInfo?.accountInfo.profiles?.length) {
        router.push('/firstProfile')
      } else if (accountInfo.accountInfo.profiles.length === 1) {
        if (accountInfo.accountInfo.profiles[0]) {
          setCurrentProfile(accountInfo.accountInfo.profiles[0])
        }
        router.push('/browse')
      } else {
        router.push('/selectProfile')
      }
    } else {
      router.push('/')
    }
  }, [accountInfo, accountInfoEnabled, router, setCurrentProfile])
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