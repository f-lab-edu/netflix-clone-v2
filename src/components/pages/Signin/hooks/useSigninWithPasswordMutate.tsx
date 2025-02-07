import type { ErrorResponse } from '@/lib/network/types/error';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useGetSigninAccountInfo from '@/hooks/Query/account/useGetLoginAccountInfo';
import useSigninWithPasswordMutation from '@/hooks/mutation/account/useSigninWithPasswordMutation';
import { ErrorCode } from '@/mocks/middleware/ErrorHandler';
import { useCurrentProfileAtom } from '@/state/profile/hooks';

export default function useSigninWithPasswordMutate() {
  const router = useRouter()
  const [accountInfoEnabled, setAccountInfoEnabled] = useState(false)
  const { data: accountInfo } = useGetSigninAccountInfo({ enabled: accountInfoEnabled })
  const [, setCurrentProfile] = useCurrentProfileAtom()
  const { mutate: signinMutate } = useSigninWithPasswordMutation({
    onSuccess: loginSuccessAction,
    onError: loginFailedAction
  })
  async function loginSuccessAction() {
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