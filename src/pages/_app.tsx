import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import initMSW from '@/mocks';

initMSW();

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
