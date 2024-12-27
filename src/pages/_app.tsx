import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import I18nConfig from '@I18nConfig';
import { appWithTranslation } from 'next-i18next'
import initMSW from '@/mocks';
import RootDomProvider from '@/provider/RootDom/provider';
import { Theme, ThemeProvider } from '@emotion/react';
initMSW();
function App({ Component, pageProps }: AppProps) {
  const theme: Theme = {
    borderRadius: { global: '6px' },
    color: {
      netflixFontColor: '#ffffff',
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
