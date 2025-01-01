import type { ReactNode } from 'react';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import RootDomProvider from '@/provider/RootDom/provider';
import { theme } from '../ui/theme';

interface BaseLayoutProps {
  children?: ReactNode,
  defaultColor?: string
}

export default function BaseLayout({ children, defaultColor }: BaseLayoutProps) {
  const { t } = useTranslation(['common'])
  return <div css={{
    display: 'block',
    color: defaultColor ?? theme.color.white.default,
    width: '100%',
    fontFamily: `${theme.fonts.NetflixSans}, ${theme.fonts.Roboto}`,
  }}>
    <Head>
      <title>{t('header.title')}</title>
      <meta name="description" content={t('header.description')} />
      <meta name="keywords" content={t('header.keywords')} />
      <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <RootDomProvider>
      {children}
    </RootDomProvider>
  </div>
}