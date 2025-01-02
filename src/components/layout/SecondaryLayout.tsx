import type { ReactNode } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import NetflixLogo from '@assets/netflix/top-logo.svg'
import { theme } from '../ui/theme';
import BaseLayout from './BaseLayout'
import { BodyLayoutCss, FooterContentShellCss, FooterLayoutCss, HeaderBorderCss, HeaderDefaultStyleCss, HeaderLinkStyleCss, HeaderLoginLinkStyleCss, } from './styles/SecondaryLayoutStyle';
interface SecondaryLayoutProps {
  isDark?: boolean
  children?: ReactNode
}

export default function SecondaryLayout({ isDark, children }: SecondaryLayoutProps) {
  const { t } = useTranslation(['common'])
  return <BaseLayout defaultColor={theme.color.grey.defaultFont}>
    {/* HEADER */}
    <div css={[isDark ? {} : HeaderBorderCss, HeaderDefaultStyleCss]}>
      <Link css={HeaderLinkStyleCss} href="/">
        <NetflixLogo />
      </Link>
      <Link css={HeaderLoginLinkStyleCss} href="/signin">
        {t('head.signin')}
      </Link>
    </div>
    {/* BODY */}
    {/* TODO: need to add animation https://dev.to/joseph42a/nextjs-page-transition-with-framer-motion-33dg */}
    <div css={BodyLayoutCss}>
      {children}
    </div>
    {/* FOOTER */}
    <div css={FooterLayoutCss}>
      <div css={FooterContentShellCss}>
        {/* TODO: add footer contents */}
        {/* TODO: add language change select */}
      </div>
    </div>
  </BaseLayout>
}