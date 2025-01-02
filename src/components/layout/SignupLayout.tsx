import type { ReactNode } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import NetflixLogo from '@assets/netflix/top-logo.svg'
import { theme } from '../ui/theme';
import BaseLayout from './BaseLayout'
import { BodyContentShellCss, BodyLayoutCss, FooterContentShellCss, FooterLayoutCss, HeaderBorderCss, HeaderDefaultStyleCss, HeaderLinkStyleCss, HeaderLoginLinkStyleCss, } from './styles/SignupLayoutStyle';
interface SignupLayoutProps {
  isDark?: boolean
  children?: ReactNode
}

export default function SignupLayout({ isDark, children }: SignupLayoutProps) {
  const { t } = useTranslation(['common'])
  return <BaseLayout defaultColor={theme.color.grey.defaultFont}>
    {/* HEADER */}
    <div css={[isDark ? {} : HeaderBorderCss, HeaderDefaultStyleCss]}>
      <Link css={HeaderLinkStyleCss} href="/">
        <NetflixLogo />
      </Link>
      <Link css={HeaderLoginLinkStyleCss} href="/login">
        {t('head.signin')}
      </Link>
    </div>
    {/* BODY */}
    {/* TODO: need to add animation https://dev.to/joseph42a/nextjs-page-transition-with-framer-motion-33dg */}
    <div css={BodyLayoutCss}>
      <div css={BodyContentShellCss}>
        {children}
      </div>
    </div>
    {/* FOOTER */}
    <div css={FooterLayoutCss}>
      <div css={FooterContentShellCss}>
        {/* TODO: add footer contents */}
      </div>
    </div>
  </BaseLayout>
}