import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DevTools } from 'jotai-devtools'
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { Suspense } from 'react';
import RootDomProvider from '@/provider/RootDom/provider';
import 'jotai-devtools/styles.css'
import { theme } from '../ui/theme';
import ClientOnly from '../ui/utils/ClientOnly';

interface BaseLayoutProps {
  children?: ReactNode,
  defaultColor?: string
}

const queryClient = new QueryClient()
const MSWLoader = dynamic(() => import('@/components/MSWLoader'), { ssr: false })

export default function BaseLayout({ children, defaultColor }: BaseLayoutProps) {
  const { t } = useTranslation(['common'])
  return <div css={{
    display: 'flex',
    flexDirection: 'column',
    color: defaultColor ?? theme.color.white.default,
    width: '100%',
    fontFamily: `${theme.fonts.NetflixSans}, ${theme.fonts.Roboto}`,
    minHeight: '100vh',
  }}>
    <Head>
      <title>{t('header.title')}</title>
      <meta name="description" content={t('header.description')} />
      <meta name="keywords" content={t('header.keywords')} />
      <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <ClientOnly>
      <DevTools />
    </ClientOnly>
    <RootDomProvider>
      <Suspense><MSWLoader>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </MSWLoader></Suspense>
    </RootDomProvider>
  </div>
}