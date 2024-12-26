import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import I18nConfig from '@I18nConfig';
import { Roboto } from 'next/font/google'
import localFont from 'next/font/local'
import { appWithTranslation } from 'next-i18next'
import initMSW from '@/mocks';
import RootDomProvider from '@/provider/RootDom/provider';
initMSW();
const NetflixSans = localFont({
  src: [
    { path: '../assets/font/Netflix Sans Bold.otf', weight: '700', style: 'normal' },
    { path: '../assets/font/Netflix Sans Light.otf', weight: '300', style: 'normal' },
    { path: '../assets/font/Netflix Sans Regular.otf', weight: '400', style: 'normal' },
    { path: '../assets/font/NetflixSans-Medium.otf', weight: '500', style: 'normal' }
  ],
  display: 'swap'
})
const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['italic', 'normal'],
  subsets: ['latin']
})
function App({ Component, pageProps }: AppProps) {
  const style = NetflixSans.style.fontFamily + ', ' + roboto.style.fontFamily
  return <main style={{
    fontFamily: style
  }}>
    <RootDomProvider>
      <Component {...pageProps} />
    </RootDomProvider>
  </main>
}

export default appWithTranslation(App, I18nConfig)