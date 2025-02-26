import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DevTools } from 'jotai-devtools'
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { Suspense } from 'react';
import PortalProvider from '@/components/ui/Dialog/provider/PortalProvider';
import RootDomProvider from '@/provider/RootDom/provider';
import 'jotai-devtools/styles.css'
import { useWindowResized } from '@/state/windowSize/hooks';
import { theme } from '../ui/theme';
import ClientOnly from '../ui/utils/ClientOnly';

interface BaseLayoutProps {
  children?: ReactNode,
  backgrondColor: string
  primaryTextColor: string
  seconderyTextColor: string
}

const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      throwOnError: true
    },
    queries: {
      throwOnError: true
    }
  }
})
const MSWLoader = dynamic(() => import('@/components/MSWLoader'), { ssr: false })

const BaseLayout = ({
  children,
  backgrondColor,
  primaryTextColor,
  seconderyTextColor
}: BaseLayoutProps) => {
  const { t } = useTranslation(['common'])
  useWindowResized()
  return <div css={{
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    fontFamily: `${theme.fonts.NetflixSans}, ${theme.fonts.Roboto}`,
    minHeight: '100vh',
    background: backgrondColor,
    '--primary-text-color': primaryTextColor,
    '--secondery-text-color': seconderyTextColor,
    color: 'var(--primary-text-color)',
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
          <PortalProvider>
            {children}
          </PortalProvider>
        </QueryClientProvider>
      </MSWLoader></Suspense>
    </RootDomProvider>
  </div>
}

const DarkBaseLayout = (
  props: Omit<BaseLayoutProps, 'backgrondColor' | 'primaryTextColor' | 'seconderyTextColor'>
) =>
  <BaseLayout
    backgrondColor={theme.color.black.default}
    primaryTextColor={theme.color.white.default}
    seconderyTextColor={theme.color.white.opacity70}
    {...props}
  />
BaseLayout.Dark = DarkBaseLayout

const LightBaseLayout = (
  props: Omit<BaseLayoutProps, 'backgrondColor' | 'primaryTextColor' | 'seconderyTextColor'>
) =>
  <BaseLayout
    backgrondColor={theme.color.white.default}
    primaryTextColor={theme.color.grey33.default}
    seconderyTextColor={theme.color.black.opacity70}
    {...props}
  />
BaseLayout.Light = LightBaseLayout

export default BaseLayout