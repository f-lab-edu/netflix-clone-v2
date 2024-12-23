import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import RootDomProvider from '@/components/provider/RootDom/provider';
import initMSW from '@/mocks';

initMSW();

export default function App({ Component, pageProps }: AppProps) {
  return <RootDomProvider>
    <Component {...pageProps} />;
  </RootDomProvider>
}
