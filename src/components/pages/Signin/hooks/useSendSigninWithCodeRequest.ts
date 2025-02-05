import type { SigninWithCodeResponseType } from '@/lib/network/types/account';
import { useAtom } from 'jotai'
import { useRouter } from 'next/router';
import useSigninWithCodeMutation from '@/hooks/mutation/account/useSigninWithCodeMutation';
import { signinEmailOrPhoneAtom } from '@/state/Account'

export default function useSendSigninWithCodeRequest() {
  const router = useRouter()
  const [, setSigninEmailOrPhone] = useAtom(signinEmailOrPhoneAtom)
  const { mutate: signinWithLoginCodeMutate } = useSigninWithCodeMutation({
    onMutate(variables) {
      setSigninEmailOrPhone(variables.emailOrPhone)
      return () => {
        setSigninEmailOrPhone('')
      }
    },
    onSuccess: loginWithCodeAction,
    onError(_error, _variables, context) {
      if (context) context()
    }
  })
  function loginWithCodeAction(data: SigninWithCodeResponseType) {
    if (data.result) {
      router.push('/signinWithLoginCode')
    }
  }
  return {
    signinWithLoginCodeMutate
  }
}