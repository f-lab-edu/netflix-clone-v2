import type { NextPageWithLayout } from '@/pages/_app';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import BaseLayout from '@/components/layout/BaseLayout';
import { HeaderLinkStyleCss } from '@/components/layout/styles/SignupLayoutStyle';
import DarkCheckbox from '@/components/ui/Form/DarkCheckbox';
import ConditionalRender from '@/components/ui/utils/ConditionalRender';
import NetflixLogo from '@assets/netflix/top-logo.svg'
import ButtonGroup from './component/ButtonGroup';
import LoginCodeForm from './component/LoginCodeForm';
import PasswordForm from './component/PasswordForm';
import { backgroundCss, forgotPasswordCss, formAreaCss, formGridCss, formPositionAreaCss, formTitleCss, headerAreaCss, rememberSigninInfoCss, signinPageBaseCss, signupLinkCss } from './styles/signinPageStyle';

const SigninPage: NextPageWithLayout = () => {
  const [isLoginCodeForm, setIsLoginCodeForm] = useState(false)
  const { t } = useTranslation(['common', 'page-signin'])

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
        <footer>
          <Link href="/findPassword" css={forgotPasswordCss}>
            {t('page-signin:findPassword')}
          </Link>
          <DarkCheckbox css={rememberSigninInfoCss} placeholder={t('page-signin:saveLoginInfo')} />
          <p css={signupLinkCss}>
            {t('page-signin:areYouGuest')}&nbsp;
            <Link href="/">
              {t('page-signin:gotoSignup')}
            </Link>
          </p>
        </footer>
      </div>
    </div>
  </div>
}
SigninPage.getLayout = (page) => {
  return <BaseLayout.Light >{page}</BaseLayout.Light>
}

export default SigninPage