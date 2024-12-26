import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import initMSW from '@/mocks';
import RootDomProvider from '@/provider/RootDom/provider';

initMSW();

export default function App({ Component, pageProps }: AppProps) {
  return <RootDomProvider>
    <Component {...pageProps} />;
  </RootDomProvider>
}
