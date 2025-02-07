import type { SigninWithCodeResponseType } from '@/lib/network/types/account';
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/router';
import { SigninWithLoginCodeApi } from '@/lib/network/account/SigninWithLoginCodeApi'
import { useSigninEmailOrPhoneAtom } from '@/state/account/hooks';

export default function useSendSigninWithCodeRequest() {
  const router = useRouter()
  const [, setSigninEmailOrPhone] = useSigninEmailOrPhoneAtom()
  const { mutate: signinWithLoginCodeMutate } = useMutation({
    mutationFn: SigninWithLoginCodeApi,
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