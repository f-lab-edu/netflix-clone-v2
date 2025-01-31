import type { ReactNode } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import NetflixLogo from '@assets/netflix/top-logo.svg'
import SignInOutBtn from '../../ui/Button/SignInOutBtn';
import { theme } from '../../ui/theme';
import ConditionalRender from '../../ui/utils/ConditionalRender';
import BaseLayout from '../BaseLayout'
import { BodyContentShellCss, BodyLayoutCss, FooterContentShellCss, FooterLayoutCss, HeaderBorderCss, HeaderDefaultStyleCss, HeaderLinkStyleCss, HeaderLoginLinkStyleCss } from '../styles/SignupLayoutStyle';
interface SignupLayoutProps {
  isDark?: boolean
  children?: ReactNode
  withShell?: boolean
}

export default function SignupLayout({ isDark, children, withShell }: SignupLayoutProps) {
  const { t } = useTranslation(['common'])
  return <BaseLayout defaultColor={theme.color.grey.defaultFont}>
    {/* HEADER */}
    <div css={[isDark ? {} : HeaderBorderCss, HeaderDefaultStyleCss]}>
      <Link css={HeaderLinkStyleCss} href="/">
        <NetflixLogo />
      </Link>
      <SignInOutBtn
        css={HeaderLoginLinkStyleCss}
        signInText={t('head.signin')}
        signOutText={t('head.signout')}
      />
    </div>
    {/* BODY */}
    {/* TODO: need to add animation https://dev.to/joseph42a/nextjs-page-transition-with-framer-motion-33dg */}
    <div css={BodyLayoutCss}>
      <ConditionalRender.Boolean
        condition={withShell || false}
        render={{
          true: <div css={BodyContentShellCss}>{children}</div>,
          false: children
        }}
      />
    </div>
    {/* FOOTER */}
    <div css={FooterLayoutCss}>
      <div css={FooterContentShellCss}>
        {/* TODO: add footer contents */}
      </div>
    </div>
  </BaseLayout>
}