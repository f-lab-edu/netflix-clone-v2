import type { SigninResponseType, SigninWithCodeResponseType } from '@/lib/network/types/account';
import type { NextPageWithLayout } from '@/pages/_app';
import { useMutation } from '@tanstack/react-query';
import { useAtom } from 'jotai';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import BaseLayout from '@/components/layout/BaseLayout';
import { HeaderLinkStyleCss } from '@/components/layout/styles/SignupLayoutStyle';
import ConditionalRender from '@/components/ui/utils/ConditionalRender';
import { SigninApi } from '@/lib/network/account/SigninApi';
import { SigninWithLoginCodeApi } from '@/lib/network/account/SigninWithLoginCodeApi';
import { SIGNIN_EMAIL_OR_PHONE } from '@/lib/network/utils';
import { accessTokenAtom, refreshTokenAtom } from '@/state/Token';
import NetflixLogo from '@assets/netflix/top-logo.svg'
import ButtonGroup from './component/ButtonGroup';
import LoginCodeForm from './component/LoginCodeForm';
import PasswordForm from './component/PasswordForm';
import { backgroundCss, formAreaCss, formGridCss, formPositionAreaCss, formTitleCss, headerAreaCss, signinPageBaseCss } from './styles/signinPageStyle';

const SigninPage: NextPageWithLayout = () => {
  const router = useRouter()
  const [isLoginCodeForm, setIsLoginCodeForm] = useState(false)
  const { t } = useTranslation(['common', 'page-signin'])
  const [, setAccessToken] = useAtom(accessTokenAtom)
  const [, setRefreshToken] = useAtom(refreshTokenAtom)
  const { mutate: signinMutate } = useMutation({
    mutationFn: SigninApi,
    onSuccess: loginSuccessAction
  })

  function loginSuccessAction(data: SigninResponseType) {
    setAccessToken(data.accessToken)
    setRefreshToken(data.refreshToken)
    router.push('/selectProfile')
  }

  const { mutate: signinWithLoginCodeMutate } = useMutation({
    mutationFn: SigninWithLoginCodeApi,
    onMutate(variables) {
      sessionStorage.setItem(SIGNIN_EMAIL_OR_PHONE, variables.emailOrPhone)
      return () => {
        sessionStorage.removeItem(SIGNIN_EMAIL_OR_PHONE)
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

  return <div css={signinPageBaseCss}>
    <div css={backgroundCss}>
      <Image width={2000} height={1125} src="/signin/signin-bg.jpg" alt="bg" />
    </div>
    <header css={headerAreaCss}>
      <Link css={HeaderLinkStyleCss} href="/">
        <NetflixLogo />
      </Link>
    </header>
    <div css={formPositionAreaCss}>
      <div css={formAreaCss}>
        <header>
          <h1 css={formTitleCss}>
            {t('page-signin:title')}
          </h1>
        </header>
        <ConditionalRender.Boolean
          condition={isLoginCodeForm}
          render={{
            true: <LoginCodeForm
              css={formGridCss}
              mutate={signinWithLoginCodeMutate}
              buttonArea={
                <>
                  <p>{t('page-signin:loginCodeDesc')}</p>
                  <ButtonGroup
                    submitText={t('page-signin:sendLoginCode')}
                    or={t('page-signin:or')}
                    buttonText={t('page-signin:usePasswordBtn')}
                    onButtonClick={() => {
                      setIsLoginCodeForm(false)
                    }}
                  />
                </>
              }
            />,
            false: <PasswordForm
              css={formGridCss}
              mutate={signinMutate}
              buttonArea={<ButtonGroup
                submitText={t('page-signin:loginBtn')}
                or={t('page-signin:or')}
                buttonText={t('page-signin:useLogincodeBtn')}
                onButtonClick={() => {
                  setIsLoginCodeForm(true)
                }}

              />}
            />
          }}
        />
      </div>
    </div>

  </div>
}
SigninPage.getLayout = (page) => {
  return <BaseLayout >{page}</BaseLayout>
}

export default SigninPage