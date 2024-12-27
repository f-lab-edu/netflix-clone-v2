import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import I18nConfig from '@I18nConfig';
import { appWithTranslation } from 'next-i18next'
import initMSW from '@/mocks';
import RootDomProvider from '@/provider/RootDom/provider';
import { Theme, ThemeProvider } from '@emotion/react';
import NetflixSans from '@/components/ui/Font/NetflixSans';
import roboto from '@/components/ui/Font/Roboto';
initMSW();
function App({ Component, pageProps }: AppProps) {
  const theme: Theme = {
    fonts: {
      NetflixSans: NetflixSans.style.fontFamily,
      Roboto: roboto.style.fontFamily
    },
    borderRadius: {
      global: '6px',
      xs: '0.25rem'
    },
    color: {
      white: {
        default: '#ffffff',
        active: '',
        hover: 'rgba(255,255,255,0.7)',
      },
      red: {
        default: '#e50914',
        active: '#99161d',
        hover: '#c11119'
      }
    }
  }
  return <RootDomProvider>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </RootDomProvider>
}

export default appWithTranslation(App, I18nConfig)
