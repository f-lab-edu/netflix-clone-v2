import type { UserConfig } from 'next-i18next';

const isBrowser = typeof window !== 'undefined';
const isDev = process.env.NODE_ENV === 'development';

const config: UserConfig = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'kr'],
  },
  fallbackLng: {
    default: ['en'],
  },
  debug: isDev,
  localePath: isBrowser ? '/locales' : './public/locales',
  defaultNS: 'common',
  ns: ['common'],
};

export default config;
