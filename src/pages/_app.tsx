import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import I18nConfig from '@I18nConfig';
import { appWithTranslation } from 'next-i18next'
import initMSW from '@/mocks';
import RootDomProvider from '@/provider/RootDom/provider';
initMSW();
function App({ Component, pageProps }: AppProps) {
  return <RootDomProvider>
    <Component {...pageProps} />
  </RootDomProvider>
}

export default appWithTranslation(App, I18nConfig)
