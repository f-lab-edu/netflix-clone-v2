import type { ReactNode } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import SignInOutBtn from '@/components/ui/Button/SignInOutBtn';
import ConditionalRender from '@/components/ui/utils/ConditionalRender';
import NetflixLogo from '@assets/netflix/top-logo.svg'
import BaseLayout from '../BaseLayout';
import { BrowserLayoutFooterCss, BrowserLayoutHeaderCss, BrowserLayoutHeaderLinkCss, BrowserLayoutMainCss, BrowserLayoutShellCss } from '../styles/BrowserLayoutStyle';
import { HeaderLoginLinkStyleCss } from '../styles/SignupLayoutStyle';

interface BrowserLayoutProps {
  children: ReactNode
  hideHeader?: boolean
}

export default function BrowserLayout({
  children,
  hideHeader
}: BrowserLayoutProps) {
  const { t } = useTranslation(['common'])
  return <BaseLayout>
    <div css={BrowserLayoutShellCss}>
      <ConditionalRender.Boolean
        condition={hideHeader || false}
        render={{
          false: <header css={[BrowserLayoutHeaderCss]}>
            <Link css={BrowserLayoutHeaderLinkCss} href="/">
              <NetflixLogo />
            </Link>
            <SignInOutBtn
              css={HeaderLoginLinkStyleCss}
              signInText={t('head.signin')}
              signOutText={t('head.signout')}
            />
          </header>
        }}
      />
      <main css={BrowserLayoutMainCss}>
        {children}
      </main>
      <footer css={BrowserLayoutFooterCss}>

      </footer>
    </div>
  </BaseLayout>
}