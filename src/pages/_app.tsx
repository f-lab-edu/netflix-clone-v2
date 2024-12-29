import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next'
import initMSW from '@/mocks';
import RootDomProvider from '@/provider/RootDom/provider';
import I18nConfig from '@I18nConfig';
initMSW();
function App({ Component, pageProps }: AppProps) {
  return <RootDomProvider>
    <Component {...pageProps} />
  </RootDomProvider>
}

export default appWithTranslation(App, I18nConfig)
