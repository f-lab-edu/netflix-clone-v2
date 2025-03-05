import type { ReactNode } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import ConditionalRender from '@/components/utils/ConditionalRender';
import NetflixLogo from '@assets/netflix/top-logo.svg'
import SignInOutBtn from '../../ui/Button/SignInOutBtn';
import BaseLayout from '../BaseLayout'
import { BodyContentShellCss, BodyLayoutCss, FooterContentShellCss, FooterLayoutCss, HeaderBorderCss, HeaderDefaultStyleCss, HeaderLinkStyleCss, HeaderLoginLinkStyleCss } from '../styles/SignupLayoutStyle';
interface SignupLayoutProps {
  isDark?: boolean
  children?: ReactNode
  withShell?: boolean
}

export default function SignupLayout({ isDark, children, withShell }: SignupLayoutProps) {
  const { t } = useTranslation(['common'])
  return <BaseLayout.Light>
    <header css={[isDark ? {} : HeaderBorderCss, HeaderDefaultStyleCss]}>
      <Link css={HeaderLinkStyleCss} href="/">
        <NetflixLogo />
      </Link>
      <SignInOutBtn
        css={HeaderLoginLinkStyleCss}
        signInText={t('head.signin')}
        signOutText={t('head.signout')}
      />
    </header>
    {/* TODO: need to add animation https://dev.to/joseph42a/nextjs-page-transition-with-framer-motion-33dg */}
    <main css={BodyLayoutCss}>
      <ConditionalRender.Boolean
        condition={withShell || false}
        render={{
          true: <div css={BodyContentShellCss}>{children}</div>,
          false: children
        }}
      />
    </main>
    <footer css={FooterLayoutCss}>
      <div css={FooterContentShellCss}>
        {/* TODO: add footer contents */}
      </div>
    </footer>
  </BaseLayout.Light>
}