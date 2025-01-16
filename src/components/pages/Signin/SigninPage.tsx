import type { SigninRequestType } from '@/lib/network/types/account';
import type { NextPageWithLayout } from '@/pages/_app';
import { useMutation } from '@tanstack/react-query';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import BaseLayout from '@/components/layout/BaseLayout';
import DarkTextInput from '@/components/ui/Form/DarkTextInput';
import { SigninApi } from '@/lib/network/account/SigninApi';
import { accessTokenAtom, refreshTokenAtom } from '@/state/Token';

const SigninPage: NextPageWithLayout = () => {
  const router = useRouter()
  const { register, handleSubmit } = useForm({
    defaultValues: {
      emailOrPhone: '',
      password: ''
    }
  })
  const [, setAccessToken] = useAtom(accessTokenAtom)
  const [, setRefreshToken] = useAtom(refreshTokenAtom)
  const { mutate } = useMutation({
    mutationFn: SigninApi,
    onSuccess(result) {
      setAccessToken(result.accessToken)
      setRefreshToken(result.refreshToken)
      router.push('/')
    }
  })
  const signinFunction = (obj: SigninRequestType) => {
    mutate(obj)
  }
  return <div>
    <form onSubmit={handleSubmit(signinFunction)}>
      <h1>
        로그인
      </h1>
      <DarkTextInput
        {...register('emailOrPhone', {
          required: true
        })}
        placeholder='이메일 주소 또는 휴대폰 번호'
      />
      <DarkTextInput
        {...register('password', {
          required: true
        })}
        placeholder='비밀번호'
      />
      <button>
        로그인
      </button>
      <button>
        로그인 코드 사용하기
      </button>
    </form>
  </div>
}
SigninPage.getLayout = (page) => {
  return <BaseLayout >{page}</BaseLayout>
}

export default SigninPage