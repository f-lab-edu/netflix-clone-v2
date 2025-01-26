import type { NextPageWithLayout } from '@/pages/_app';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useEffect } from 'react';
import BaseLayout from '@/components/layout/BaseLayout';
import SignInOutBtn from '@/components/ui/Button/SignInOutBtn';
import NetflixLogo from '@assets/netflix/top-logo.svg'
import { SignoutBgCss, SignoutContentLayoutCss, SignoutDesc1Css, SignoutDesc2Css, SignoutGotoMainBtnCss, SignoutHeaderCss, SignoutLogoCss, SignoutSignInOutBtnCss, SignoutTitleCss } from './style';

const SignoutPage: NextPageWithLayout = () => {
  const { t } = useTranslation(['common', 'page-signout'])
  const router = useRouter()
  useEffect(() => {
    const goHomeTimeout = setTimeout(() => {
      router.push('/')
    }, 30000)
    return () => {
      clearTimeout(goHomeTimeout)
    }
  })
  return <div css={SignoutBgCss}>
    <nav css={SignoutHeaderCss}>
      <Link href="/" css={SignoutLogoCss}>
        <NetflixLogo />
      </Link>
      <SignInOutBtn
        css={SignoutSignInOutBtnCss}
        signInText={t('common:head.signin')}
        signOutText={t('common:head.signout')}
      />
    </nav>
    <main css={SignoutContentLayoutCss}>
      <h1 css={SignoutTitleCss}>{t('page-signout:title')}</h1>
      <p css={SignoutDesc1Css}>{t('page-signout:desc1')}</p>
      <p css={SignoutDesc2Css}>{t('page-signout:desc2')}</p>
      <button css={SignoutGotoMainBtnCss}>{t('page-signout:btn')}</button>
    </main>
    <footer>
    </footer>
  </div>
}

SignoutPage.getLayout = (page) => {
  return <BaseLayout>{page}</BaseLayout>
}

export default SignoutPage