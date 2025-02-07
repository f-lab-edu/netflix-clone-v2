import type { i18n } from 'i18next';
import type { UserConfig } from 'next-i18next';

const isBrowser = typeof window !== 'undefined';
// const isDev = process.env.NODE_ENV === 'development';

const config: UserConfig = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'kr'],
  },
  fallbackLng: {
    default: ['en'],
  },
  localePath: isBrowser ? '/locales' : './public/locales',
  defaultNS: 'common',
  serializeConfig: false,

  use: [{
    type: '3rdParty',
    init: (i18next: i18n) => {
      i18next.services.formatter?.add('krwCurrency', (value, lng) => {
        const digitNumber = new Intl.NumberFormat('ko-kr', { maximumSignificantDigits: 3 }).format(
          value || 0,
        )
        if (lng === 'kr') {
          return digitNumber + ' 원'
        } else {
          return 'KRW ' + digitNumber
        }
      })
    }
  }]
};

export default config;
